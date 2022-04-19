using System.Data.SQLite;
using System.Data.SQLite.Linq;
using System;
using System.Data;
using Newtonsoft.Json;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Linq;

namespace ConsoleApp5
{
    internal class Program
    {

        class JsonStruct
        {
            public int id;
            public string name;
        }

        static void Main(string[] args)
        {
            //var m_dbConnection = new SqliteConnection("Data Source=TableDataCache.db;Version=3;");
            //m_dbConnection.Open();
            //string sql = $"replace into TableDataCache (id,data) values ({id},{base64});";
            //SqliteCommand command = new SqliteCommand(sql, m_dbConnection);
            //command.Parameters.Add(new SqliteParameter("data", data));
            //command.ExecuteNonQuery();
            //string cs = @"URI=file:D:\test.db";

            //using var con = new SQLiteConnection(cs);
            //con.Open();

            //using var cmd = new SQLiteCommand(con);

            //cmd.CommandText = "DROP TABLE IF EXISTS cars";
            //cmd.ExecuteNonQuery();

            //cmd.CommandText = @"CREATE TABLE cars(id INTEGER PRIMARY KEY,
            //name TEXT, price INT)";
            //cmd.ExecuteNonQuery();

            //cmd.CommandText = "INSERT INTO cars(name, price) VALUES(@param,52642)";
            //var value = JsonConvert.SerializeObject(new JsonStruct() { id = 1000, name = "CREATE TABLE" });
            //cmd.Parameters.Add(new SQLiteParameter
            //{
            //    ParameterName = "@param",
            //    Value = value,
            //    DbType = DbType.String,
            //});
            //cmd.ExecuteNonQuery();

            //cmd.CommandText = "select * from cars";
            //var rdr = cmd.ExecuteReader();
            //while (rdr.Read())
            //{
            //    Console.WriteLine($"{rdr.GetInt32(0)} {rdr.GetString(1)}");
            //}
            //Console.WriteLine("Table cars created");

            ConcurrentQueue<object> concurrentQueue = new ConcurrentQueue<object>();

            var task = Task.Run(() => { 
            
            });


            if (concurrentQueue.TryTake(out object a))
            {

            }

                task.Wait();
        }
    }
}
