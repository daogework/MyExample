using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Diagnostics;
using System.Reflection;

namespace TestProject1
{
    [TestClass]
    public class UnitTest1
    {
        private TestContext testContextInstance;

        /// <summary>
        /// Gets or sets the test context which provides
        /// information about and functionality for the current test run.
        /// </summary>
        public TestContext TestContext
        {
            get { return testContextInstance; }
            set { testContextInstance = value; }
        }
        public int testProperty { get; set; } = 0;


        [TestMethod]
        public void Main()
        {
            //TestFunc f1 = Func;
            //TestFunc f2 = Func2;

            //int count = 0;
            //TestFunc f3 = (i,i2) =>
            //{
            //    count++;
            //    TestContext.WriteLine("3 "+ i+" "+i2);
            //};

            void Test4(string i)
            {
                TestContext.WriteLine(i.ToString());
            }

            //f1();
            //f2();
            //f3();

            //for (int i = 0; i < 3; i++)
            //{
            //    f1();
            //}
            //for (int i = 0; i < 3; i++)
            //{
            //    f2();
            //}
            //for (int i = 0; i < 3; i++)
            //{
            //    f3();
            //}


            For循环N次(Test4, 1, "ssss");//3
            //For循环N次(i=>TestContext.WriteLine(""+i), 1, new Test11());//3
        }

        class Test11
        {
            public override string ToString()
            {
                return "Test11";
            }
        }

        void Func(int i, int i2)
        {
            TestContext.WriteLine("1");
        }

        void Func2(int i, int i2)
        {
            TestContext.WriteLine("2");
        }



        public void For循环N次<T>(Action<T> testFunc,int n, T t)where T : class
        {
            for (int i = 0; i < n; i++)
            {
                testFunc(t);
            }
            
        }

    }
}