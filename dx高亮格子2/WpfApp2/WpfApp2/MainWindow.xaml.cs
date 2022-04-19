using System;
using System.Collections.ObjectModel;
using DevExpress.Xpf.Core;
using System.Linq;
using System.ComponentModel;
using System.Windows.Input;
using DevExpress.Mvvm;
using DevExpress.Xpf.Grid;
using DevExpress.Xpf.Ribbon;
using System.Windows;
using System.Text;
using DevExpress.Export;
using DevExpress.XtraPrinting;
using System.Diagnostics;
using System.Windows.Data;
using System.Globalization;
using System.Collections.Generic;
using DevExpress.Xpf.Docking;
using DevExpress.Mvvm.UI.Interactivity;
using DevExpress.Xpf.CodeView;
using DevExpress.Xpf.Editors;
using System.Collections;
using System.Windows.Threading;
using DevExpress.Data.Filtering;
using DevExpress.Xpf.Ribbon.Navigation;
using DevExpress.Xpf.Bars;

namespace WpfApp2
{
    public partial class MainWindow
    {    
        public MainWindow()
        {
            InitializeComponent();
        }

    }

    public class ViewModel : ViewModelBase
    {
        public ViewModel()
        {
            Customers = new ObservableCollection<Customer>();
            for (int i = 0; i < 50; i++)
            {
                Customers.Add(new Customer() { ID = i, Name = "Name" + i, IsVisible = i % 4 != 0, IsGreenBorder = i % 2 == 0});
            }
        }
        public ObservableCollection<Customer> Customers { get; set; }

    }

    public class Customer : INotifyPropertyChanged
    {
        
        private decimal? _ID;
        private string _Name;
        private bool _IsGreenBorder;

        private bool _IsVisible;

        public event PropertyChangedEventHandler PropertyChanged;

        private void NotifyPropertyChanged(String propertyName)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }
        public decimal? ID
        {
            get { return _ID; }
            set { _ID = value; NotifyPropertyChanged("ID"); }
        }

        public string Name
        {
            get { return _Name; }
            set { _Name = value; NotifyPropertyChanged("Name"); }
        }
  
        public bool IsVisible
        {
            get { return _IsVisible; }
            set { _IsVisible = value; NotifyPropertyChanged("IsVisible"); }
        }

        public bool IsGreenBorder
        {
            get { return _IsGreenBorder; }
            set { _IsGreenBorder = value; NotifyPropertyChanged("IsGreenBorder"); }
        }
    }
}
