interface Student{
    firstName: string;
    lastName:string;
    age:number;
    location:string
}

const student1: Student = {
    firstName: "Charity",
    lastName: "Nyamamba",
    age: 16,
    location:"Kenya"
}
const student2: Student = {
    firstName: "Charit",
    lastName: "Nyamamb",
    age: 17,
    location:"Keny"
}
const studentsList: Student[]= [student1, student2]

const table = document.createElement("table")
const tbody = document.createElement("tbody")
table.appendChild(tbody)

studentsList.forEach((stud: Student):void => {
    const row = document.createElement("tr")
    const stdName = document.createElement("td")
    const stdLoc = document.createElement("td")

    stdName.textContent = stud.firstName
    stdLoc.textContent = stud.location

    row.appendChild(stdName)
    row.appendChild(stdLoc)
    tbody.appendChild(row)
});

document.body.appendChild(table)
