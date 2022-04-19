using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace 进程调用测试
{
    class Program
    {
        static void Main(string[] args)
        {
			//
			// Setup the process with the ProcessStartInfo class.
			//
			ProcessStartInfo start = new ProcessStartInfo();
			start.FileName = @"python.exe"; // Specify exe name.
            start.Arguments = @"H:\fll3d_support\toolset\python工具/大厅资源批量上传.py --frompath=H:\fll3d_plaza\client\Plaza --platform=iOS --uploadres=True --flushprint=True";
            //start.FileName = "cmd.exe";
            //start.Arguments = "-n 3 127.0.0.1>nul";
            start.UseShellExecute = false;
			start.RedirectStandardOutput = true;

			//
			// Start the process.
			//
			Process process = new Process();
			process.StartInfo = start;
			process.OutputDataReceived += (s,e) => { 
				if(!string.IsNullOrEmpty(e.Data))
					Console.WriteLine(""+e.Data); 
			};
			process.Start();
			process.BeginOutputReadLine();
            //readinfo(process);
            process.WaitForExit();

            //while (!process.HasExited)
            //         {
            //	Thread.Sleep(500);
            //	//Console.WriteLine("等待进程退出");
            //         }
            //Thread.Sleep(30000);
        }

		static async void readinfo(Process process)
        {
			while (!process.HasExited)
			{
				string result = await process.StandardOutput.ReadLineAsync();
				Console.WriteLine(result);
			}
		}
    }
}
