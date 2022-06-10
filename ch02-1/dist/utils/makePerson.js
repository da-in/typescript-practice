"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPerson = exports.Person = void 0;
function Person(name, age) {
    return { name: name, age: age };
}
exports.Person = Person;
function testPerson() {
    console.log(Person('Dain', 22), Person('inDa', 25));
}
exports.testPerson = testPerson;
//# sourceMappingURL=makePerson.js.map