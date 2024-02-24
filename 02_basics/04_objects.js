const course = {
    name: "js",
    price: "000",
    source: "youtube",
    teacherFirstName: "hitesh",
    teacherLastName: "choudhary",    
}

console.log(course.teacherFirstName);

const {teacherFirstName} = course
console.log(teacherFirstName);

const {teacherFirstName: tfname} = course
console.log(tfname);

const {teacherFirstName: tfn, teacherLastName: tln, source} = course
console.log(`${tfn},${tln},${source}`)