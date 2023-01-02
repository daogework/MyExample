using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 算法连接测试
{
    public static class Ext
    {
        static Dictionary<int, string> iconMap = new Dictionary<int, string>()
        {
            { 31,"　金龙"},
            { 32,"　金船"},
            { 33,"　金鱼"},
            { 34,"　金元"},

            { 1, "　玉龙"},
            { 2, "　玉船"},
            { 3, "　玉鱼"},
            { 4, "　银元"},
            { 5, "　铜钱"},

            { 11,"　Ａ　"},
            { 12,"　Ｋ　"},
            { 13,"　Ｑ　"},
            { 14,"　Ｊ　"},
            { 15,"　１０"},
            { 16,"　９　"},

            { 20,"　ＳＣ"},
            { 50,"　百搭"},
        };
        public static string IconToString(this int icon)
        {
            if(iconMap.TryGetValue(icon, out var s)){
                return s;
            }
            return "";
        }
    }
}
