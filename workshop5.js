class Student { 
    constructor(name,email) {
    this.name = name;
    this.email = email;
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister){
        if (studentToRegister.name === undefined || studentToRegister.email === undefined){
        console.log('invalid name or email');
        return false; 
        } 
        for(let i=0; i < this.students.length; i++){
            if(this.students[i].email == studentToRegister.email){
                console.log('Email already exists');
                return false;
            }
        }
        this.students.push(studentToRegister);
        console.log('${studentToRegister.name} has been successfully registered.');
        return true;
        
    }
    
    listStudents() {
        if(this.students.length === 0) {
            console.log('No students are registered to the ${this.name} bootcamp.');
            return false;
        }
        else { 
            const students = []
            console.log('The students registered in ${this.name} are:');
            for(const x of students){
                console.log('${student.name} ${student.email}')
            }
            return true;
        }
    }


}



reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);