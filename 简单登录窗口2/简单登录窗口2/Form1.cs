using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using 控制器;

namespace 简单登录窗口2
{
    public partial class Form1 : Form
    {
        Network? network = null;
        public Form1()
        {
            InitializeComponent();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            network = new Network();
            network.Login(new List<string>() { "47.101.147.244", "8.134.37.170", "8.210.106.28" }, $"{textBox1.Text},{textBox2.Text}",
                 b =>
                 {
                     if (!b)
                     {

                     }
                     else
                     {
                         MessageBox.Show("登录成功");
                     }
                 },
                 s =>
                 {
                     Text = s;
                 }
                 );
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            network?.Step();
        }
    }
}
