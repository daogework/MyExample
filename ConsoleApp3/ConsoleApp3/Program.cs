using System;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine($"1111 {Thread.CurrentThread.GetHashCode()}");

            Task.Run(()=> {
                Console.WriteLine($"2222 {Thread.CurrentThread.GetHashCode()}");

            });

            Thread.Sleep(10000);
        }

        
    }
}
