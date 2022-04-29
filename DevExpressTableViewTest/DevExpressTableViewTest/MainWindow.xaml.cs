using DevExpress.Mvvm;
using DevExpress.Mvvm.DataAnnotations;
using DevExpress.Mvvm.Xpf;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using DevExpress.Xpf.Grid;
using DevExpress.Xpf.Core.ConditionalFormatting;
using DevExpress.Xpf.Core.Native;
using DevExpress.Mvvm.Native;
using DevExpress.Xpf.Core;

namespace 控制器
{

    
    
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        
        ObservableCollection<SLWHData> users;
        Random random = new Random(DateTime.Now.Millisecond);


        public event PropertyChangedEventHandler PropertyChanged;
        private void NotifyPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        string result = "绿狮子";
        public string Result
        {
            get => result; set
            {
                result = value;
                NotifyPropertyChanged();
            }
        }

        string result2 = "庄";
        public string Result2
        {
            get => result2; set
            {
                result2 = value;
                NotifyPropertyChanged();
            }
        }

        string rbtnTopCurGroup = "";
        public string RbtnTopCurGroup
        {
            get => rbtnTopCurGroup; set
            {
                rbtnTopCurGroup = value;
                NotifyPropertyChanged();
            }
        }

        string rbtnBottomCurGroup = "";
        public string RbtnBottomCurGroup
        {
            get => rbtnBottomCurGroup; set
            {
                rbtnBottomCurGroup = value;
                NotifyPropertyChanged();
            }
        }

        public ICollectionView CollectionView { get; private set; }
        public MainWindow()
        {
            InitializeComponent();
            ThemeManager.SetTheme(this, Theme.Seven);
            users = new ObservableCollection<SLWHData>();

            

            for (int i = 0; i < 100; i++)
            {

                users.Add(new SLWHData
                {
                    Id = random.Next(),
                    Name = "" + random.Next(),
                    //总下注 = random.Next(),
                    //狮子 = random.Next(),
                    //熊猫 = random.Next(),
                    //猴子 = random.Next(),
                    //兔子 = random.Next(),
                    //红 = random.Next(),
                    //绿 = random.Next(),
                    //黄 = random.Next(),
                    //红狮子 = random.Next(),
                    //绿狮子 = random.Next(),
                    //黄狮子 = random.Next(),
                    //红熊猫 = random.Next(),
                    //绿熊猫 = random.Next(),
                    //黄熊猫 = random.Next(),
                    //红猴子 = random.Next(),
                    //绿猴子 = random.Next(),
                    //黄猴子 = random.Next(),
                    //红兔子 = random.Next(),
                    //绿兔子 = random.Next(),
                    黄兔子 = random.Next(),
                    //V20 = random.Next()
                });
            }

            users[10].Sortid = -10;
            users[11].Sortid = -10;
            users[10].Name = "系统1";
            users[11].Name = "系统2";

            CollectionView = new CollectionViewSource() { Source = users }.View;
            CollectionView.SortDescriptions.Add(new SortDescription("Sortid", ListSortDirection.Ascending));
            CollectionView.SortDescriptions.Add(new SortDescription("总下注", ListSortDirection.Descending));
            CollectionView.MoveCurrentToFirst();

            dataGridEx.ItemsSource = CollectionView;
              
            FrameworkElement elem = LayoutHelper.FindElementByName(dataGridEx.Bands[0].View, "TopRadioButton");
            //elem = LayoutHelper.FindElementByType<RadioButton>(col.View);
            Trace.WriteLine(elem);

            //狮子.Width
            //GridColumn.WidthProperty
            //var Value=狮子GridColumn.Width.Value;
            //Value = 狮子GridColumn..Value;
            //Trace.WriteLine(Value);
            //dataGridEx.Columns[0].FieldName;
        }

        

        public bool TestB = true;
        ColumnBase lastcol = null;

        public static SolidColorBrush 最小值背景色 = Utils.BushFromStringColor("#FF9999");
        public static SolidColorBrush 最大值背景色 = Utils.BushFromStringColor("#E2EFDA");

        //public static SolidColorBrush 负值字体颜色 = Utils.BushFromStringColor("#C00000");
        //public static SolidColorBrush 正值字体颜色 = Utils.BushFromStringColor("#00B050");
        private void view_CustomCellAppearance(object sender, CustomCellAppearanceEventArgs e)
        {
            if (e.Property == TextElement.BackgroundProperty)
            {
                var data = (SLWHData)dataGridEx.GetRow(e.RowHandle);
                if (data.MinFieldName == e.Column.FieldName)
                {
                    e.Result = 最小值背景色;
                    e.Handled = true;
                }
                else if (data.MaxFieldName == e.Column.FieldName)
                {
                    e.Result = 最大值背景色;
                    e.Handled = true;
                }
            }
        }

        private void SimpleButton_Click(object sender, RoutedEventArgs e)
        {
            //users[0].id = 1;
            //
            //dataGridEx.RefreshData();
            Stopwatch sw = Stopwatch.StartNew();
            foreach (var item in users)
            {
                item.Id = random.Next();
                item.总下注 = random.Next();
                item.狮子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.熊猫 = random.Next(-20_0000_0000, 20_0000_0000);
                item.猴子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.兔子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.红 = random.Next(-20_0000_0000, 20_0000_0000);
                item.绿 = random.Next(-20_0000_0000, 20_0000_0000);
                item.黄 = random.Next(-20_0000_0000, 20_0000_0000);
                item.红狮子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.绿狮子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.黄狮子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.红熊猫 = random.Next(-20_0000_0000, 20_0000_0000);
                item.绿熊猫 = random.Next(-20_0000_0000, 20_0000_0000);
                item.黄熊猫 = random.Next(-20_0000_0000, 20_0000_0000);
                item.红猴子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.绿猴子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.黄猴子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.红兔子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.绿兔子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.黄兔子 = random.Next(-20_0000_0000, 20_0000_0000);
                item.Refresh();
            }

            
            CollectionView?.Refresh();
            Trace.WriteLine(sw.ElapsedMilliseconds);
            //sw.Restart();
            //dataGridEx.RefreshData();
        }
        bool b = false;


        List<string> testList = new List<string>() { 
        "三元","四喜",
        "红狮子",
        "绿狮子",
        "黄狮子",
        };
        int testIndex = 0;
        private void SimpleButton_Click_1(object sender, RoutedEventArgs e)
        {
            testIndex++;
            testIndex %= testList.Count;
            //if (b)
            //{
            //    Result = "";
            //}
            //else
            //{
            //    Result = "四喜";
            //}
            Result = testList[testIndex];


            b = !b;
            if (lastcol != null)
            {

                    


            }
        }


        bool blockBottomEvent = false;
        bool blockTopEvent = false;
        private void TopRadioButton_Checked(object sender, RoutedEventArgs e)
        {
            if (blockTopEvent) return;
            var topbtn = (RadioButton)sender;

            blockBottomEvent = true;

            //bottomRadioButtonList.Where(item => !item.GroupName.Equals(topbtn.Content)).ForEach(btn => btn.IsChecked = false);
            
            if((string)topbtn.Content == "三元" || (string)topbtn.Content == "四喜")
                checkButtonList.ForEach(btn => btn.IsChecked = false);

            bottomRadioButtonList.ForEach(btn => btn.IsChecked = false);

            blockBottomEvent = false;
        }



        static List<string> Sanyuan = new List<string>() { "狮子","熊猫", "猴子", "兔子", };
        static List<string> Sixi = new List<string>() { "红", "绿", "黄",};

        string getContentCategoryString(string s)
        {
            if (Sanyuan.Contains(s)) return "三元";
            if (Sixi.Contains(s)) return "四喜";
            return "";
        }

        private void BottomRadioButton_Checked(object sender, RoutedEventArgs e)
        {
            if (blockBottomEvent) return;
            var bottomBtn = (RadioButton)sender;

            blockTopEvent = true;

            topRadioButtonList.Where(
                    item => ((string)item.Content).Contains(getContentCategoryString((string)bottomBtn.Content)))
                    .ForEach(btn => btn.IsChecked = true);

            checkButtonList.ForEach(btn => btn.IsChecked = false);

            blockTopEvent = false;
        }


        
        //class ColumData
        //{
        //    public GridColumn column;
        //    public CheckBox checkBox;
        //}
        //List<ColumData> columDatalist = new List<ColumData>();
        private void AnimalCheckBox_Checked(object sender, RoutedEventArgs e)
        {
            if (blockBottomEvent) return;
            var checkBox = (CheckBox)sender;
            blockTopEvent = true;

            topRadioButtonList.Where((item) => ((string)item.Content).Contains("三元")  || ((string)item.Content).Contains("四喜"))
                .ForEach(btn => btn.IsChecked = false);
            bottomRadioButtonList.ForEach((btn) => btn.IsChecked = false);



            List<GridColumn> sortedList = new List<GridColumn>();
            
            for (int i = 0; i < checkButtonList.Count; i++)
            {
                var btn = checkButtonList[i];
                if (btn.IsChecked.Value)
                {
                    var col = dataGridEx.Columns.First(item => item.FieldName == (string)btn.Content);
                    sortedList.Add(col);
                }
            }
            for (int i = 0; i < checkButtonList.Count; i++)
            {
                var btn = checkButtonList[i];
                if (!btn.IsChecked.Value)
                {
                    var col = dataGridEx.Columns.First(item => item.FieldName == (string)btn.Content);
                    sortedList.Add(col);
                }
            }

            for (int i = 0; i < sortedList.Count; i++)
            {
                var col = sortedList[i];
                col.VisibleIndex = 10 + i;
            }


            blockTopEvent = false;
        }

        private void ZXHRadioButton_Checked(object sender, RoutedEventArgs e)
        {
            var btn = (RadioButton)sender;
        }

        



        /// <summary>
        /// 初始化
        /// </summary>
        List<RadioButton> topRadioButtonList = new List<RadioButton>();
        private void TopRadioButton_Initialized(object sender, EventArgs e)
        {
            var btn = sender as RadioButton;
            topRadioButtonList.Add(btn);
        }

        List<RadioButton> bottomRadioButtonList = new List<RadioButton>();
        private void BottomRadioButton_Initialized(object sender, EventArgs e)
        {
            var btn = sender as RadioButton;
            bottomRadioButtonList.Add(btn);
            if ((string)btn.Content == "狮子")
            {
                Trace.WriteLine(btn.Width);
            }
        }

        List<CheckBox> checkButtonList = new List<CheckBox>();
        private void BottomCheckButton_Initialized(object sender, EventArgs e)
        {
            var checkBox = sender as CheckBox;
            checkButtonList.Add(checkBox);
            
        }

        public void CancelAll()
        {
            bottomRadioButtonList.Clear();
            topRadioButtonList.Clear();
            checkButtonList.Clear();
        }
    }
}
