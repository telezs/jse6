// // for (var index=0; index < index< 6; index++) {
// //     console.log(index);
// // }
// // console.log(index);

// // function sum  (a, b) {
// //     return (a+b);
// // }
// // console.log(sum(1,2));

// // let sum = () => (1+2);
// // console.log(first);

// // const jobs = [
// //     {id: 1, isActive, true},
// //     {id: 2, isActive, true},
// //     {id: 3, isActive, false},
// // ]
// // let active = jobs.filter(function (job){
// //     return job.isActive;
// // });
// // let activeJob = jobs.filter((job)=> job.isActive);

// // const color = ["red", "green", "white"];
// // const items = color.map(color => `<li>${color}</li>`);

// // const first = [1,2,3];
// // const second = [4,5,6];
// // const combined = first.concat(second);
// // const combined_1 = [...first, ...second]

// // const clone = [...first];

// // const f = {name: 'Diep'};
// // const s = {job: 'teacher'};

// // const combined_obj = {...f,...s, location:'Q10'};
// // const clone_obj = {..s};

// // function sum1 (a,b,c) {
// //     return a+b+c;
// // }
// // const numbers = [1,2,3];
// // console.log(sum.apply(null, numbers));
// // console.log(sum(...num))

// const person = {
//     name: 'diep',
//     age: 26,
//     walk: function() {},
//     talk() {console.log('talk')}
// };
// person.talk();
// person['name']='Ngan';
// const target = 'age';
// person[target.value]='14';
// console.log(person.age);
// console.log(person.name);

// const human = {
//     name:'diep',
//     walk() {
//         console.log(this);
//     }
// }
// const walk = obj.walk.bind(obj);
// walk();

// const obj = {
//     name: 'diep',
//     talk(){
//         var self = this;
//         setTimeout(function(){
//             console.log('this', this);

//         },1000);
//     }
// }

class Person {
    constructor(name) {
        this.name = name;
    }
    walk(){
        console.log('walk');
    }

    }
    const p1 = new Person('diep');
    p1.walk();
    console.log(p.name);
