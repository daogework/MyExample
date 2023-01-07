using Grpc.Core;
using System;
using System.Text.Json;


namespace 算法连接
{
    public class Connection
    {
        public string ip_port = "47.243.76.221:5505";
        Channel? channel;
        GrpcApi.GrpcApiClient? client;

        public Connection()
        {
            channel = new Channel(ip_port, ChannelCredentials.Insecure);
            client = new GrpcApi.GrpcApiClient(channel);
            channel.ConnectAsync().Wait();
        }

        public void Run(BetReq betReq, int count, Func<int, long, BetRes, bool> func, bool writelog)
        {
            if (client == null) return;
            //var res = client.GetInitialReelInfo(new GetInitialReelInfoReq());
            //Logging.WriteLine(res);

            for (int i = 0; i < count; i++)
            {
                //new BetReq()
                //{
                //    Multiple = 1,//下注倍率
                //    Ante = 1,//下注底分
                //    ExpectRTP = 1,//期望RTP
                //    MaxCompensation = 1,//天險
                //    OutcomeMultiple = 1,//得分倍率(若無請填1)
                //    IsBaseGameNotHit = false,//必開沒得分的一般遊戲,不會進FG
                //    IsBaseGameHit = false,//必開有得分的一般遊戲,不會進FG
                //    IsFreeGameNotHit = false,//必開免費遊戲,僅開保底低倍率情況
                //    IsFreeGameHit = false,//必開免費遊戲,正常強度
                //}
                var subscore = betReq.Multiple * betReq.Ante;
                

                //下注参数传递
                var res = client.Bet(betReq);

                

                if (writelog)
                    PrintResult(res);

                if (func(i, subscore, res)) break;

            }


            void PrintResult(BetRes res)
            {
                var 各停輪詳細資訊 = "\n";
                foreach (var item in res.Result.ResultList)
                {

                    var 此次停輪各連線詳細訊息 = item.WinWayList.Count == 0 ? $"{item.WinWayList}" : "\n";

                    foreach (var winWay in item.WinWayList)
                    {
                        var SinglePos = JsonSerializer.Deserialize<int[][]>(winWay.SinglePos);
                        此次停輪各連線詳細訊息 +=
                            $"      每輪中獎個數相乘後的值:{winWay.X}\n" +
                            $"      表示幾連線:{winWay.LineNum}\n" +
                            $"      中獎圖標:{winWay.WinNum}\n" +
                            $"      此連線中獎彩金:{winWay.WinBonus}\n" +
                            $"      此圖標中獎位置:\n{TwoDArrToString(SinglePos, "        ")}\n" +
                            $"\n";
                    }
                    var Reels = JsonSerializer.Deserialize<int[][]>(item.Reels);
                    var TotalHitPosition = JsonSerializer.Deserialize<int[][]>(item.TotalHitPosition);
                    各停輪詳細資訊 +=
                        $"  停輪位置:{item.RandomNumList}\n" +
                        $"  此次停輪後的盤面:\n\n{ReelsToString(Reels, "    ")}\n\n" +
                        $"  此停輪所有圖標中獎位置:\n{TwoDArrToString(TotalHitPosition, "     ")}\n" +
                        $"  此次停輪彩金:{item.TotalWinBonus}\n" +
                        $"  此次停輪各連線詳細訊息:{此次停輪各連線詳細訊息}\n" +
                        $"  Scatter的中獎詳細訊息:{item.Scatter}\n" +
                        $"  中獎的Jackpot詳情:{item.Jackpot}\n" +
                        $"\n";
                }


                var AllReels = JsonSerializer.Deserialize<int[][][]>(res.Result.AllReels);
                var 各停輪盤面 = AllReelsToString(AllReels);

                Logging.WriteLine(
                    "\n======================结果开始======================\n" +
                    //$"滾輪表版本:{res.Result.Version} \n" +
                    $"目前所持有金額:{res.Result.CurrentCash} \n" +
                    $"總押注:{res.Result.TotalBet} \n" +
                    $"BG下注時的底注:{res.Result.Ante} \n" +
                    $"BG下注時的倍率:{res.Result.Multiple} \n" +
                    $"得分倍率:{res.Result.OutcomeMultiple} \n" +
                    $"是否進入FG:{res.Result.FgEnable} \n" +
                    $"可以選擇的 FG 列表:{res.Result.FgLevelList} \n" +
                    $"選擇的 FG 數字:{res.Result.FgLevelChoose} \n" +
                    $"各停輪盤面:{各停輪盤面} \n" +
                    $"各停輪詳細資訊:{各停輪詳細資訊}" +
                    $"總賠付:{res.Result.TotalBonus} \n" +
                    $"\n======================结果结束======================\n");
            }



            string ReelsToString(int[][]? Reels, string tab)
            {
                if (Reels == null) return "";
                var ReelsStr = "";

                for (int row = 0; row < 3; row++)
                {
                    var reelstr = "";
                    for (int col = 0; col < 5; col++)
                    {
                        var icon = Reels[col][row];
                        reelstr += icon.IconToString() + " ";
                    }
                    reelstr = reelstr.Trim() + "\n";
                    ReelsStr += tab + reelstr + "\n";
                }


                ReelsStr += tab + "原始盘面:\n";
                for (int row = 0; row < 3; row++)
                {
                    var reelstr = "";
                    for (int col = 0; col < 5; col++)
                    {
                        var icon = Reels[col][row];
                        var s = icon.ToString();
                        if (s.Length == 1) s += " ";
                        reelstr += s + " ";
                    }
                    reelstr = reelstr.Trim() + "\n";
                    ReelsStr += tab + reelstr + "\n";
                }
                //foreach (var Reel in Reels)
                //{
                //    var reelstr = "";
                //    foreach (var icon in Reel)
                //    {
                //        reelstr += icon.IconToString() + " ";
                //    }
                //    reelstr = reelstr.Trim();
                //    ReelsStr += tab + reelstr + "\n";
                //}
                ReelsStr = ReelsStr.Remove(ReelsStr.Length - 1);
                return ReelsStr;
            }



            string AllReelsToString(int[][][]? AllReels, int tabNumber = 1)
            {
                string tab = "";
                for (int i = 0; i < tabNumber; i++)
                {
                    tab += "  ";
                }
                var 各停輪盤面 = "\n\n";
                if (AllReels != null)
                {
                    foreach (var Reels in AllReels)
                    {
                        各停輪盤面 += ReelsToString(Reels, tab) + $"\n{tab}--------------------------------\n\n";
                    }
                    return 各停輪盤面;
                }
                return "";
            }

            string TwoDArrToString(int[][]? arr, string tab = "")
            {
                if (arr == null || arr.Length == 0) return "";

                var r = "";
                for (int row = 0; row < 3; row++)
                {
                    var reelstr = "";
                    for (int col = 0; col < 5; col++)
                    {
                        var icon = arr[col][row];
                        reelstr += icon.ToString() + " ";
                    }
                    reelstr = reelstr.Trim() + "\n";
                    r += tab + reelstr + "\n";
                }

                return r;
            }
        }
    }
}
