using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsAddWPFTest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            elementHost1.Child = new UserControl1();


            Test();
            async Task StartedPingAsync()
            {
                Console.WriteLine($"11 {Thread.CurrentThread.ManagedThreadId}");

                await Task.Delay(1000).ConfigureAwait(false);
                Console.WriteLine($"111 {Thread.CurrentThread.ManagedThreadId}");
                await Task.Delay(1000);

                Console.WriteLine($"22 {Thread.CurrentThread.ManagedThreadId}");
            }
            StartedPingAsync().ContinueWith(t => {
                Console.WriteLine($"33 {Thread.CurrentThread.ManagedThreadId}");
            });
        }

        async static void Test()
        {
            Console.WriteLine($"1 {Thread.CurrentThread.ManagedThreadId}");

            await Task.Delay(1000);


            Console.WriteLine($"2 {Thread.CurrentThread.ManagedThreadId}");
        }

        private void elementHost1_ChildChanged(object sender, System.Windows.Forms.Integration.ChildChangedEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

        }
    }
}
