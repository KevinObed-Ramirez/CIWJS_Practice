// // let student = {
// //     name: 'John' ,
// //     height: '5 6'  ,
// //     id: '999987454',
// //     favColor: 'blue'
// // };

// // let student = {}
// // let studentName = prompt("What's your name?");
// // student["name"] = studentName;

// // let height = {}
// // let studentHeight = prompt("What's your height?");
// // student["height"] = studentHeight;

// // let id = {}
// // let studentId = prompt("What's your ID?");
// // student["ID"] = studentId;

// // let color = {}
// // let studentColor = prompt("What's your favorite color?");
// // student["color"] = studentColor;

// // function studentCloneGuy(studentName,height,id,favColor){
// //     return{
// //         studentName: studentName,
// //         height: height,
// //         id: id,
// //         favColor: favColor
// //     };
// // }
// // let billy = studentCloneGuy("Bobby", "short", 1234567890, "white");

// // console.log(billy.name);

// let Catheryn = {
//     grade1: 70,
//     grade2: 27,
//     grade3: 27,
//     grade4: 13,
//     grade5: 60,
//     grade6: 3,
//     grade7: 29,
//     grade8: 23,
//     grade9: 67,
//     grade10: 16,
//     grade11: 18,
//     grade12: 70,
//     grade13: 76,
//     grade14: 13,
//     grade15: 26,
//     grade16: 30,
//     grade17: 41,
//     grade18: 16,
//     grade19: 33,
//     grade20: 26,
//     grade21: 59,
//     grade22: 1,
//     grade23: 57,
//     grade24: 3,
//     grade25: 61,
//     grade26: 78,
//     grade27: 10,
//     grade28: 22,
//     grade29: 62,
//     grade30: 72,
//     grade31: 59,
//     grade32: 82,
//     grade33: 59,
//     grade34: 84,
//     grade35: 20,
//     grade36: 34,
//     grade37: 52,
//     grade38: 81,
//     grade39: 76,
//     grade40: 41,
//     grade41: 18,
//     grade42: 90,
//     grade43: 41,
//     grade44: 31,
//     grade45: 16,
//     grade46: 15,
//     grade47: 68,
//     grade48: 44,
//     grade49: 47,
//     grade50: 25,
//     grade51: 20,
//     grade52: 20,
//     grade53: 46,
//     grade54: 44,
//     grade55: 14,
//     grade56: 79,
//     grade57: 81,
//     grade58: 2,
//     grade59: 62,
//     grade60: 88,
//     grade61: 29,
//     grade62: 34,
//     grade63: 27,
//     grade64: 45,
//     grade65: 26,
//     grade66: 59,
//     grade67: 75,
//     grade68: 73,
//     grade69: 31,
//     grade70: 82,
//     grade71: 85,
//     grade72: 39,
//     grade73: 13,
//     grade74: 14,
//     grade75: 9,
//     grade76: 52,
//     grade77: 49,
//     grade78: 27,
//     grade79: 4,
//     grade80: 30,
//     grade81: 38,
//     grade82: 21,
//     grade83: 10,
//     grade84: 73,
//     grade85: 44,
//     grade86: 23,
//     grade87: 24,
//     grade88: 13,
//     grade89: 69,
//     grade90: 35,
//     grade91: 63,
//     grade92: 8,
//     grade93: 57,
//     grade94: 59,
//     grade95: 79,
//     grade96: 76,
//     grade97: 74,
//     grade98: 81,
//     grade99: 96,
//     grade100: 13
// }

// var text =0;


// for(let key in Catheryn){
//     text += Catheryn[key];
// }
// console.log(text/100);

// let calculator = {
//     sum() {
//         return this.a + this.b
//     },

//     mul() {
//         return this.a * this.a
//     },

//     read(){
//         this.a = +prompt('a?',0);
//         this.b = +prompt('b?',0);
//     }
// };

// calculator.read(); // prompts for 2 values and saves them as objects

// alert(calculator.sum()); // returns sum 

// alert(calculator.mul()); // returns product of 2 values


// let ladder = {
//     step: 0,
//     height: 5,

//     up() {
//         if (this.step !== this.height){
//             this.step++;    
//         }else{
//             alert("Max Step reached")
//         }
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // shows the current step
//         alert(this.step);
//     }

// };

// ladder.height(5) // will not pass 5

// ladder.up().up().down().up().down().showStep(); // 1

// function Student(fName, id, gLevel, cG) {
//     this.fName = fName;
//     this.id = id;
//     this.gLevel = gLevel;
//     this.cG = cG;
//     this.admin = false;

//     this.graduate = function(){
//         return this.gLevel++;
//     };
//     this.whiteList = function(){
//         return this.admin = true;
//     };
//     this.setGrade = function(value){
//         return this.cG = value;
//     };


// };


// var student = new Student("James", "9907", 11, "A")

// console.log(student);

// class Rectangle {
//     constructor(width, length){
//         this.width = width;
//         this.length = length;
//     }
//     get Area(){
//     return this.width*this.length;
//     }
// }
// const rect1 = new Rectangle(10, 5);
// const rect2 = new Rectangle(6, 12);
// const rect3 = new Rectangle(15, 20);

// console.log(rect1.Area,rect2.Area,rect3.Area);

// class Circle {  

//     set radius(radius){
//         this._radius = radius;
//         this.area = 3.14 * radius * radius;
//         this.circumference = 2*(3.14)*radius;
//     }
//     set pi(){
//         return this.radius
//     }
// }
// const circ1 = new Circle(10,5);
// const circ2 = new Circle(11,7);  

