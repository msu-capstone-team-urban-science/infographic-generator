<%@ WebHandler Language="C#" Class="KPI_Handler" %>
/*************************
*Created by: Kevin Shreve*
*Date : 2/18/12          *
*************************/

using System;
using System.Web;
using System.Web.Script.Serialization;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Collections.Generic;


public class KPI_Handler : IHttpHandler {
    public void ProcessRequest (HttpContext context) {
        
        SqlConnection conn = new SqlConnection();
        string connString = "Data Source=KEVIN-PC\\SQLEXPRESS;Initial Catalog=urbanScience;Integrated Security=True";
        conn.ConnectionString = connString;
        
        conn.Open();
        
        SqlCommand command1 = new SqlCommand("SELECT * FROM KPI_data",conn);
        SqlDataReader reader = command1.ExecuteReader();
                   
        // Call Read before accessing data
        List<KPI> list = new List<KPI>();
        while (reader.Read())
        {
            list.Add(new KPI(Convert.ToInt32(reader[0].ToString())-1, reader[1].ToString(), Convert.ToDateTime(reader[2].ToString()), Convert.ToDouble(reader[3].ToString()), Convert.ToDateTime(reader[4].ToString())));
        }
        
        reader.Close();        
        conn.Close();

        JavaScriptSerializer serializer = new JavaScriptSerializer();
        context.Response.ContentType = "application/json";
        context.Response.Write(serializer.Serialize(list));
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}
