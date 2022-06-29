// See https://aka.ms/new-console-template for more information

using System.Collections;
using System.Runtime.CompilerServices;

class TestClass2
{

}
static class Extension
{
    public static string ToString(this TestClass2 testClass2)
    {
        return "TestClass2 test";
    }
}

class TestClass
{

    struct TestStruc
    {
        public int a { get; set; }
    }

    


    static int n = 0;
    public enum e庄闲和类型
    {
        无控制 = 0,
        庄赢,
        闲赢,
        和赢
    }
    struct TestStruct
    {
        public e庄闲和类型 a;
        public int b;
    }

    

    

    static void Test(ref TestClass2 testClass2)
    {
        testClass2 = null;
    }

    static void Main(string[] args)
    {
        TestClass2 testClass2 = new TestClass2();
        Console.WriteLine(testClass2.ToString());
        //Test(ref testClass2);
        //Console.WriteLine("1");
        //var task = GetTask();
        //task.Wait();
        //Console.WriteLine("2");

        var arr = new long[10];

        var a = new TestStruct() { b = 1 };
        var b = a;
        //long currentSelectedCost = 100;
        //for (int i = 0; i < 5; i++)
        //{
        //    currentSelectedCost = ChangeCost(currentSelectedCost, 100, 10_0000, false);
        //    Console.WriteLine(currentSelectedCost);
        //}

        //var input = 900;
        //var 位数 =(int)Math.Log10(input);
        //var 级数 = (long)Math.Pow(10, 位数);
        //var firstNumer = input / 级数;
        //firstNumer--;
        //long r;
        //if(firstNumer == 0)
        //{
        //    r = input - 级数 / 10;
        //}
        //else
        //    r = firstNumer*级数;
        //var s = string.Empty;
        //TestStruc testStruc = new TestStruc();
        //testStruc.a = 1;
        //TestStruc testStruc2 = testStruc;
        //testStruc2.a = 2;
        //Test();
        //Console.WriteLine($"1 {Thread.CurrentThread.GetHashCode()}");
        //Thread.Sleep(3000);
        //Console.WriteLine(""+ n);
    }

    public static long ChangeCost(long cur, long min, long max, bool isAdd = true)
    {
        if (isAdd && cur == max)
            return min;
        if (!isAdd && cur == min)
            return max;
        var input = cur;
        var 位数 = (int)Math.Log10(input);
        var 级数 = (long)Math.Pow(10, 位数);
        var firstNumer = input / 级数;
        if (isAdd)
        {
            firstNumer++;
            return firstNumer * 级数;
        }
        else
        {
            firstNumer--;
            if (firstNumer == 0)
            {
                return input - 级数 / 10;
            }
            else
                return firstNumer * 级数;
        }
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

    //async static MyAwaiter Test2()
    //{
    //    var a = new MyAwaiter();
    //    await a;
        
    //}
}