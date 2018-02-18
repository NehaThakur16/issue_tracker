document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueId;
  var issueTeam = document.getElementById('issueTeamInput');
  var issueReporter = document.getElementById('issueReporterInput');
  var  issueSummary = document.getElementById('issueSummaryInput');
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueTestData = document.getElementById('issueDataInput').value;
  var issueTestcases = document.getElementById('issueTestcasesInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueStatus = 'Open';
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issuePlannedDate = document.getElementById('issuePlannedDateInput')
  var issueComments = document.getElementById('issueCommentsInput');


  var issue = {
    id: issueId,
    team: issueTeam,
    reporter: issueReporter,
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

  if (localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

  e.preventDefault();
}

function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Closed';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Issue ID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + desc + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}
