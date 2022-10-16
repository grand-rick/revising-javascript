class Student {
    constructor (_name, _age, _admNo) {
        this.name = _name;
        this.age = _age;
        this.admNo = _admNo;
        this.mean = 0;
    }

    get summary () {
        return `Name: ${this.name}, Age: ${this.age}, Admission number: ${this.admNo}.`;
    }

    getMean () {
        const numberOfSubjects = +prompt("How many subjects did you take?");

        const marks = [];
        let totalMarks = 0;

        for (let i = 0; i < numberOfSubjects; i++) {
            marks[i] = +prompt(`Enter mark ${i + 1}: `);
            totalMarks += marks[i];
        }

        const meanMark = totalMarks / numberOfSubjects;

        this.mean = meanMark;
        
        return meanMark;
    }

    getGrade () {
        let _grade = "A";
        let comments = "Excellent";

        if (this.mean >= 0 && this.mean < 40) {
            comments = "Bad";
            _grade = "E";
        } else if (this.mean >= 40 && this.mean < 50) {
            comments = "Satisfactory";
            _grade = "D";
        } else if (this.mean >= 50 && this.mean < 60) {
            comments = "Fair";
            _grade = "C"
        } else if (this.mean >= 60 && this.mean < 70) {
            comments = "Good";
            _grade = "B"
        } else if (this.mean >= 70 && this.mean <= 100) {
            comments = "Very Good";
            _grade = "A"
        } else {
            console.log("Mean is in invalid range");
        }

        this.grade = _grade;

        return _grade;
    }

}

class Programmer extends Student {
    constructor (_name, _age, _admNo, _language) {
        super(_name, _age, _admNo);
        this.language = _language;
    }

    get summary () {
        return `Name: ${this.name}, Age: ${this.age}, AdmNumber: ${this.admNo}, Programming language: ${this.language}`;
    }
}

export default Student;
export { Programmer };