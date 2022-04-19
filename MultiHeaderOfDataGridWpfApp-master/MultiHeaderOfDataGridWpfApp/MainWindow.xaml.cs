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

namespace MultiHeaderOfDataGridWpfApp
{
	public class User
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public DateTime Birthday { get; set; }

		public string Details
		{
			get
			{
				return String.Format("{0} was born on {1} and this is a long description of the person.", this.Name, this.Birthday.ToLongDateString());
			}
		}
	}
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
    {

        public MainWindow()
        {
            InitializeComponent();
			List<User> users = new List<User>();
            for (int i = 0; i < 100; i++)
            {
				users.Add(new User() { Id=i+100,Name="name"+i,Birthday = DateTime.Now});

			}
			dataGrid.ItemsSource = users;
			//dataGrid.Cle
			//dataGrid.sor

		}
    }
}
