using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TestNetFramework1
{
    internal class Program
    {
        static RunInTargetThreadContext synchronizationContext; 
        static void Main(string[] args)
        {
            synchronizationContext = new RunInTargetThreadContext();
            SynchronizationContext.SetSynchronizationContext(synchronizationContext);
            //SynchronizationContext.Current;
            Test();
            Console.WriteLine($"1 {Thread.CurrentThread.ManagedThreadId}");
            

            while (true)
            {
                synchronizationContext.Tick();
                Thread.Sleep(10);
            }

            //Console.ReadKey();
           
        }

        async static Task Test()
        {
            Console.WriteLine($"2 {Thread.CurrentThread.ManagedThreadId}");

            //Thread.Sleep(1000);
            await Task.Run(() =>
            {
                Thread.Sleep(1000);
            });
            
            Console.WriteLine($"3 {Thread.CurrentThread.ManagedThreadId}");
        }

        public class RunInTargetThreadContext : SynchronizationContext
        {
            ConcurrentQueue<KeyValuePair<SendOrPostCallback,object>> concurrentPostQueue = new ConcurrentQueue<KeyValuePair<SendOrPostCallback, object>>();
            public override void Send(SendOrPostCallback d, object state)
            {
                try
                {
                    d(state);
                }
                catch (Exception ex)
                {
                    //Log.Error(ex.Message + "\n" + ex.StackTrace);
                }
            }

            public override void Post(SendOrPostCallback d, object state)
            {
                concurrentPostQueue.Enqueue(new KeyValuePair<SendOrPostCallback, object>(d,state));
            }

            public void Tick()
            {
                while(concurrentPostQueue.Count > 0)
                {
                    if(concurrentPostQueue.TryDequeue(out KeyValuePair<SendOrPostCallback, object> data)){
                       
                        try
                        {
                            data.Key(data.Value);
                        }
                        catch (Exception ex)
                        {
                            //Log.Error(ex.Message + "\n" + ex.StackTrace);
                        }
                    }
                }
            }
        }
    }
}
