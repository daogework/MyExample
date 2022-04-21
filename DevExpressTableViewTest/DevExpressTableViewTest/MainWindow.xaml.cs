﻿using DevExpress.Mvvm;
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

namespace DevExpressTableViewTest
{

    
    
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        
        ObservableCollection<Data> users;
        Random random = new Random(DateTime.Now.Millisecond);
        public ICollectionView CollectionView { get; private set; }
        public MainWindow()
        {
            InitializeComponent();
            users = new ObservableCollection<Data>();



            for (int i = 0; i < 1000; i++)
            {

                users.Add(new Data
                {
                    Id = random.Next(),
                    Name = "" + random.Next(),
                    总下注 = random.Next(),
                    狮子 = random.Next(),
                    熊猫 = random.Next(),
                    猴子 = random.Next(),
                    兔子 = random.Next(),
                    红 = random.Next(),
                    绿 = random.Next(),
                    黄 = random.Next(),
                    红狮子 = random.Next(),
                    绿狮子 = random.Next(),
                    黄狮子 = random.Next(),
                    红熊猫 = random.Next(),
                    绿熊猫 = random.Next(),
                    黄熊猫 = random.Next(),
                    红猴子 = random.Next(),
                    绿猴子 = random.Next(),
                    黄猴子 = random.Next(),
                    红兔子 = random.Next(),
                    绿兔子 = random.Next(),
                    黄兔子 = random.Next(),
                    //V20 = random.Next()
                });
            }

            users[10].Sortid = -10;
            users[11].Sortid = -11;
            users[10].Name = "系统1";
            users[11].Name = "系统2";

            CollectionView = new CollectionViewSource() { Source = users }.View;
            CollectionView.SortDescriptions.Add(new SortDescription("Sortid", ListSortDirection.Ascending));
            CollectionView.SortDescriptions.Add(new SortDescription("总下注", ListSortDirection.Descending));
            CollectionView.MoveCurrentToFirst();

            dataGridEx.ItemsSource = CollectionView;
            var col = dataGridEx.Columns[0];
            //col.EditSettings
            //dataGridEx.ItemsSource = users;

            //dataGrid.getb
            //dataGrid.as
            //var cv = CollectionViewSource.GetDefaultView(dataGridEx.ItemsSource);
            //cv.SortDescriptions.Add(new SortDescription("sortid", ListSortDirection.Ascending));
            //cv.SortDescriptions.Add(new SortDescription("id", ListSortDirection.Ascending));
            //dataGridEx.s
            // Creates a new FormatCondition instance.
            FormatCondition formatRule = new FormatCondition();

            // Configures the format condition.
            formatRule.ValueRule = ConditionRule.GreaterOrEqual;
            formatRule.Value1 = 500;
            formatRule.PredefinedFormatName = "GreenFillWithDarkGreenText";

            // Adds this instance to the FormatConditionCollection.
            dataGridExView.AddFormatCondition(formatRule);

        }

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

        public bool TestB = true;
        ColumnBase lastcol = null;

        public static SolidColorBrush 最小值背景色 = Utils.BushFromStringColor("#FF9999");
        public static SolidColorBrush 最大值背景色 = Utils.BushFromStringColor("#E2EFDA");
        public static SolidColorBrush 负值字体颜色 = Utils.BushFromStringColor("#C00000");
        public static SolidColorBrush 正值字体颜色 = Utils.BushFromStringColor("#00B050");
        private void view_CustomCellAppearance(object sender, CustomCellAppearanceEventArgs e)
        {

            if (e.Property == TextElement.BackgroundProperty)
            {
                var data = (Data)dataGridEx.GetRow(e.RowHandle);
                //dataGridEx.setc
                if (data.MinFieldName == e.Column.FieldName)
                {
                    e.Result = 最小值背景色;
                    e.Handled = true;
                }
                else if (data.MaxFieldName == e.Column.FieldName)
                {
                    e.Result = 最大值背景色;
                    e.Handled = true;
                    //var CellStyle = e.Column.CellStyle;

                }
            }
            else if (e.Property == TextElement.ForegroundProperty)
            {
                if (e.Column != null)
                {
                    var basevalue = dataGridEx.GetCellValue(e.RowHandle, (GridColumn)e.Column);
                    if (basevalue is long)
                    {
                        var value = (long)basevalue;
                        if (value > 0)
                        {
                            e.Result = 正值字体颜色;
                            e.Handled = true;
                        }
                        else if (value < 0)
                        {
                            e.Result = 负值字体颜色;
                            e.Handled = true;
                        }
                    }

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

            
            CollectionView.Refresh();
            Trace.WriteLine(sw.ElapsedMilliseconds);
            //sw.Restart();
            //dataGridEx.RefreshData();
        }
        bool b = false;

        

        private void SimpleButton_Click_1(object sender, RoutedEventArgs e)
        {
            if (b)
            {
                Result = "";
            }
            else
            {
                Result = "四喜";
            }
            
            b = !b;
            if (lastcol != null)
            {

                    


            }
        }

      
    }
}
