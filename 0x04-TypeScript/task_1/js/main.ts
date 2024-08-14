interface Teacher {
    readonly firstName: string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOfExperience?:number;
    location:string;
    [key: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
}

interface printTeacherInt{
    (firstName: string, lastName: string):string
}
const printTeacher: printTeacherInt = (firstName, lastName) =>{
    return(`${firstName[0]}.${lastName}`)
}

interface StudentClassInt{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInt{
    firstName: string;
    lastName: string;

    constructor(firstName: string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(){
        return("Currently working")
    }
    displayName(){
        return this.firstName
    }
}

// testing
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);