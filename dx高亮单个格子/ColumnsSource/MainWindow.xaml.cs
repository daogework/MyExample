namespace ColumnsSource
{
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.ComponentModel;
    using System.Linq;
    using System.Windows;
    using System.Windows.Data;

    using DevExpress.Xpf.Editors.Helpers;
    using DevExpress.Xpf.Grid;

    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 
    public class BorderConverter : IValueConverter
    {
        public object Convert(object value, System.Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            if (value.ToString() == "Task 0")
                //return new Thickness(5);
                return new Thickness(0, 10, 0, 10);
            return new Thickness(0);
        }

        public object ConvertBack(object value, System.Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            throw new System.NotImplementedException();
        }
    }


    public partial class MainWindow
    {
      
        public MainWindow()
        {
            this.InitializeComponent();
        }

        public object SelectorSource
        {
            get
            {
                return new[] { 
                    new GridColumn(){Header="a", FieldName = "Name"
                        //,CellTemplate = this.FindResource("cellWithBorderTemplate") as DataTemplate
                    },
                    new GridColumn(){Header="b", FieldName = "Name"},
                    new GridColumn(){Header="c", FieldName = "Name"},
                    new GridColumn(){Header="d", FieldName = "Name"},
                    new GridColumn(){Header="e", FieldName = "Name"},
                    new GridColumn(){Header="f", FieldName = "Name"},
                    new GridColumn(){Header="g", FieldName = "Name"}};
            }
        }

    }


}