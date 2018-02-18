
var connection = new ActiveXObject("ADODB.Connection");
  var adoRS = new ActiveXObject("ADODB.Recordset");

  adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='/home/ashokkhape/Javascript/JSissue-tracker-master/AutomationFactory.odb'");
  adoRS.Open("Select * From tblName", adoConn, 1, 3);

  adoRS.AddNew;
  adoRS.Fields("Reporter").value = "Ashok";
  adoRS.Update;

  adoRS.Close();
  adoConn.Close();
