//!( task 1)

// let FullName  = 'Eldeniz MAhmudov Qabil'
// FullName = FullName.split('')
// console.log(FullName);

                                                                  
// !( task 2)
// let Fullname = 'Eldeniz Mahmudov Qabil';
// Text = Fullname
// let surname = Text.slice(7,17);
// let FullName = surname.concat(Text.slice(0,8), Text.slice(17,22));
// console.log(FullName.split(''));



// !( task 3)

// let Fullname = 'Eldeniz Mahmudov Qabil';
// Text = Fullname
// let surname = Text.slice(7,17);
// let FullName = surname.concat(Text.slice(0,8), Text.slice(17,22));
// console.log(FullName);










//!( task 4)


// let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// let repeated=0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==5){
//     repeated++;

//     }
// }
// console.log(repeated);



// !( task 5)

// let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// const total=0
// const sum=arr.reduce(
//     (total,Number)=>{
//         console.log(total , Number )
//         return total + Number
//     },
//     total
// );
// console.log(sum);

// **************************

// !( task 6)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let arr1 = {};
// let rewritten = [];

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (arr1[num]) {
//     arr1[num]++;
//   } else {
//     arr1[num] = 1;
//     rewritten.push(num);
//   }
// }

// rewritten.sort((a, b) => a - b);

// console.log("təkrar olunan ədədlər "+ rewritten);




  

// !( task 7)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let maxNumber = arr[0];
// let maxCount = 1;

// for (let i = 1; i < arr.length; i++) {
//   const num = arr[i];
//   if (num > maxNumber) {
//     maxNumber = num;
//     maxCount = 1;
//   } else if (num === maxNumber) {
//     maxCount++;
//   }
// }

// console.log("En büyük sayı:", maxNumber);
// console.log("Tekrar sayısı:", maxCount);



// ! ( task 8)

// let random_number = Math.floor(Math.random() * 10) + 1;
// let array = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]


// if (array.includes(random_number)) {
//   console.log(`${random_number} array içiersinde tapildi.`);
// } else {
//   console.log(`${random_number} array içiersinde tapilmadi .`);
// }


// ! ( task 9)


// let name = "Eldeniz";

// let letterCount = {};
// for (const letter of name) {
//   letterCount[letter] = (letterCount[letter] || 0) + 1;
// }

// let Count = Object.values(letterCount).reduce((acc, count) => acc + count, 0);
// let array = [2, 5, 3, 6, 1, Count];
// if (array.includes(Count)) {
//   console.log(`${Count} array içinde tapildi.`);
// } else {
//   console.log(`${Count} array içinde tapilmadi.`);
// }


// !( task 10)

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let Number = null;
// let Index = null;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 2) {
//     Number = arr[i];
//     Index = i;
//     break; 
//   }
// }

// if (Number !== null) {
//   console.log(`${Number}`);
//   console.log(`${Index}`);
// } else {
//   console.log("Error: ");
// }




// ! ( task 11)

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let Number = arr[0]; 
// let Index = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > Number) {
//     Number = arr[i];
//     Index = i;
//   }
// }

// console.log(` böyük sayı: ${Number}`);
// console.log(` ilk indeksi: ${Index}`);


// ! ( task 12)

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let Number = 4;
// let Index = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === Number) {
//     Index.push(i);
//   }
// }
// console.log(`${Index.join(", ")}`);





// !( task 13)

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let Number = 5;
// let minIndex = null;
// let maxIndex = null;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === Number) {
//     if (minIndex === null || i < minIndex) {
//       minIndex = i;
//     }
//     if (maxIndex === null || i > maxIndex) {
//       maxIndex = i;
//     }
//   }
// }

// if (minIndex !== null && maxIndex !== null) {
//   console.log(`kicik : ${minIndex}`);
//   console.log(`böyük: ${maxIndex}`);
// } else {
//   console.log("Error :");
// }


// !( task 14)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let Number = 2;
// let minIndex = null;
// let maxIndex = null;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === Number) {
//     if (minIndex === null || i < minIndex) {
//       minIndex = i;
//     }
//     if (maxIndex === null || i > maxIndex) {
//       maxIndex = i;
//     }
//   }
// }

// if (minIndex !== null && maxIndex !== null) {
//   console.log(`kicik : ${minIndex}`);
//   console.log(`böyük: ${maxIndex}`);
// } else {
//   console.log("Error :");
// }




// ! ( task 15)

// let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     total += i;
//   }
// }

// console.log(" 7 reqeminin indexlerinin cemi:", total);













// ! ( task 16)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let startsWithT = arr2.filter(item => item.name.toLowerCase('az').startsWith('t'));

// console.log("T ilə başlayan obyektlər:", startsWithT);



// !( task 17)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let startsAndEndsWithT = arr2.filter(item => item.name.toLowerCase('az').startsWith('t') && item.name.toLowerCase('az').endsWith('t'));
// let count = startsAndEndsWithT.length;

// console.log("T ilə başlayıb T ilə bitən obyektlərin sayı:", count);




// !( task 18)


// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let startAndEndT = arr2.filter(item => item.name.toLowerCase('az').startsWith('t') && item.name.toLowerCase('az').endsWith('t'));
// let OfKeys = startAndEndT.reduce((key, item) => key + item.key, 0);

// console.log("Key cəmi:", OfKeys);


// !( task 19)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].name.endsWith('e')) {
//     arr2[i].name = 'SuperDev';
//   }
// }

// console.log(arr2);



// ! ( task 20)


// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let NameIndex = 0;
// let NameLength = 0;

// for (let i = 0; i < arr2.length; i++) {
//   const currentNameLength = arr2[i].name.length;
//   if (currentNameLength > NameLength) {
//     NameIndex = i;
//     NameLength = currentNameLength;
//   }
// }

// let NameKey = arr2[NameIndex].key;
// let Name = arr2[NameIndex].name;
// console.log("'key' dəyəri: " , NameKey  , Name);


// !( task 21)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let lengthName = 0;
// let totalNameLength = 0;

// for (let i = 0; i < arr2.length; i++) {
//   const NameLength = arr2[i].name.length;
//   if (NameLength > totalNameLength) {
//     lengthName = i;
//     totalNameLength = NameLength;
//   }
// }

// let ofLengthName = lengthName * lengthName;
// console.log("Ən uzun 'name' atributuna sahib obyektin indeksinin kvadratı:",ofLengthName);




// ! ( task 22)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let newArray = arr2.filter(item => item.name.length === 4);

// console.log(" New array :", newArray);



// ! ( task 23)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let myKey = arr2[0].key;
// let Index = 0;

// for (let i = 1; i < arr2.length; i++) {
//   if (arr2[i].key > myKey) {
//     myKey = arr2[i].key;
//     Index = i;
//   }
// }

// let myObject = arr2[Index].name;
// console.log("Ən böyük 'key' dəyəri olan obyektin 'name' dəyəri:", myObject);








// ! ( task 24)


// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let strL = [];

// for (let i = 0; i < arr2.length; i++) {
//   let name = arr2[i].name.toLowerCase('az');
//   if (name.split('l').length - 1 === 2) {
//     strL.push(i);
//     console.log(name);
//   } 
// }

// console.log("Terkibində 2 'L' hərfi olan obyekt(ler)in indeksləri:", strL );
// console.log(name);




// ! ( task 25)

// let arr2 = [
//   {
//     name: 'test',
//     key: 1
//   },
//   {
//     name: 'task',
//     key: 2
//   },
//   {
//     name: 'tanqo',
//     key: 3
//   },
//   {
//     name: 'like',
//     key: 4
//   },
//   {
//     name: 'task',
//     key: 5
//   },
//   {
//     name: 'trust',
//     key: 6
//   },
//   {
//     name: 'test',
//     key: 7
//   },
//   {
//     name: 'last',
//     key: 8
//   },
//   {
//     name: 'tanqo',
//     key: 9
//   },
//   {
//     name: 'elephant',
//     key: 10
//   },
//   {
//     name: 'love',
//     key: 11
//   },
//   {
//     name: 'small',
//     key: 12
//   },
//   {
//     name: 'little',
//     key: 13
//   },
// ];

// let keyName = [];

// for (let i = 0; i < arr2.length; i++) {
//   let name = arr2[i].name.toLowerCase('az');
//   if (name.split('t').length - 1 === 2) {
//     keyName.push(arr2[i].key);
//   }
// }

// console.log("Terkibində 2 't' hərfi olan obyekt(ler)in 'key' dəyərləri:", keyName);

// !( task 26)
 
let arr2 = [
  { name: 'test', key: 1 },
  { name: 'task', key: 2 },
  { name: 'tanqo', key: 3 },
  { name: 'like', key: 4 },
  { name: 'task', key: 5 },
  { name: 'trust', key: 6 },
  { name: 'test', key: 7 },
  { name: 'last', key: 8 },
  { name: 'tanqo', key: 9 },
  { name: 'elephant', key: 10 },
  { name: 'love', key: 11 },
  { name: 'small', key: 12 },
  { name: 'little', key: 13 },
];

function countLetters(arr) {
  let letterCount = {};
  let mostFrequentLetter = '';
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].name.toLowerCase('az');
    for (let j = 0; j < name.length; j++) {
      const letter = name[j];
      letterCount[letter] = (letterCount[letter] || 0) + 1;
      if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        mostLetter = letter;
      }
    }
  }

  return { letterCount, mostLetter, maxCount };
}

let result = countLetters(arr2);
console.log("Hərflərin sayı : ", result.letterCount);
console.log("Ən çox rast gəlinən hərf:", result.mostLetter);
console.log("Ən çox rast gəlinən hərf sayı:", result.maxCount);





