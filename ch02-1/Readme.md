# Create TypeScript Project

**프로젝트 생성**

```
$ npm init --y
//yes option은 package.json 기본 양식을 사용하겠다는 의미
```

아래 설치 옵션에 따라 package.json에 분리되어 등록됨.

```
$ npm install --save [package] 프로젝트를 실행할 때에 필요한 패키지 설치
$ npm install --save-dev [package] 프로젝트를 개발할 때에 필요한 패키지 설치
```

**package**  
`typescript` tsc를 포함  
`ts-node` 컴파일 후 실행할 수 있도록 함  
`@types/node` 자바스크립트 라이브러리들의 타입스크립트 정상 사용을 위함 ex)ramda, chance, promise
