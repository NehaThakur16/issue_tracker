document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueTeam = document.getElementById('issueTeamInput');
  var issueReporter = document.getElementById('issueReporterInput');
  var issueSummary = document.getElementById('issueSummaryInput');
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueTestData = document.getElementById('issueDataInput').value;
  var issueTestcases = document.getElementById('issueTestcasesInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueStatus = 'Open';
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issuePlannedDate = document.getElementById('issuePlannedDateInput')
  var issueComments = document.getElementById('issueCommentsInput');

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var issueDate = month + '/' + day + '/' + year

  var issue = {
    team: issueTeam,
    reporter: issueReporter,
    date: issueDate,
    summary: issueSummary,
    description: issueDesc,
    data: issueTestData,
    testcases: issueTestData.
    severity: issueSeverity,
    status: issueStatus,
    assignedTo: issueAssignedTo,
    date: issuePlannedDate,
    coments: issueComments
  }

  var addQuery = "INSERT INTO Issues Team, Reporter, Date, Summary, Description, Data, Testcases, Severity, Status, AssignedTo, PlannedEndDate, Comments VALUES " +
                  issueTeam + ", " + issueReporter + ", " + issueSummary + ", " + issueDesc + ", " + issueTestData + ", " + issueTestcases + ", " + issueSeverity + ", " + issueStatus +
                  ", " + issueAssignedTo + ", " + issuePlannedDate + ", " + issueComments

  var adoConn = new ActiveXObject("ADODB.Connection");
  var adoCmd = new ActiveXObject("ADODB.Command");
  adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='C:\\Users\\ashokkumar.r.khape\\Desktop\\issue_tracker\\AutomationFactory.mdb'");
  adoCmd.ActiveConnection = adoConn;
  adoCmd.CommandText = addQuery;
  adoCmd.Execute();
  adoConn.Close();
  console.log("Done");
