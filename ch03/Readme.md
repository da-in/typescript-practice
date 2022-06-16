# 객체와 타입

1. 호이스팅(Hoisting) : 변수 선언문들이 런타임 이전 우선 작동함
2. 블록 레벨 스코프(Block Level Scope) : 모든 코드 블록이 지역스코프를 만든다
    - `var` 는 함수 레벨 스코프로, 중복선언 가능, 함수 외 영역 선언시 전역 변수가 됨, 선언 이전 참조시 `undefined`로 뜨는 등의 문제가 있어 추천하지 않는다.
    - 블록 레벨 스코프인 `const` 와 `let` 사용 권장
    - `const` : 런타임에 선언과 초기화 동시에 진행된다. _초기화 전 사용시 사용 불가 에러_
    - `let` : 런타임 전 선언, 런타임 초기화. _초기화 전 사용시 참조 에러 (`undefined`)_

<br/>
단순 타입 체크시 인터페이스를, 함수까지 구현한다면 클래스를 사용해보자.  
<br/>
<br/>

## interface

타입스크립트에서만 제공되는 가상구조.  
선언만 존재하고 구현하지 않는다.

```
interface Person {
    name : string
}
```

interface 키워드와 이름을 사용하지 않는 익명 인터페이스(anonymous interface)를 만들 수 있다.  
함수 구현시 매개변수 타입 지정에 많이 사용한다.

```
function Introduce(person: {name:string, age:number, etc?:boolean}){
    ...
}
```

<br/>

## class

### access modifier

`private`, `public`, `protected` 접근제한자 사용 가능

```
class Person {
    private name : string
}
//생략시 public 으로 간주
```

### constructor

`constructor`는 Typescript의 생성자이면서 동시에 클래스 내에 해당 속성을 선언한 것처럼 작동한다. 다른 객체 지향 언어에서 우리는 생성자를 통해 생성 후 `this.name = name` 과 같이클래스 내 속성에 할당해주어야 했는데 이를 생략하여 코드가 훨씬 간결하다.

```
class Person {
    //name: string
    //age?: number
    constructor(public name: string, public age?: number) {}
    //this.name=name; this.age=age
}
```

<br/>

### 인터페이스 구현

인터페이스는 속성을 정의하는 규약일 뿐 물리적으로 구현하지 않음.

```
class Student implements Person {
    ...
}
```

### 추상클래스(Abstract Class)

```
abstract class Student {
    ...
}
```

추상 클래스는 `new` 연산자를 적용해 객체를 만들 수 없다.  
추상 클래스는 아래와 같이 `extends` 키워드를 사용하여 상속 클래스를 만들어 사용한다.

```
class Freshman extends Student {
    ...
}
```

<br/>

## 객체의 비구조화 할당

정보들을 묶어 타입으로서 표현하는 것을 구조화(structuring)라고 한다.

Before

```
let personName = dain
let personAge = 25
```

After

```
export interface Person{
    name: string
    age: number
}
```

<br/>

### 비구조화

비구조화는 이의 역으로 위의 예시로는 `Person` 객체의 `name`과 `age`를 불러와서 변수로 사용하는 것이다. `dain`이라는 `Person` 타입의 객체를 만들었다고 가정하면.

```
let name = dain.name
let age = dain.age
```

<br/>

### 비구조화 할당

객체, 배열, 튜플에 적용할 수 있고, 얻고자 하는 속성을 중괄호로 묶어 비구조화 할당을 하면 새로 생성된 변수에 각 초기값이 할당된다.

```
let {name, age} = dain
```

<br/>

## 잔여 연산자(rest operator)와 전개 연산자(spread operator)

비구조화 할당문에서 ...연산자를 사용할 경우 잔여연산자, 아닐 경우 전개연산자이다.

```
//잔여 연산자 : name, age를 제외한 속성이 detail 변수에 저장됨
const {name, age, ...detail} = dain

//전개 연산자 : dain과 inda 객체를 전개하여 하나의 객체로 person_info에 저장됨
let person_info = {...dain, ...inda}
```

<br/>

## 타입 단언(type assertion)

dain 객체의 타입이 object라면 name이라는 속성을 가지고 있지 않는다. 아래의 경우 타입 단언을 통해 Person 타입으로서 인식하여 name이라는 속성에 접근할 수 있게 된다.

```
(<Person>dain).name
(dain as Person).name
```
