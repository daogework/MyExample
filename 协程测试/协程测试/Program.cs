using System;
using System.Collections;

namespace 协程测试
{
    class Program
    {
        enum Test
        {
            t1,
            t2,
            t3,
        }
        static void Main(string[] args)
        {
            Console.WriteLine("123".ToString());
            var p = new Program();
            var it = p.cRun();
            it.MoveNext();
            it.MoveNext();
            it.MoveNext();
            Console.WriteLine(it.Current);

        }

        IEnumerator cRun()
        {

            var it = cRun2();
            yield return it;
            yield return Test.t2;
            yield return Test.t3;
        }

        IEnumerator cRun2()
        {
            yield return Test.t1;
            yield return Test.t1;
            yield return Test.t1;
        }
    }
}
