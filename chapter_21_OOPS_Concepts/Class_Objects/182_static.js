class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static name = "PlaywrightBatch2x";
    static mentor_name = "PramodDutta"
}
const s1 = new Student("Praveen", 32, "946454544444");
const s2 = new Student("Pooja", 28, "946454566666");

console.log(s1.name_student);
console.log(s2.name_student)

console.log(Student.name);
console.log(Student.mentor_name);