// See https://aka.ms/new-console-template for more information

class TestClass
{
    static int n = 0;
    static void Main(string[] args)
    {
        Test();
        Console.WriteLine($"1 {Thread.CurrentThread.GetHashCode()}");
        Thread.Sleep(3000);
        Console.WriteLine(""+ n);
    }

    async static void Test()
    {
        Console.WriteLine($"2 {Thread.CurrentThread.GetHashCode()}");
        n++;
        //Thread.Sleep(1000);
        await Task.Delay(1000);

        Console.WriteLine("test");
        n++;
        Console.WriteLine($"3 {Thread.CurrentThread.GetHashCode()}");
    }
}