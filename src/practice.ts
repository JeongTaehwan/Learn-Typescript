function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
};

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing() { // 함수에서 아무것도 반환하지 않으면 반환 타입이 void로 설정됨
    console.log('어쩌고저쩌고');
}

returnNothing();

function returnStringOrNumber(): number | string {
    return '문자열';
}

returnStringOrNumber();