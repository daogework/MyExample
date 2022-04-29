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

namespace WpfAppTest1
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        public string Result { get; set; } = "0";
        public MainWindow()
        {
            InitializeComponent();
            //stackPanel.Width;
        }

        List<Border> borders = new List<Border>();  

        private void PART_CellBorder_Initialized(object sender, EventArgs e)
        {
            borders.Add(sender as Border);
        }

        bool b; 
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            b = !b;
            borders[0].BorderBrush = b? new SolidColorBrush(Colors.White): new SolidColorBrush(Colors.Black);
        }
    }
}
