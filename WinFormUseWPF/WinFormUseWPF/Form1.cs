using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WpfControlLibrary2;

namespace WinFormUseWPF
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // Create a WPF Button

            System.Windows.Controls.Button btn = new System.Windows.Controls.Button();
            UserControl1 userControl1 = new UserControl1();
            btn.Content = "Button in WPF";
            elementHost1.Child = userControl1;
        }

        private void elementHost1_ChildChanged(object sender, System.Windows.Forms.Integration.ChildChangedEventArgs e)
        {

        }
    }
}
