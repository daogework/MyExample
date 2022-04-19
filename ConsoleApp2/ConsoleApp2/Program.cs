using System;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class AsyncSynchronizationContext : SynchronizationContext
    {
        public override void Send(SendOrPostCallback d, object state)
        {
            try
            {
                d(state);
            }
            catch (Exception ex)
            {
                // Put your exception handling logic here.

                Console.WriteLine(ex.Message + "\n" + ex.StackTrace);
            }
        }

        public override void Post(SendOrPostCallback d, object state)
        {
            try
            {
                d(state);
            }
            catch (Exception ex)
            {
                // Put your exception handling logic here.

                Console.WriteLine(ex.Message+"\n"+ex.StackTrace);
            }
        }
    }
    class Program
    {
        public int a = 0;
        static void Main(string[] args)
        {
            var s = "abc abc";
            s = s.Replace("abc","aaa");

        }

        static void test2()
        {
            Program p = null;
            p.a = 1;
        }

        static async void test()
        {
            await Task.Run(()=> {
                Console.WriteLine("r1");
                Thread.Sleep(100);
                Console.WriteLine("r2");
            });
            //try
            //{
                Console.WriteLine("1");
                test2();
                Console.WriteLine("2");
            //}catch(Exception e)
            //{
            //    Console.WriteLine($"catch error2 {e}");
            //}
        }
    }
}
