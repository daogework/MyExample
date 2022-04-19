using System;
using System.Runtime.InteropServices;

namespace 内存操作
{
    [StructLayout(LayoutKind.Sequential, Pack = 1)]
    struct ExampleStruct
    {
        public byte b1;
        public byte b2;
        public int i3;
        [MarshalAs(UnmanagedType.ByValArray, SizeConst = 50)]
        public char[] bytes;
    }
    class Program
    {
        static byte[] getBytes<T>(T str)
        {
            int size = Marshal.SizeOf(str);
            byte[] arr = new byte[size];

            IntPtr ptr = Marshal.AllocHGlobal(size);
            Marshal.StructureToPtr(str, ptr, true);
            Marshal.Copy(ptr, arr, 0, size);
            Marshal.FreeHGlobal(ptr);
            return arr;
        }
        static T fromBytes<T>(byte[] arr)
        {
            T str = default(T);

            int size = Marshal.SizeOf(str);
            IntPtr ptr = Marshal.AllocHGlobal(size);

            Marshal.Copy(arr, 0, ptr, size);

            str = (T)Marshal.PtrToStructure(ptr, str.GetType());
            Marshal.FreeHGlobal(ptr);

            return str;
        }
        static void Main(string[] args)
        {
            ExampleStruct ex = new ExampleStruct();

            Console.WriteLine("Size:      {0}", Marshal.SizeOf(ex));

            ex.b1 = 1;
            ex.b2 = 2;
            ex.i3 = 99;
            ex.bytes = new char[50];
            ex.bytes[0] = 'a';
            ex.bytes[49] = 'b';

            var bytes = getBytes(ex);

            var r = fromBytes<ExampleStruct>(bytes);
            Console.WriteLine($"r.b1:{r.b1} r.b2:{r.b2} r.i3:{r.i3} r.bytes[0]:{r.bytes[0]} r.bytes[49]:{r.bytes[49]}  ");
        }
    }
}
