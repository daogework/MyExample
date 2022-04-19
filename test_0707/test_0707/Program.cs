using System;
using System.Collections.Generic;

namespace test_0707
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = new List<int>() { 1,2,3,4,5,6,7,8};
            list.Insert(list.Count, 99);
        }
    }
}
