using CookComputing.XmlRpc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpCallPython
{
    class Program
    {

        static async void test1(int sleepTime)
        {
            await Task.Run(()=> {
                Thread.Sleep(sleepTime);
            });
            Console.WriteLine(sleepTime);
        }

        static void Main(string[] args)
        {
            //ProxyInterface proxy = XmlRpcProxyGen.Create<ProxyInterface>();

            //Console.WriteLine(proxy.getHelloWorld());
            //Console.ReadLine();
            test1(1000);
            test1(500);

            Thread.Sleep(2000);
        }
    }
}


//[XmlRpcUrl("http://localhost:666")]
//public interface ProxyInterface : IXmlRpcProxy
//{
//    [XmlRpcMethod("getHelloWorld")]
//    string getHelloWorld();
//}

