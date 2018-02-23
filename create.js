document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueTeam = document.getElementById('issueTeamInput').value;
  var issueReporter = document.getElementById('issueReporterInput').value;
  var issueSummary = document.getElementById('issueSummaryInput').value;
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueTestData = document.getElementById('issueDataInput').value;
  var issueTestcases = document.getElementById('issueTestcasesInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueStatus = 'Open';
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issuePlannedDate = document.getElementById('issuePlannedDateInput').value;
  var issueComments = document.getElementById('issueCommentsInput').value;

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var issueDate = month + '/' + day + '/' + year
  console.log(issueDate)

  var issue = {
    team: issueTeam,
    reporter: issueReporter,
    date: issueDate,
    summary: issueSummary,
    description: issueDesc,
    data: issueTestData,
    testcases: issueTestData,
    severity: issueSeverity,
    status: issueStatus,
    assignedTo: issueAssignedTo,
    date: issuePlannedDate,
    coments: issueComments
  }


  var addQuery = "INSERT INTO Issues (Team, Reporter, Date, Summary, Description, Data, Testcases, Severity, Status, AssignedTo, PlannedEndDate, Comments) VALUES ('" +
                  issueTeam + "', '" + issueReporter + "', '" + issueSummary + "', '" + issueDesc + "', '" + issueTestData + "', '" + issueTestcases + "', '" + issueSeverity + "', '" + issueStatus +
                  "', '" + issueAssignedTo + "', '" + issuePlannedDate + "', '" + issueComments + "')"

  var addquerySample = "INSERT INTO Issues (Team) VALUES ('RVT')";
  console.log(addquerySample);
  var adoConn = new ActiveXObject("ADODB.Connection");
  var adoCmd = new ActiveXObject("ADODB.Command");
  adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='C:\\Users\\ashokkumar.r.khape\\Desktop\\issue_tracker\\AutomationFactory.mdb'");
  adoCmd.ActiveConnection = adoConn;
  adoCmd.CommandText = addquerySample;
  adoCmd.Execute();
  adoConn.Close();
  console.log("Done");

}
