﻿using DevExpress.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DevExpressTableViewTest
{
    class Data : BindableBase
    {
        public void Refresh()
        {
            RaisePropertiesChanged();
        }
        public int sortid { get; set; } = 0;
        public int id { get; set; }
        public string name { get; set; } = "";
        public long 总下注 { get; set; } = 0;
        private long 狮子_ = 0;
        public long 狮子
        {
            get => 狮子_;
            set
            {
                狮子_ = value;
                if (value > max) { max = value; MaxFieldName = "狮子"; }
                if (value < min) { min = value; MinFieldName = "狮子"; }
            }
        }

        private long 熊猫_ = 0;
        public long 熊猫
        {
            get => 熊猫_;
            set
            {
                熊猫_ = value;
                if (value > max) { max = value; MaxFieldName = "熊猫"; }
                if (value < min) { min = value; MinFieldName = "熊猫"; }
            }
        }

        private long 猴子_ = 0;
        public long 猴子
        {
            get => 猴子_;
            set
            {
                猴子_ = value;
                if (value > max) { max = value; MaxFieldName = "猴子"; }
                if (value < min) { min = value; MinFieldName = "猴子"; }
            }
        }

        private long 兔子_ = 0;
        public long 兔子
        {
            get => 兔子_;
            set
            {
                兔子_ = value;
                if (value > max) { max = value; MaxFieldName = "兔子"; }
                if (value < min) { min = value; MinFieldName = "兔子"; }
            }
        }

        private long 红_ = 0;
        public long 红
        {
            get => 红_;
            set
            {
                红_ = value;
                if (value > max) { max = value; MaxFieldName = "红"; }
                if (value < min) { min = value; MinFieldName = "红"; }
            }
        }

        private long 绿_ = 0;
        public long 绿
        {
            get => 绿_;
            set
            {
                绿_ = value;
                if (value > max) { max = value; MaxFieldName = "绿"; }
                if (value < min) { min = value; MinFieldName = "绿"; }
            }
        }

        private long 黄_ = 0;
        public long 黄
        {
            get => 黄_;
            set
            {
                黄_ = value;
                if (value > max) { max = value; MaxFieldName = "黄"; }
                if (value < min) { min = value; MinFieldName = "黄"; }
            }
        }

        private long 红狮子_ = 0;
        public long 红狮子
        {
            get => 红狮子_;
            set
            {
                红狮子_ = value;
                if (value > max) { max = value; MaxFieldName = "红狮子"; }
                if (value < min) { min = value; MinFieldName = "红狮子"; }
            }
        }

        private long 绿狮子_ = 0;
        public long 绿狮子
        {
            get => 绿狮子_;
            set
            {
                绿狮子_ = value;
                if (value > max) { max = value; MaxFieldName = "绿狮子"; }
                if (value < min) { min = value; MinFieldName = "绿狮子"; }
            }
        }

        private long 黄狮子_ = 0;
        public long 黄狮子
        {
            get => 黄狮子_;
            set
            {
                黄狮子_ = value;
                if (value > max) { max = value; MaxFieldName = "黄狮子"; }
                if (value < min) { min = value; MinFieldName = "黄狮子"; }
            }
        }

        private long 红熊猫_ = 0;
        public long 红熊猫
        {
            get => 红熊猫_;
            set
            {
                红熊猫_ = value;
                if (value > max) { max = value; MaxFieldName = "红熊猫"; }
                if (value < min) { min = value; MinFieldName = "红熊猫"; }
            }
        }

        private long 绿熊猫_ = 0;
        public long 绿熊猫
        {
            get => 绿熊猫_;
            set
            {
                绿熊猫_ = value;
                if (value > max) { max = value; MaxFieldName = "绿熊猫"; }
                if (value < min) { min = value; MinFieldName = "绿熊猫"; }
            }
        }

        private long 黄熊猫_ = 0;
        public long 黄熊猫
        {
            get => 黄熊猫_;
            set
            {
                黄熊猫_ = value;
                if (value > max) { max = value; MaxFieldName = "黄熊猫"; }
                if (value < min) { min = value; MinFieldName = "黄熊猫"; }
            }
        }

        private long 红猴子_ = 0;
        public long 红猴子
        {
            get => 红猴子_;
            set
            {
                红猴子_ = value;
                if (value > max) { max = value; MaxFieldName = "红猴子"; }
                if (value < min) { min = value; MinFieldName = "红猴子"; }
            }
        }

        private long 绿猴子_ = 0;
        public long 绿猴子
        {
            get => 绿猴子_;
            set
            {
                绿猴子_ = value;
                if (value > max) { max = value; MaxFieldName = "绿猴子"; }
                if (value < min) { min = value; MinFieldName = "绿猴子"; }
            }
        }

        private long 黄猴子_ = 0;
        public long 黄猴子
        {
            get => 黄猴子_;
            set
            {
                黄猴子_ = value;
                if (value > max) { max = value; MaxFieldName = "黄猴子"; }
                if (value < min) { min = value; MinFieldName = "黄猴子"; }
            }
        }

        private long 红兔子_ = 0;
        public long 红兔子
        {
            get => 红兔子_;
            set
            {
                红兔子_ = value;
                if (value > max) { max = value; MaxFieldName = "红兔子"; }
                if (value < min) { min = value; MinFieldName = "红兔子"; }
            }
        }

        private long 绿兔子_ = 0;
        public long 绿兔子
        {
            get => 绿兔子_;
            set
            {
                绿兔子_ = value;
                if (value > max) { max = value; MaxFieldName = "绿兔子"; }
                if (value < min) { min = value; MinFieldName = "绿兔子"; }
            }
        }

        private long 黄兔子_ = 0;
        public long 黄兔子
        {
            get => 黄兔子_;
            set
            {
                黄兔子_ = value;
                if (value > max) { max = value; MaxFieldName = "黄兔子"; }
                if (value < min) { min = value; MinFieldName = "黄兔子"; }
            }
        }

        public void ResetMinMin()
        {
            max = 0;
            min = 0;
            MaxFieldName = "";
            MinFieldName = "";
        }

        private long max = 0;
        private long min = 0;
        public string MaxFieldName { get; private set; } = "";
        public string MinFieldName { get; private set; } = "";

    }
}
