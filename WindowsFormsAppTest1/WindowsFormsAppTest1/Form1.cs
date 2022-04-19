using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsAppTest1
{
    //class WrapDataTable : DataTable
    //{
    //    public List<int> UnsortRowIdList { get; set; } = new List<int>();
    //}
    public partial class Form1 : Form
    {
        
        

        public Form1()
        {
            //设置窗体的双缓冲
            //this.SetStyle(ControlStyles.OptimizedDoubleBuffer | ControlStyles.ResizeRedraw | ControlStyles.AllPaintingInWmPaint, true);
            //this.UpdateStyles();

            InitializeComponent();

            //利用反射设置DataGridView的双缓冲
            Type dgvType = this.dataGridView1.GetType();
            PropertyInfo pi = dgvType.GetProperty("DoubleBuffered",
                BindingFlags.Instance | BindingFlags.NonPublic);
            pi.SetValue(this.dataGridView1, true, null);
        }
        DataTable _table = new DataTable();
        Random _random = new Random(DateTime.Now.Millisecond);

        List<int> _topIDList = new List<int>() { 
            1001,1002,
        };

        private void Form1_Load(object sender, EventArgs e)
        {
            //table.UnsortRowIdList.Add(1);
            //table.UnsortRowIdList.Add(2);
            //table.UnsortRowIdList.Add(3);
            // create sequence 
            //Item[] items = new Item[] { new Book{Id = 1, Price = 13.50, Genre = "Comedy", Author = "Jim Bob"},
            //                            new Book{Id = 2, Price = 8.50, Genre = "Drama", Author = "John Fox"},
            //                            new Movie{Id = 1, Price = 22.99, Genre = "Comedy", Director = "Phil Funk"},
            //                            new Movie{Id = 1, Price = 13.40, Genre = "Action", Director = "Eddie Jones"}};

            //var query = from i in items
            //            orderby i.Price
            //            select i;

            //table = query.CopyToDataTable();

            _table.Columns.Add("id", typeof(int));
            _table.Columns.Add("name", typeof(string));
            for (int i = 0; i < 20; i++)
            {
                _table.Columns.Add("test" + (i + 1), typeof(long));
            }

            BindingSource source = new BindingSource();
            source.DataSource = _table;

            //table.DefaultView.Sort


            //for (int i = 0; i < 2000; i++)
            //{
            //    var row = table.NewRow();
            //    row["id"] = i + 1000;
            //    row["name"] = "name" + i;
            //    for (int j = 0; j < table.Columns.Count - 2; j++)
            //        row["test" + (j + 1)] = (long)random.Next(0, 100000000) * 10000;
            //    table.Rows.Add(row);
            //}



            foreach (DataColumn col in _table.Columns)
            {
                var commonColumn = new DataGridViewTextBoxColumn();
                commonColumn.DefaultHeaderCellType = typeof(CustomDataGridViewColumnHeaderCell);
                commonColumn.DataPropertyName = col.ColumnName;
                commonColumn.HeaderText = col.ColumnName;
                commonColumn.Resizable = DataGridViewTriState.True;
                commonColumn.Width = 150;
                //commonColumn.HeaderCell.w
                //commonColumn.Tag = "test";
                this.dataGridView1.Columns.Add(commonColumn);
            }
            //dataGridView1.DataSource = table;
            //dataGridView1.BindingContext

            for (int i = 0; i < 2000; i++)
            {
                var row = new List<object>();
                row.Add(i + 1000);
                row.Add("name" + i);
                for (int j = 0; j < _table.Columns.Count - 2; j++)
                    row.Add((long)_random.Next(0, 100000000) * 10000);
                //table.Rows.Add(row);
                dataGridView1.Rows.Add(row.ToArray());
            }

            foreach (var id in _topIDList)
            {
                var rowdata = FindRowDataById(id);
                rowdata.Tag = rowdata.HeaderCell.Value = "TOP";
                
            }

            dataGridView1.ColumnHeadersDefaultCellStyle.Alignment = DataGridViewContentAlignment.BottomCenter;
            
            //dataGridView1.col

            //dataGridView1.RowHeadersWidthSizeMode = DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            //dataGridView1.rowsi
            // or even better, use .DisableResizing. Most time consuming enum is DataGridViewRowHeadersWidthSizeMode.AutoSizeToAllHeaders

            // set it to false if not needed
            //dataGridView1.RowHeadersVisible = false;
            //dataGridView1.AutoSizeRowsMode = DataGridViewAutoSizeRowsMode.None;
            //dataGridView1.DataBindings.
            //dataGridView1.VirtualMode = true;
            //dataGridView1.Sort();
            //dataGridView1.sort
            dataGridView1.SortCompare += DataGridView1_SortCompare;
            //dataGridView1.value
            //table.sort

            //table.Rows.Sort();
            dataGridView1.RowHeadersVisible = true;
            dataGridView1.RowHeadersWidth = 55;
            //dataGridView1.ColumnHeaderMouseClick += DataGridView1_ColumnHeaderMouseClick;

            //dataGridView1.sort
            dataGridView1.CellFormatting += DataGridView1_CellFormatting;
        }

        private void DataGridView1_CellFormatting(object sender, DataGridViewCellFormattingEventArgs e)
        {
            DataGridView dataGridView = sender as DataGridView;
            if(e.ColumnIndex >= 2)
            {
                var v = (long)e.Value;
                if (v > 1000000)
                {
                    e.CellStyle.BackColor = Color.Yellow;
                }
            }
        }

        private void DataGridView1_ColumnHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e)
        {
            //throw new NotImplementedException();
            Console.WriteLine("DataGridView1_ColumnHeaderMouseClick");
        }

        DataGridViewRow FindRowDataById(int id)
        {
            for (int rowindex = 0; rowindex < dataGridView1.RowCount; rowindex++)
            {
                var item = dataGridView1.Rows[rowindex];
                if((int)item.Cells[0].Value == id)
                {
                    return item;
                }
            }
            return null;
        }

        private void DataGridView1_SortCompare(object sender, DataGridViewSortCompareEventArgs e)
        {
            DataGridView dataGridView = sender as DataGridView;
            object v1 = e.CellValue1, v2 = e.CellValue2;

            e.SortResult = ((IComparable)v1).CompareTo(v2);

            var r1 = dataGridView.Rows[e.RowIndex1].Cells[0].Value;
            var r2 = dataGridView.Rows[e.RowIndex2].Cells[0].Value;

            var c1 = (string)dataGridView.Rows[e.RowIndex1].Tag == "TOP";
            var c2 = (string)dataGridView.Rows[e.RowIndex2].Tag == "TOP";
            if (c1 && !c2)
            {
                e.SortResult = dataGridView.SortOrder == SortOrder.Descending ? 1:-1;
            }
            else if (c2 && !c1)
            {
                e.SortResult = dataGridView.SortOrder == SortOrder.Descending ? -1 : 1;
            }
            e.Handled = true;
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            //var datas = table.Select("id > 1001 and id < 1100");
            //foreach (DataRow item in datas)
            //{
            //    //item[0] = random.Next(0,1000);
            //    for (int i = 2; i < dataGridView1.Columns.Count; i++)
            //    {
            //        //item[i] = random.Next(0, 100000000);
            //    }

            //}
            //foreach (DataGridViewRow item in dataGridView1.Rows)
            //{

            //}
            //for (int i = 0; i < dataGridView1.RowCount; i++)
            //{
            //    var item = dataGridView1.Rows[i];
            //    for (int j = 2; j < dataGridView1.ColumnCount; j++)
            //    {
            //        var cell = item.Cells[j];
            //        cell.Value = _random.Next(0, 100000000);
            //    }
            //}
            //dataGridView1.s
        }

        private void contextMenuStrip1_Opening(object sender, CancelEventArgs e)
        {

        }
    }


    public class Item
    {
        public int Id { get; set; }
        public double Price { get; set; }
        public string Genre { get; set; }
    }

    public class Book : Item
    {
        public string Author { get; set; }
    }

    public class Movie : Item
    {
        public string Director { get; set; }
    }

    public static class DataSetLinqOperators
    {
        public static DataTable CopyToDataTable<T>(this IEnumerable<T> source)
        {
            return new ObjectShredder<T>().Shred(source, null, null);
        }

        public static DataTable CopyToDataTable<T>(this IEnumerable<T> source,
                                                    DataTable table, LoadOption? options)
        {
            return new ObjectShredder<T>().Shred(source, table, options);
        }

    }

    public class ObjectShredder<T>
    {
        private FieldInfo[] _fi;
        private PropertyInfo[] _pi;
        private Dictionary<string, int> _ordinalMap;
        private Type _type;

        public ObjectShredder()
        {
            _type = typeof(T);
            _fi = _type.GetFields();
            _pi = _type.GetProperties();
            _ordinalMap = new Dictionary<string, int>();
        }

        public DataTable Shred(IEnumerable<T> source, DataTable table, LoadOption? options)
        {
            if (typeof(T).IsPrimitive)
            {
                return ShredPrimitive(source, table, options);
            }


            if (table == null)
            {
                table = new DataTable(typeof(T).Name);
            }

            // now see if need to extend datatable base on the type T + build ordinal map
            table = ExtendTable(table, typeof(T));

            table.BeginLoadData();
            using (IEnumerator<T> e = source.GetEnumerator())
            {
                while (e.MoveNext())
                {
                    if (options != null)
                    {
                        table.LoadDataRow(ShredObject(table, e.Current), (LoadOption)options);
                    }
                    else
                    {
                        table.LoadDataRow(ShredObject(table, e.Current), true);
                    }
                }
            }
            table.EndLoadData();
            return table;
        }

        public DataTable ShredPrimitive(IEnumerable<T> source, DataTable table, LoadOption? options)
        {
            if (table == null)
            {
                table = new DataTable(typeof(T).Name);
            }

            if (!table.Columns.Contains("Value"))
            {
                table.Columns.Add("Value", typeof(T));
            }

            table.BeginLoadData();
            using (IEnumerator<T> e = source.GetEnumerator())
            {
                Object[] values = new object[table.Columns.Count];
                while (e.MoveNext())
                {
                    values[table.Columns["Value"].Ordinal] = e.Current;

                    if (options != null)
                    {
                        table.LoadDataRow(values, (LoadOption)options);
                    }
                    else
                    {
                        table.LoadDataRow(values, true);
                    }
                }
            }
            table.EndLoadData();
            return table;
        }

        public DataTable ExtendTable(DataTable table, Type type)
        {
            // value is type derived from T, may need to extend table.
            foreach (FieldInfo f in type.GetFields())
            {
                if (!_ordinalMap.ContainsKey(f.Name))
                {
                    DataColumn dc = table.Columns.Contains(f.Name) ? table.Columns[f.Name]
                        : table.Columns.Add(f.Name, f.FieldType);
                    _ordinalMap.Add(f.Name, dc.Ordinal);
                }
            }
            foreach (PropertyInfo p in type.GetProperties())
            {
                if (!_ordinalMap.ContainsKey(p.Name))
                {
                    DataColumn dc = table.Columns.Contains(p.Name) ? table.Columns[p.Name]
                        : table.Columns.Add(p.Name, p.PropertyType);
                    _ordinalMap.Add(p.Name, dc.Ordinal);
                }
            }
            return table;
        }

        public object[] ShredObject(DataTable table, T instance)
        {

            FieldInfo[] fi = _fi;
            PropertyInfo[] pi = _pi;

            if (instance.GetType() != typeof(T))
            {
                ExtendTable(table, instance.GetType());
                fi = instance.GetType().GetFields();
                pi = instance.GetType().GetProperties();
            }

            Object[] values = new object[table.Columns.Count];
            foreach (FieldInfo f in fi)
            {
                values[_ordinalMap[f.Name]] = f.GetValue(instance);
            }

            foreach (PropertyInfo p in pi)
            {
                values[_ordinalMap[p.Name]] = p.GetValue(instance, null);
            }
            return values;
        }
    }
}
