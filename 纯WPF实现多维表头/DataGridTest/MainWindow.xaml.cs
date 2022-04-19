using System;
using System.Collections.Generic;
using System.Linq;
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

namespace DataGridTest
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        class Data
        {
            public long 熊猫 { get; set; }
            public long 猴子 { get; set; }
            public long 兔子 { get; set; }
        }
        public MainWindow()
        {
            InitializeComponent();

            List<Data> list = new List<Data>();
            for (int i = 0; i < 100; i++)
            {
                list.Add(new Data() { 兔子=i*10, 熊猫=i*100/8, 猴子=i+10});
            }
            dataGrid.ItemsSource = list;
        }
    }

    
    
}
