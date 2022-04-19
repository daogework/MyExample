using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace 测试窗口
{
    public partial class 窗口 : Form
    {
        public 窗口()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            var button = new Button();
            //button.
            button.Text = "fdsfds";
            button.Parent = this;
            button.Click += (ss, ee) => {
                button.Text = "1111";
            };
        }

        //private void Button_Click(object sender, EventArgs e)
        //{
        //    var btn = (Button)sender;
        //    btn.Text = "11111";
        //}
    }
}
