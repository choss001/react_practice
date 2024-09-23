import Card from '@/app/ui/test2/card';
import Graph from '@/app/ui/test2/graph';

abstract class Employee {
    constructor(private firstName: string, private lastName: string) {}
    abstract getSalary(): number;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

let employee = new FullTimeEmployee('Jhon', "Doe", 9);

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let test = [2, 5];

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');

export default function skeletons(){
    let greeting : (name: number) => string;

    greeting = function greetingTest(name: number){
        return `Hi ${name}`;
        console.log('test');
        
    }
    let items :(number | string | null)[];
    items = [0, 1, null, 'Hi'];

    let person = {
        greet: () => `Hi, ${name}`,
    }
    person.greet;



    
    return(
        <div>
            <div className="text-xl mb-9">Dash baord</div>
            <div className="lg:flex lg:space-x-5 grid-cols-2 grid gap-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='text-xl mt-8'>
                Recent Revenue

            </div>
            <Graph></Graph>
        </div>
    )
}