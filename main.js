//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
let Fulname = 'KonulMemmedovaArif';
Herifler = Fulname.split('');
console.log(Herifler);
document.getElementById("task1").innerHTML = Herifler


//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
let surname = Herifler.slice(5, 14);
let newArray = surname.concat(Herifler.slice(0, 5), Herifler.slice(14));
console.log(newArray);
document.getElementById("task2").innerHTML = newArray



//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
let fulnameString = newArray.join(" ");
console.log(fulnameString);
document.getElementById("task3").innerHTML = fulnameString


///////////////////////

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let arr5 = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
let count1 = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === 5) {
        count1++;
    }
}
console.log(`5 reqemi tekrarlandi ${count1}defe`);
document.getElementById("task4").innerHTML = count1




//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a;
}
document.getElementById("task5").innerHTML = sum
console.log(sum);


//6) arrayda tekrar olunan reqemleri artan sira ile duzun


let counts = {};
for (let i = 0; i < arr5.length; i++) {
  let num = arr5[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
let sortedArr = [];
for (let num in counts) {
  for (let i = 0; i < counts[num]; i++) {
    sortedArr.push(parseInt(num));
  }
}
sortedArr.sort(function(a, b) {
  return a - b;
});
console.log(sortedArr);
document.getElementById("task6").innerHTML = sortedArr




//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

let maxNum = Math.max(...arr5);
let count = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] === maxNum) {
    count++;
  }
}
console.log(`Arreydeki en boyuk reqem ${maxNum} dir. ${count} defe tekrarlanib`);
document.getElementById("task7").innerHTML = maxNum 



//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

let randomNumber = Math.floor(Math.random() * 10) + 1;
if (arr5.includes(randomNumber)) {
  console.log(`arreyde var ${randomNumber} hemin reqem`);
} else {
  console.log(`hemin reqem  ${randomNumber} yoxdur`);
}
document.getElementById("task8").innerHTML = randomNumber
   

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

const name = "Konul";

const letterCount = name.length;

console.log("Hərflərin sayı:", letterCount);
console.log("Array:", arr5);

if (arr5.includes(letterCount)) {
  console.log("Hərflərin sayı massivdə mövcuddur.");
} else {
  console.log("Massivdə hərflərin sayı yoxdur.");
}

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 3 === 2) {
    let index = arr5.indexOf(arr5[i]);
    console.log("3-ə bölündükdə 2-nin qalığını qoyan ilk ədəd 1-ci indeksdə 5-dir " + arr5[i] + " at index " + index);
    break;
  }
}

//11) arraydaki en boyuk reqemin ilk indexini tapin
let maxNum1 = Math.max(...arr5);
let firstIndex = arr5.indexOf(maxNum1);
console.log(firstIndex);

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let FourMatsh = [];
let idx = arr5.indexOf(4);
while (idx != -1) {
  FourMatsh.push(idx);
  idx = arr5.indexOf(4, idx + 1);
}
console.log(FourMatsh); 


//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

let boyukIndex = -1;
let kicikIndex = arr5.length;

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] === 5) {
    if (i > boyukIndex) {
      boyukIndex = i;
    }
    if (i < kicikIndex) {
      kicikIndex = i;
    }
  }
}

console.log("5 in en böyük indeks :", boyukIndex);
console.log("5 in en kicik indeks :", kicikIndex);


//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

var newArr = [];

for (var i = 0; i < arr5.length; i++) {
  if (arr5[i] > length) {
  }
}

console.log(arr5)

for (var i = 0; i < arr5.length; i++) {
  if (arr5[i] > 2) {
    newArr.push(arr5[i]);
  }
}
console.log(newArr)
var ferq1 = newArr.length - arr5.length;
var ferq2 = arr5.length - newArr.length;
console.log("kicik arreyden boyuk arreyi cixdim: " + ferq1);
console.log("boyuk arreyden kicik arreyi cixdim: " + ferq2);


//15) 7 reqeminin indexleri cemini tapin.

let Indexsum = 0;

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] === 7) {
    Indexsum += i;
  }
}

console.log("7 reqeminin indexlerinin cemi: " +Indexsum);

 ///////////////////////////

let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]

/// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin



let newTArray = arr2.filter(obj => obj.name.startsWith('t'));

console.log(newTArray);



// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

let count11 = arr2.filter(obj => obj.name.charAt(0) === 't' && obj.name.charAt(obj.name.length - 1) === 't').length;
console.log(count11); 



// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin





//3cu gunun taski

// adinizi 5 saniye sonra localstorage-e yazib 
let Myname = "Konul";
 
setTimeout(() => {
  localStorage.setItem("Myname", name);
  console.log(`Ad localStorage-a əlavə edildi: ${name}`);
}, 5000);

setTimeout(() => {
  localStorage.removeItem("Myname");
  console.log(`Ad localStorage-dən silindi:${name}`);
}, 10000);

setTimeout(() => {
  sessionStorage.setItem("Myname", name);
  console.log(`Ad sessionStorage-a əlavə edildi: ${name}`);
}, 15000);











//  1ci gunun Taski
let deyer = Math.floor(Math.random() * 100) + 1;

switch (true) {
  case deyer >= 91 && deyer <= 100:
    console.log('sen kecdin yuksek balla: A');
    break;
  case deyer >= 81 && deyer <= 90:
    console.log('kecid balin: B');
    break;
  case deyer >= 71 && deyer <= 80:
    console.log('kecid balin: C');
    break;
  case deyer >= 61 && deyer <= 70:
    console.log('kecid balin: D');
    break;
  case deyer >= 51 && deyer <= 60:
    console.log('kecid balin: E');
    break;
  case deyer >= 0 && deyer <= 50:
    console.log('kesildiz .. bir daha sinayin;) : F');
    break;
  default:
    console.log('duzgun reqem daxil edin');
}


