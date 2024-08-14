var student1 = {
    firstName: "Charity",
    lastName: "Nyamamba",
    age: 16,
    location: "Kenya"
};
var student2 = {
    firstName: "Charit",
    lastName: "Nyamamb",
    age: 17,
    location: "Keny"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
studentsList.forEach(function (stud) {
    var row = document.createElement("tr");
    var stdName = document.createElement("td");
    var stdLoc = document.createElement("td");
    stdName.textContent = stud.firstName;
    stdLoc.textContent = stud.location;
    row.appendChild(stdName);
    row.appendChild(stdLoc);
    tbody.appendChild(row);
});
document.body.appendChild(table);
