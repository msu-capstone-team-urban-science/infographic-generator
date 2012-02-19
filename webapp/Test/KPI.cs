using System;
/*************************
*Created by: Kevin Shreve*
*Date : 2/18/12          *
*************************/

//This is the default class for KPI, containing all the columns that match with our database.
public class KPI
{
    public KPI()
    {
        //Do not use in prod
    }
	public KPI(int record_numberI, string kpi_name, DateTime kpi_date, double kpi_value, DateTime create_dtI )
	{
        record_number = record_numberI;
        KPI_Name = kpi_name;
        KPI_Date = kpi_date;
        KPI_Value = kpi_value;
        create_dt = create_dtI;
	}

    public DateTime Date() {
        return DateTime.Now;
    }
 
    public int record_number { get; set; }
    public string KPI_Name { get; set; }
    public DateTime KPI_Date { get; set; }
    public double KPI_Value { get; set; }
    public DateTime create_dt { get; set; }
}
