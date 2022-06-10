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

# Package.json

**명령 추가하기**

```
package.json
...
"scripts":{
    "dev" : "ts-node src",
    "build" : "tsc & node dist"
}
```

`package.json`에 위와 같이 명령어를 추가하면 다음과 같이 사용할 수 있다.

```
$ npm run dev
// index.ts 파일을 컴파일 후 실행한다
$ npm run build
// 설정한 dist 폴더에 트랜스파일하여 저장한다
```
