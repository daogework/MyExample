// See https://aka.ms/new-console-template for more information

using System.Collections;
using System.Runtime.CompilerServices;

class TestClass
{

    struct TestStruc
    {
        public int a { get; set; }
    }

    class MyAwaiter : IAsyncResult, IDisposable,INotifyCompletion
    {
        public MyAwaiter Current => throw new NotImplementedException();

        public MyAwaiter GetAwaiter()
        {
            return default(MyAwaiter);
        }

        public void GetResult() { }

        public ValueTask DisposeAsync()
        {
            throw new NotImplementedException();
        }

        public IAsyncEnumerator<MyAwaiter> GetAsyncEnumerator(CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public ValueTask<bool> MoveNextAsync()
        {
            throw new NotImplementedException();
        }

        public void OnCompleted(Action continuation)
        {
            throw new NotImplementedException();
        }

        public void UnsafeOnCompleted(Action continuation)
        {
            throw new NotImplementedException();
        }

        public IEnumerator<MyAwaiter> GetEnumerator()
        {
            return ((IEnumerable<MyAwaiter>)Current).GetEnumerator();
        }



        public bool MoveNext()
        {
            throw new NotImplementedException();
        }

        public void Reset()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public bool IsCompleted { get => true; }


        public object? AsyncState => throw new NotImplementedException();

        public WaitHandle AsyncWaitHandle => throw new NotImplementedException();

        public bool CompletedSynchronously => throw new NotImplementedException();
    }

    static int n = 0;
    static void Main(string[] args)
    {

        long currentSelectedCost = 100;
        for (int i = 0; i < 5; i++)
        {
            currentSelectedCost = ChangeCost(currentSelectedCost, 100, 10_0000, false);
            Console.WriteLine(currentSelectedCost);
        }

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