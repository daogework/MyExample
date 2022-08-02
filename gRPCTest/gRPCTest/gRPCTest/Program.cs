using System;
using System.Collections.Generic;
using System.Diagnostics;
using Arithmetic;
using Grpc.Core;

namespace gRPCTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Channel channel = new Channel("127.0.0.1:18999", ChannelCredentials.Insecure);
            //var client = new BJLAL.(channel);
            var client = new BJL.BJLClient(channel);
            channel.ConnectAsync().Wait();
            var PlayerList = new List<Dictionary<string, long>>() {
                //new Dictionary<string,long>{ { "", 1000 } },
                new Dictionary<string,long>{{"zhuangquyu",1000},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",500},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",1000},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",100},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",0},{"hequyu",1000},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",0},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",1000},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",0},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",1000},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",0},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",1000},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",10},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",1000},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",0},{"ControlValue",0},},
new Dictionary<string,long>{{"zhuangquyu",1000},{"xianquyu",0},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",1000},{"xianxingyun6quyu",0},{"ControlValue",0},},
new Dictionary<string,long>{{"zhuangquyu",0},{"xianquyu",1000},{"hequyu",0},{"zhuangduiziquyu",0},{"xianduiziquyu",0},{"daquyu",0},{"xiaoquyu",0},{"zhuangxingyun6quyu",0},{"xianxingyun6quyu",1000},{"ControlValue",100},},
            };

            for (int i = 0; i < 500; i++)
            {
                PlayerList.Add(new Dictionary<string, long> { { "zhuangquyu", 0 }, { "xianquyu", 1000 }, { "hequyu", 0 }, { "zhuangduiziquyu", 0 }, { "xianduiziquyu", 0 }, { "daquyu", 0 }, { "xiaoquyu", 0 }, { "zhuangxingyun6quyu", 0 }, { "xianxingyun6quyu", 1000 }, });
            }

            var PrizePool = 10000;
            var req = new Request();

            foreach (var item in PlayerList)
            {
                var player = new Player();
                player.Data.Add(item);
                req.PlayerList.Add(player);
            }

            Poker poker = null;
            int Round = 1;
            
            for (int i = 0; i < 1000; i++)
            {
                try
                {
                    var sw = Stopwatch.StartNew();
                if (poker==null)
                    poker = client.NewPoker(new Empty());
                req.Round = Round;
                req.Poker = poker;
                req.PrizePool = PrizePool;
                var reply = client.Handle(req);
                if (reply.ZhuangCardList.Contains(-1))
                {
                    Round = 1;
                    poker = null;
                }
                else
                {
                    Round++;
                    foreach (var item in reply.ZhuangCardList)
                    {
                        poker.Cards.Remove(item);
                    }
                    foreach (var item in reply.XianCardList)
                    {
                        poker.Cards.Remove(item);
                    }
                }
                
                Console.WriteLine("用时" + sw.ElapsedMilliseconds);
                Console.WriteLine("" + reply);
                Console.WriteLine("Round:" + Round);
                }
                catch (Exception e)
                {
                    Console.WriteLine("出错了:" + e);
                    break;
                }
            }
           






            channel.ShutdownAsync().Wait();
        }
    }
}
