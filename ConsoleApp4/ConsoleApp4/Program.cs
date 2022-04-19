using Microsoft.Data.Sqlite;
using System;

namespace ConsoleApp4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            //打开文件
            var m_dbConnection = new SqliteConnection("Data Source=TableDataCache.db;Version=3;");
            m_dbConnection.Open();

            //创建数据
            string sql = "create table if not exists TableDataCache(id int, data varchar(2048))";
            var command = new SqliteCommand(sql, m_dbConnection);
            command.ExecuteNonQuery();
        }
    }
}
