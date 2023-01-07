using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using 算法界面;

namespace 算法连接
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


        public static void SetPropertyValue(this DataSave dataSave, string property, string value)
        {
            SetPropertyValue((object)dataSave, property, value);
        }

        /// <summary>
        /// 通过反射设置对象中指定属性名称对应的值
        /// </summary>
        /// <param name="entity">对象</param>
        /// <param name="property">属性名称</param>
        /// <param name="value">指定值</param>
        public static void SetPropertyValue(object entity, string property, string value)
        {
#pragma warning disable CS8600 // 将 null 字面量或可能为 null 的值转换为非 null 类型。
            PropertyInfo propertyInfo = entity.GetType().GetProperty(property);
#pragma warning restore CS8600 // 将 null 字面量或可能为 null 的值转换为非 null 类型。
#pragma warning disable CS8604 // 引用类型参数可能为 null。
            SetPropertyValue(entity, propertyInfo, value);
#pragma warning restore CS8604 // 引用类型参数可能为 null。

        }

        /// <summary>
        /// 通过反射设置对象中指定属性对应的值
        /// </summary>
        /// <param name="entity">对象</param>
        /// <param name="propertyInfo">属性信息</param>
        /// <param name="value">指定值</param>
        public static void SetPropertyValue(object entity, PropertyInfo propertyInfo, string value)
        {
            if (propertyInfo != null)
            {
                Type t = propertyInfo.PropertyType;
                object? d;

                if (t.IsGenericType && t.GetGenericTypeDefinition() == typeof(Nullable<>))
                {
                    if (string.IsNullOrEmpty(value))
                    {
                        d = null;
                    }
                    else
                    {
                        d = Convert.ChangeType(value, t.GetGenericArguments()[0]);
                    }
                }
                else if (t == typeof(Guid))
                {
                    d = new Guid(value);
                }
                else if (t.IsEnum)
                {
                    d = Enum.ToObject(t, Convert.ToInt32(value));
                }
                else
                {
                    d = Convert.ChangeType(value, t);
                }

                propertyInfo.SetValue(entity, d, null);
            }
        }
    }
}
