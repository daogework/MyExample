using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
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
using 算法连接;

namespace 算法界面
{

    public class DataSave
    {
        public string input_Multiple { get; set; } = "";
        public string input_Ante { get; set; } = "";
        public string input_ExpectRTP { get; set; } = "";
        public string input_MaxCompensation { get; set; } = "";
        public string input_OutcomeMultiple { get; set; } = "";
        public bool IsBaseGameNotHit { get; set; }
        public bool IsBaseGameHit { get; set; }
        public bool IsFreeGameNotHit { get; set; }
        public bool IsFreeGameHit { get; set; }
        public string input_Count { get; set; } = "";
        public string input_StartScore { get; set; } = "";
        public bool isWritelog { get; set; }
    }

    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        DataSave? dataSave = new DataSave();
        Connection connection = new Connection();
        public MainWindow()
        {
            InitializeComponent();
            if (!File.Exists("setting.json"))
            {
                File.WriteAllText("setting.json","");
            }
            var jsonstr = File.ReadAllText("setting.json");
            dataSave = JsonSerializer.Deserialize<DataSave>(jsonstr);

            if (dataSave != null)
            {
                input_Multiple.Text = dataSave.input_Multiple;
                input_Ante.Text = dataSave.input_Ante;
                input_ExpectRTP.Text = dataSave.input_ExpectRTP;
                input_MaxCompensation.Text = dataSave.input_MaxCompensation;
                input_OutcomeMultiple.Text = dataSave.input_OutcomeMultiple;
                IsBaseGameNotHit.IsChecked = dataSave.IsBaseGameNotHit;
                IsBaseGameHit.IsChecked = dataSave.IsBaseGameHit;
                IsFreeGameNotHit.IsChecked = dataSave.IsFreeGameNotHit;
                IsFreeGameHit.IsChecked = dataSave.IsFreeGameHit;
                input_Count.Text = dataSave.input_Count;
                input_StartScore.Text = dataSave.input_StartScore;
                isWritelog.IsChecked = dataSave.isWritelog;
            }
            

        }

        void save()
        {
            var s = JsonSerializer.Serialize(dataSave);
            File.WriteAllText("setting.json", s);
        }

        async Task RunInThread(BetReq betReq,long playerScore, List<double> x, List<double> y,
            int count, bool writelog)
        {
            await Task.Run(() => {
                connection.Run(betReq,
                count: count,
                func: (i, subScore, res) => {
                    var b = playerScore < subScore;
                    playerScore -= subScore;
                    playerScore += res.Result.TotalBonus;
                    x.Add(i);
                    y.Add(playerScore);

                    return b;
                },
                writelog: writelog);
            });
        }

        private async void Button_Click(object sender, RoutedEventArgs e)
        {
            StartBtn.IsEnabled = false;
            var old = StartBtn.Content;
            StartBtn.Content = "等待结果...";
            List<double> x = new List<double>();
            List<double> y = new List<double>();

            

            long playerScore = long.Parse(input_StartScore.Text) ;
            BetReq betReq = new BetReq()
            {
                Multiple = long.Parse(input_Multiple.Text),
                Ante = long.Parse(input_Ante.Text),
                ExpectRTP = long.Parse(input_ExpectRTP.Text),
                MaxCompensation = long.Parse(input_MaxCompensation.Text),
                OutcomeMultiple = long.Parse(input_OutcomeMultiple.Text),
                IsBaseGameHit = IsBaseGameHit.IsChecked ?? false,
                IsBaseGameNotHit = IsBaseGameNotHit.IsChecked ?? false,
                IsFreeGameHit = IsFreeGameHit.IsChecked ?? false,
                IsFreeGameNotHit = IsFreeGameNotHit.IsChecked ?? false
            };

            await RunInThread(betReq, playerScore, x, y, int.Parse(input_Count.Text), isWritelog.IsChecked ?? false);



            linegraph.Plot(x, y);

            StartBtn.IsEnabled = true;
            StartBtn.Content = old;
        }

        private void input_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (!IsLoaded) return;
            TextBox? textBox = sender as TextBox;
            if (textBox != null)
            {
                dataSave?.SetPropertyValue(textBox.Name, textBox.Text);
                save();
            }
        }

        private void CheckBox_Checked(object sender, RoutedEventArgs e)
        {
            if (!IsLoaded) return;
            CheckBox? textBox = sender as CheckBox;
            if (textBox != null)
            {
                dataSave?.SetPropertyValue(textBox.Name, (textBox.IsChecked??false).ToString());
                save();
            }
        }
    }
}
