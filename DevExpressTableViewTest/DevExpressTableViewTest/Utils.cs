using DevExpress.Xpf.Grid;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace 控制器
{
    public static class Utils
    {
        public static void SetHeaderBGColor(ColumnBase column, string hexStr)
        {
            Color color = (Color)ColorConverter.ConvertFromString(hexStr);
            var style = new Style(typeof(BaseGridHeader));
            style.Setters.Add(new Setter() { Property = Control.BackgroundProperty, Value = new SolidColorBrush(color) });
            column.HeaderStyle = style;
        }

        public static SolidColorBrush BushFromStringColor(string hexStr)
        {
            Color color = (Color)ColorConverter.ConvertFromString(hexStr);
            return new SolidColorBrush(color);
        }
    }
}
