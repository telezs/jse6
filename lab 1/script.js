let student = [
    {
        name: "NVA",
        age: "15",
        course: ["mindx 01", "mindx 02", "mindx 03"]

    },
    {
        name: "NVB",
        age: "16",
        course: ["mindx 01", "mindx 02", "mindx 04"]
        
    },
    {
        name: "NVC",
        age: "17",
        course: ["mindx 01", "mindx 02", "mindx 04"]
        
    },
    {
        name: "NVD",
        age: "18",
        course: ["mindx 01", "mindx 02", "mindx 03"]
        
    }
];

// const input = prompt("Do tuoi cua ban:");

// rs = student.map((item) => {
//     if(item.age== input) {
//         return item.name;
//     }
// });
// let count = 0;

// rs.forEach((i) => {
//     if(i == undefined) {
//         count++;
//     }
// });


// if(count <4){
//     console.log(rs);
// } else if(count== 4) {
//     console.log("khong tim thay");
// }

// students.filter((item)=> item.age == input).map(item => item.name);

// console.log(rs1);

// if(rs1.length()==0) {
//     console.log("khong tim thay");
// } else {
//     console.log(rs1);
// }

// const input1= prompt("Khoa hoc can tim:");

// let rsCourse = student.filter(
//     (item) => item.course.filter((c)=> c==  input1).length !=0)
//     .map((item)=>item.name);

// if(rsCourse.length == 0) console.log('khong tim thay khoa hoc');
    
// else console.log('rsCourse');


let arr1= [0,2,4,6,8];
let arr2 = [1,3,5,7];

let arr3 = [...arr1,...arr2];
document.write(arr3);
Document.write('<br>')
document.write(arr3.filter(num => num > 3));

document.write(`<br>`);
document.write(arr3.sort());