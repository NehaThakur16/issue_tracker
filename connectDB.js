

var adoConn = new ActiveXObject("ADODB.Connection");
var adoCmd = new ActiveXObject("ADODB.Command");
adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='C:\\Users\\ashokkumar.r.khape\\Desktop\\issue_tracker\\AutomationFactory.mdb'");
adoCmd.ActiveConnection = adoConn;
adoCmd.CommandText = "UPDATE Issues SET Status='Open' Where Id=1;";
adoCmd.Execute();
adoConn.Close();
console.log("Done");
