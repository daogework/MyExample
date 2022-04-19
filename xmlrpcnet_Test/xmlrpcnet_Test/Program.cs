using CookComputing.XmlRpc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpCallPython
{
    class Program
    {
        static void Main(string[] args)
        {
            ProxyInterface proxy = XmlRpcProxyGen.Create<ProxyInterface>();

            Console.WriteLine(proxy.getHelloWorld());
            Console.ReadLine();
        }
    }
}


[XmlRpcUrl("http://localhost:666")]
public interface ProxyInterface : IXmlRpcProxy
{
    [XmlRpcMethod("getHelloWorld")]
    string getHelloWorld();
}
 
