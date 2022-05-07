using Serilog;
using Serilog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 控制器
{

    static class Logging
    {
        public static Logger logger;

        static Logging()
        {
            logger = new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.Debug()
                .WriteTo.File("logs\\控制器日志.log", rollingInterval: RollingInterval.Day, encoding: Encoding.UTF8)
                .CreateLogger();
        }
    }
}
