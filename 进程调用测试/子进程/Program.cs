using System;
using System.Threading;

namespace 子进程
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("测试"+i);
                Thread.Sleep(500);
            }
            
        }
    }
}
