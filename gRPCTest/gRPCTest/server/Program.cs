// See https://aka.ms/new-console-template for more information


using Arithmetic;
using Grpc.Core;

class GreeterImpl : BJL.BJLBase
{
    //    // Server side handler of the SayHello RPC
    //    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
    //    {
    //        return Task.FromResult(new HelloReply { Message = "Hello " + request.Name });
    //    }

    //    // Server side handler for the SayHelloAgain RPC
    //    public override Task<HelloReply> SayHelloAgain(HelloRequest request, ServerCallContext context)
    //    {
    //        return Task.FromResult(new HelloReply { Message = "Hello again " + request.Name });
    //    }
    public override Task<Reply> Handle(Request request, ServerCallContext context)
    {
        var replay = new Reply();
        replay.XianCardList.Add(100);
        replay.ZhuangCardList.Add(99);
        return Task.FromResult(replay) ;
    }

    public override Task<Poker> NewPoker(Empty request, ServerCallContext context)
    {
        return Task.FromResult(new Poker());
    }

    public static void Main(string[] args)
    {
        var Port = 18999;
        Server server = new Server
        {
            Services = { BJL.BindService(new GreeterImpl()) },
            Ports = { new ServerPort("localhost", Port, ServerCredentials.Insecure) }
        };
        server.Start();

        Console.WriteLine("Greeter server listening on port " + Port);
        Console.WriteLine("Press any key to stop the server...");
        Console.ReadKey();

        server.ShutdownAsync().Wait();
    }
}