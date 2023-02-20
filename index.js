function myName(name, surname) {
  console.log("My name is " + name + surname);
}
myName("Bekzat ", " Imashev");


function coneVolume(height, radius) {
  cVolume =  ((height * 3.14 * (radius)  / 2) / 3);
  console.log("Объем конуса равен - " + cVolume);
}
coneVolume(8, 3);



function massage(a) {
  console.log("Длина строки равна - " + a.length);
}
massage("How are you");


let example = [45, 33, 11, 60, 3, 10, 15];
for (let i = 0; example.length > i; i++) {
  let num = example[i];
  if (num % 2 === 0) {
  console.log(num + " - Odd");
  }
  else {
    console.log(num + " - Even");
  } 
}
