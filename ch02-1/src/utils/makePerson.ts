export function Person(name: string, age: number) {
    return { name: name, age: age };
}

export function testPerson() {
    console.log(Person('Dain', 22), Person('inDa', 25));
}
