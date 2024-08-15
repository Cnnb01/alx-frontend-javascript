interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

class Director implements DirectorInterface{
    workFromHome(){
        return "Working from home"
    }
    getCoffeeBreak(){
        return "Getting a coffee break"
    }
    workDirectorTasks(){
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(){
        return "Cannot work from home"
    }
    getCoffeeBreak(){
        return "Cannot have a break"
    }
    workDirectorTasks(){
        return "Getting to work"
    }
}

function createEmployee(salary: string | number): Director | Teacher{
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}
function executeWork(employee: Teacher | Director){
    if (employee instanceof Director){
        return employee.workDirectorTasks
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return `Teaching Math`;
  } else if (todayClass === "History") {
    return `Teaching History`;
  }
}