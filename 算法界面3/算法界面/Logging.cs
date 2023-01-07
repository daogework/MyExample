using Serilog;
using Serilog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



    static class Logging
    {
        public static Logger logger;

        static Logging()
        {
            logger = new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.File("logs\\日志.log", rollingInterval: RollingInterval.Day, encoding: Encoding.UTF8)
                .CreateLogger();
        }

    public static void WriteLine(string s)
    {
        logger.Information(s);
    }
}

