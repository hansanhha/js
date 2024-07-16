**함수 선언**

독자적인 구문 형태로 존재

함수 선언문이 정의되기 전에 호출 가능
- 자바스크립트는 스크립트를 실행하기 전, 준비단계에서 전역에 선언된 함수 선언문을 찾고 해당 함수를 생성함
- 스크립트는 함수 선언문이 모두 처리된 이후에 실행되므로 어디서든 함수 선언문으로 선언된 함수에 접근 가능

```
function greeting() {
    console.log("hello");
}
```

**함수 표현식**

표현식이나 구문 구성(syntax construct) 내부에 생성

할당 연산자(`=`)의 우측에 생성

함수 표현식의 경우 함수 선언문과 달리 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성함

따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수 사용 가능

```
const greeting = function() {
    console.log("hello");
};
```

**화살표 함수**

```
const sum = (a, b) => a + b;

const calculate = (a, b) => {
    const c = a + b;
    return c - a - b;
}
```

**콜백 함수**

```
function move(coordinate, up, down) {
    if (coordinate === 'up') up()
    else down();
}
```
