using DevExpress.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 控制器
{
    public class BaseData : BindableBase
    {
        
        public int SortId { get; set; } = 0;
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public long 总下注 { get; set; } = 0;

        public string MaxFieldName { get; protected set; } = "";
        public string MinFieldName { get; protected set; } = "";

        protected long max = 0;
        protected long min = 0;
      

        public void Refresh()
        {
            RaisePropertiesChanged();
        }

        public new T GetValue<T>(string propertyName)
        {
            return base.GetValue<T>(propertyName);
        }

        public void ResetMinMin()
        {
            max = 0;
            min = 0;
            MaxFieldName = "";
            MinFieldName = "";
        }
        public void Clear(bool refresh = true)
        {
            for (int i = 0; i <= 21; i++)
            {
                SetValueByIndex(i, 0);
            }
            总下注 = 0;
            if (refresh) Refresh();
        }

        public virtual void SetValueByIndex(int index, long value) { }

    }
}
