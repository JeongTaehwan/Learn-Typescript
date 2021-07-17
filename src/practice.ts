// generics를 사용하면 실제 파라미터에 넣는 타입이 유추가 됨

// 함수에서 Generics 사용
function wrap<T>(param: T) {
    return {
        param
    };
}

const wrapped = wrap(10);

// interface에서 Generics 사용
interface Items<T> {
    list: T[]
};

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

// type에서 Generics 사용
type List<T, V> = {
    list: T[],
    value: V
};

const list: List<string, number> = {
    list: ['a', 'b', 'c'],
    value: 12
};

// Generic으로 Queue만들기

class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
    console.log(queue.dequeue());
}