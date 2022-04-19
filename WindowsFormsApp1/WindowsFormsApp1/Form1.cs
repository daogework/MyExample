using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //var CtrlHeaderStrings = new string[] { "玩家ID", "昵称", "总下注", "燕子", "鸽子", "孔雀", "老鹰", "兔子", "熊猫", "猴子", "狮子", "银鲨", "金鲨", "通吃", "通赔", };
            ////dataGridView1.Columns.Add(CtrlHeaderStrings);
            //var btn = new System.Windows.Forms.Button();
            //btn.Text = "test";
            ////dataGridView1.Columns.Add(btn);
            //foreach (var item in CtrlHeaderStrings)
            //{
            //    dataGridView1.Columns.Add(item,item);
            //}
            //dataGridView1.Rows.Add(btn);
            //dataGridView1.Rows[0].Cells[0].Value = btn;

            DataGridViewColumn col = new DataGridViewCheckBoxColumn();
            //col.CellTemplate = new CalendarCell();
            //var headcell = new CustomColumnHeaderCell();
            ////headcell.Value = new Button();
            //headcell.Value = "test";
            //col.HeaderCell = headcell;
            col.DefaultHeaderCellType = typeof(DataGridViewCheckBoxCell);
            this.dataGridView1.Columns.Add(col);
            this.dataGridView1.RowCount = 5;

            //UserControl1 userControl = new UserControl1();
            //Controls.Add(userControl);
            //foreach (DataGridViewRow row in this.dataGridView1.Rows)
            //{
            //    row.Cells[0].Value = DateTime.Now;

            //}

        }
    }
}
