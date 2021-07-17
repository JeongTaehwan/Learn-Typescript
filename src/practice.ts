let count = 0;
count += 1;

const message: string = 'hello world!'; // 문자열
const done: boolean = true; // 참 거짓

const number: number[] = [1, 2, 3]; // 배열
const messages: string[] = ['hello', 'world!']; // 문자열 배열


let mightBeUndifined: string | undefined = undefined; // 값이 문자열이거나 undefined일때
let nullableNumber: number | null = null; // 값이 숫자거나 null일때

let color: 'red' | 'orange' | 'yellow' = 'red';  // 값이 red,orange,yellow중에 하나 일때
color = 'yellow';