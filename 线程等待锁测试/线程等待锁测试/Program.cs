using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace 线程等待锁测试
{
    internal class Program
    {
        static private EventWaitHandle sendSleep =
        new EventWaitHandle(false, EventResetMode.AutoReset);
        static void Main(string[] args)
        {

            var task = Task.Run(() => { 
            
                Stopwatch stopwatch = Stopwatch.StartNew();
                while (true)
                {
                    sendSleep.WaitOne(10_000);
                    Console.WriteLine(""+ stopwatch.Elapsed);
                }
            });

            var task2 = Task.Run(() => {

                Thread.Sleep(1000);
                sendSleep.Set();
            });


            Task.WaitAll(task,task2);

        }
    }
}
