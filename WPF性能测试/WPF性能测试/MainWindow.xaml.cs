using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPF性能测试
{

    public enum EmployeeType
    {
        Normal,
        Supervisor,
        Manager
    }
    class Data: INotifyPropertyChanged
    {
        public int sortid { get; set; } = 0;
        public int id { get; set; }
        public string name { get; set; } = "";

        private long total;
        public long Total
        {
            get => total; set
            {
                if (total != value)
                {
                    total = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v1;
        public long V1
        {
            get => v1; set
            {
                if (v1 != value)
                {
                    v1 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v2;
        public long V2
        {
            get => v2; set
            {
                if (v2 != value)
                {
                    v2 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v3;
        public long V3
        {
            get => v3; set
            {
                if (v3 != value)
                {
                    v3 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v4;
        public long V4
        {
            get => v4; set
            {
                if (v4 != value)
                {
                    v4 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v5;
        public long V5
        {
            get => v5; set
            {
                if (v5 != value)
                {
                    v5 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v6;
        public long V6
        {
            get => v6; set
            {
                if (v6 != value)
                {
                    v6 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v7;
        public long V7
        {
            get => v7; set
            {
                if (v7 != value)
                {
                    v7 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v8;
        public long V8
        {
            get => v8; set
            {
                if (v8 != value)
                {
                    v8 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v9;
        public long V9
        {
            get => v9; set
            {
                if (v9 != value)
                {
                    v9 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v10;
        public long V10
        {
            get => v10; set
            {
                if (v10 != value)
                {
                    v10 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v11;
        public long V11
        {
            get => v11; set
            {
                if (v11 != value)
                {
                    v11 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v12;
        public long V12
        {
            get => v12; set
            {
                if (v12 != value)
                {
                    v12 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v13;
        public long V13
        {
            get => v13; set
            {
                if (v13 != value)
                {
                    v13 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v14;
        public long V14
        {
            get => v14; set
            {
                if (v14 != value)
                {
                    v14 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v15;
        public long V15
        {
            get => v15; set
            {
                if (v15 != value)
                {
                    v15 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v16;
        public long V16
        {
            get => v16; set
            {
                if (v16 != value)
                {
                    v16 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v17;
        public long V17
        {
            get => v17; set
            {
                if (v17 != value)
                {
                    v17 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v18;
        public long V18
        {
            get => v18; set
            {
                if (v18 != value)
                {
                    v18 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v19;
        public long V19
        {
            get => v19; set
            {
                if (v19 != value)
                {
                    v19 = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private long v20;
        public long V20
        {
            get => v20; set
            {
                if (v20 != value)
                {
                    v20 = value;
                    NotifyPropertyChanged();
                }
            }
        }


        private void NotifyPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        public event PropertyChangedEventHandler? PropertyChanged;
    }
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        ObservableCollection<Data> users;
        Random random = new Random(DateTime.Now.Millisecond);
        public MainWindow()
        {
            InitializeComponent();
             users = new ObservableCollection<Data>();

            

            for (int i = 0; i < 5000; i++)
            {

                users.Add(new Data
                {
                    id = i,
                    name = "" + random.Next(),
                    Total = random.Next(),
                    V1 = random.Next(),
                    V2 = random.Next(),
                    V3 = random.Next(),
                    V4 = random.Next(),
                    V5 = random.Next(),
                    V6 = random.Next(),
                    V7 = random.Next(),
                    V8 = random.Next(),
                    V9 = random.Next(),
                    V10 = random.Next(),
                    V11 = random.Next(),
                    V12 = random.Next(),
                    V13 = random.Next(),
                    V14 = random.Next(),
                    V15 = random.Next(),
                    V16 = random.Next(),
                    V17 = random.Next(),
                    V18 = random.Next(),
                    V19 = random.Next(),
                    V20 = random.Next()
                });
            }

            users[0].sortid = -10;
            users[1].sortid = -11;
            users[0].name = "系统1";
            users[1].name = "系统2";

            dataGrid.ItemsSource = users;
            //dataGrid.getb
            //dataGrid.as
            var cv = CollectionViewSource.GetDefaultView(dataGrid.ItemsSource);
            cv.SortDescriptions.Add(new SortDescription("sortid", ListSortDirection.Ascending));
            cv.SortDescriptions.Add(new SortDescription("id", ListSortDirection.Ascending));


            //foreach (Binding item in dataGrid.BindingGroup.Items)
            //{
            //    item.IsAsync = true;
            //}
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Stopwatch sw = Stopwatch.StartNew();
            foreach (var item in users)
            {
                item.Total = random.Next();
                item.V1 = random.Next();
                item.V2 = random.Next();
                item.V3 = random.Next();
                item.V4 = random.Next(); item.V5 = random.Next(); item.V6 = random.Next(); item.V7 = random.Next(); item.V8 = random.Next();
                item.V9 = random.Next();
                item.V10 = random.Next();
                item.V11 = random.Next();
                item.V12 = random.Next();
                item.V13 = random.Next();
                item.V14 = random.Next();
                item.V15 = random.Next();
                item.V16 = random.Next();
                item.V17 = random.Next();
                item.V18 = random.Next();
                item.V19 = random.Next();
                item.V20 = random.Next();
            }
            Trace.WriteLine("1 "+sw.ElapsedMilliseconds);
            sw.Restart();
            //dataGrid.Items.Refresh();
            //for (int i = 0; i < dataGrid.Items.Count-1; i++)
            //{
            //    var d = dataGrid.Items.GetItemAt(i) as Data;
            //    d.total = random.Next();
            //}
            //foreach (Data d in dataGrid.Items.get)
            //{
            //    d.total = random.Next();
            //}
            //Trace.WriteLine(dataGrid.Items[0].GetType().FullName);
            Trace.WriteLine("2 " + sw.ElapsedMilliseconds);
        }
    }
}
