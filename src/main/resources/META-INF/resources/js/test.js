console.log("===== 1. 스코프 차이 =====");

if (true) {
    var a = "var 변수";
    let b = "let 변수";
    const c = "const 변수";
}

console.log("var a:", a); // 접근 가능
console.log("let b:", b); // ref 에러
console.log("const c:", c); // ref 에러
//3번째 줄에서 문법은 맞지만 2번째 줄에서 오류가 나왔기때문에 스탑되어 3번째 줄은 오류라고 안뜸.

console.log("===== 2. 재선언 & 재할당 =====");
var x = 10;
var x = 20; // 가능
console.log("var 재선언:", x);
let y = 30;  //재할당 받아야 할 때
// let y = 40; // 에러 (재선언 불가)
y = 40; // 재할당 가능
console.log("let 재할당:", y);
const z = 50; //상수에 사용
// z = 60; // 에러 (재할당 불가)
console.log("const 값:", z);


console.log("===== 3. 호이스팅 =====");
console.log(testVar); // undefined
var testVar = 100;
console.log(testLet); // ReferenceError
let testLet = 200; //tdz가 발생해서 더이상 실행 안됨
console.log(testConst); // ReferenceError
const testConst = 30