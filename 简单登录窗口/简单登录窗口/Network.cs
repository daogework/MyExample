using Google.Protobuf;
using NetBase;
using SubGameNet;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace 控制器
{

    public interface INetworkHandler
    {
        string Filter { get; }
        void OnMsg(string name,byte[] data);
    }

    public class Network
    {

        NetComponent? netComponent;
        Dictionary<string, List<Action<byte[]>>> callbackDic = new Dictionary<string, List<Action<byte[]>>>();
        List<INetworkHandler> networkHandlers = new List<INetworkHandler>();


       
        bool connecting = false;

        int port = 9000;
        //public string Ip { get; set; } = "47.101.147.244";
        //public string Ip { get; set; } = "192.168.101.221";

        public bool IsClose { get=> netComponent==null?true:!netComponent.IsConnected; }

        public Network()
        {
            
        }

        public void Login(List<string> iplist, string token, Action<bool> loginCallBack,Action<string> loginStatus)
        {
            if (connecting) return;
            netComponent = new NetComponent();
            netComponent.UseFrameworkReconnect = true;
            netComponent.RecvDataFunc = netDataPack =>
            {
                //Trace.WriteLine(netDataPack.packName);
                //Logging.logger.Information($"收到登录数据包 {netDataPack.packName}");
                Trace.WriteLine($"收到登录数据包 {netDataPack.packName}");
                switch (netDataPack.packName)
                {
                    case "CLGT.HandAck":
                        {
                            var ack = PaserData<CLGT.HandAck>(netDataPack.pbdata);
                            netComponent.SetEncryptProtocolKey(ack.SessionGuid, ack.RandomKey.ToByteArray());
                            Send(new CLGT.LoginReq()
                            {
                                //LoginType = CLGT.LoginReq.Types.LoginType.Guest,
                                //Token = "46phgkSAQfvNb9Vpxo3QmDE7m",
                                LoginType = 2,
                                Token = token
                            });
                        }
                        break;
                    case "CLGT.LoginAck":
                        {
                            var ack = PaserData<CLGT.LoginAck>(netDataPack.pbdata);
                            if (ack.Errcode != 0)
                            {
                                var reasons = new List<string>() { "成功", "平台服务器不可用", "账号被封禁", "系统繁忙", "系统错误", "系统暂未开放", "认证失败", "机器码未绑定", };
                                var reason = ack.Errcode >= reasons.Count? $"错误代码:{ack.Errcode}": reasons[ack.Errcode];
                                MessageBox.Show($"登录失败，{reason}");
                                netComponent.Dispose();
                                netComponent = null;
                                loginCallBack?.Invoke(false);
                            }
                            else
                            {
                                loginStatus?.Invoke("账号登录成功");
                                print($"登录成功:{ack}");
                                netComponent.RecvDataFunc = OnRecvData;
                                netComponent.LostConnectionCallBack = OnLostConnectionCallBack;
                                loginCallBack?.Invoke(true);

                                
                            }
                        }
                        break;
                }
            };
            
            loginStatus?.Invoke($"开始连接...[{string.Join(",",iplist)}]:{port}");
            connecting = true;
            netComponent.Connect(iplist, port, 10000, b =>
            {
                connecting = false;
                if (!b)
                {
                    loginStatus?.Invoke($"连接失败");
                    MessageBox.Show($"连接失败");
                }
                else
                {
                    loginStatus?.Invoke("连接成功，登录中...");
                    Trace.WriteLine(Security.MachineCode.GetMachineCodeHash());
                    Send(new CLGT.HandReq()
                    {
                        Platform = 3,
                        Product = 1,
                        Version = 1,
                        Device = Security.MachineCode.GetMachineCodeHash(),
                        //Device = "fa86d67d5cbb9e4dfcedf0a0160db873ff2ebe8d2aa273f92229aae0d3747f89",
                        Channel = 1,
                        Country = "MM",
                    });
                }
            });
        }

        public void Close()
        {
            netComponent?.Disconnect();
            netComponent?.Dispose();
            netComponent = null;
        }

        public void Step()
        {
            netComponent?.Update();
        }

        //public void SendAccessServiceReq(string ServerName,string NameCN,bool enter, string appId="", Action<bool> doneCallback=null)
        //{
        //    SendReq(new CLGT.AccessServiceReq() { 
        //        ServerName = ServerName,
        //        Action = enter?1:2,
        //        AppId = appId,
        //    },pbdata=> {
        //       var ack = PaserData<CLGT.AccessServiceAck>(pbdata);
        //        if (ack.Errcode != 0)
        //        {
        //            var err = new string[] { "", "服务不存在", "拒绝访问" };
        //            var enters = enter ? "登录" : "登出";
        //            var s = $"{NameCN}{enters}失败 {err[ack.Errcode]}";
        //            MainForm.PrintGameStatus(s);
        //            MessageBox.Show(s);
        //        }
        //        doneCallback?.Invoke(ack.Errcode == 0);
        //    });
        //}

        void OnRecvData(NetHelper.NetDataPack netDataPack)
        {
            //Logging.logger.Information($"{netDataPack.packName}");
            //print($"packName:{netDataPack.packName}");
            if (callbackDic.TryGetValue(netDataPack.packName, out var list))
            {
                var item = list[0];
                list.RemoveAt(0);
                if (list.Count ==0)
                {
                    callbackDic.Remove(netDataPack.packName);
                }
                item?.Invoke(netDataPack.pbdata);
            }
            for (int i = networkHandlers.Count - 1; i >= 0; i--)
            {
                var networkHandler = networkHandlers[i];
                if (string.IsNullOrEmpty(networkHandler.Filter))
                {
                    networkHandler.OnMsg(netDataPack.packName, netDataPack.pbdata);
                }
                else if (netDataPack.packName.Contains(networkHandler.Filter))
                    networkHandler.OnMsg(netDataPack.packName, netDataPack.pbdata);
            }
        }

        void OnLostConnectionCallBack(string rescon, string s)
        {
            Logging.logger.Warning($"网络连接断开 {rescon}");
            MessageBox.Show($"网络连接断开:{rescon}");
        }

        public static void print(string s)
        {
            Logging.logger.Information("网络:"+s);
        }

        public void Send<T>(T msg) where T:IMessage
        {
            var FullName = typeof(T).FullName;
            netComponent?.Send(FullName,msg.ToByteArray());
        }

        public void SendReq<T>(T msg, Action<byte[]> callback) where T : IMessage
        {
            var reqName = typeof(T).FullName;
            var ackName = reqName?.Replace("Req","Ack");
            AddCallBack(ackName??"", callback); 
            netComponent?.Send(reqName, msg.ToByteArray());
        }

        public void AddCallBack(string pkgName, Action<byte[]> callback)
        {
            if (!callbackDic.TryGetValue(pkgName, out var list))
            {
                list = new List<Action<byte[]>>();
                callbackDic[pkgName] = list;
            }
            list.Add(callback);
        }

        public void AddHanlder(INetworkHandler networkHandler)
        {
            networkHandlers.Add(networkHandler);
        }

        public void RemoveHanlder(INetworkHandler networkHandler)
        {
            networkHandlers.Remove(networkHandler);
        }

        public static T PaserData<T>(byte[] data) where T : IMessage<T>, new()
        {
            MessageParser<T> messageParser = new MessageParser<T>(() => new T());
            return messageParser.ParseFrom(data);
        }

        public static bool IsIPAddress(string ipAddress)
        {
            bool retVal = false;

            try
            {
                retVal = IPAddress.TryParse(ipAddress, out var address);
            }
            catch (Exception)
            {
            }
            return retVal;
        }
    }
}
