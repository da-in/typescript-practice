# tsc와 ts-node

tsc를 이용하는 경우 hello.ts를 트랜스파일 하여 hello.js 를 생성하지만 실행은 하지 않음

```
$ npm i -g typescript
$ tsc hello.ts
```

typescript 파일을 실행하기 위해서는 ts-node를 사용해야 한다.
ts-node를 이용하면 컴파일 후 바로 실행한다.

```
$ npm i -g ts-node
ts-node hello.ts
```
