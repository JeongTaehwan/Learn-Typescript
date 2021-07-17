interface Shape {
    getArea(): number;
}

class Circle implements Shape { // implemets는 조건에 부합한다라는 뜻
    constructor(public radius: number) { // public은 바깥에서도 알 수 있음
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { // private은 바깥에서 알 수 없음
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
});