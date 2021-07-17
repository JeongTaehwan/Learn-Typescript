type Person = {
    name: string;
    age?: number; // ?는 age가 있을수도 있고 없을수도 있다는 뜻
}

type Developer = Person & { // Person &가 상속 받겠다는 뜻
    skills: string[];
};

const person: Person = {
    name: '정태환',
    age: 18,
};

const taehwan: Developer = {
    name: '정태환',
    skills: ['javascript', 'react', 'sass', 'jest']
};

type People = Person[];
const people: People = [person, taehwan];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';