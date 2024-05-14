// type SuperPrint = <T>(a: T[]) => T;

// type Player<E> = {
//     name: string;
//     extraInfo: E;
// }

// type NicoExtra = {
//     favFood: string;
// }

// type NicoPlayer = Player<NicoExtra>

// const nico: NicoPlayer = {
//     name: "nico",
//     extraInfo: {
//         favFood: "kimchi"
//     }
// }

// =============================================================
// type Words = {
//     [key: string]: string;

// }


// class Dict {
//     private words: Words;
//     constructor() {
//         this.words = {}
//     }
//     add(word:Word){
//         if(this.words[word.term] === undefined){
//             this.words[word.term] = word.def;
//         }
//     }
//     def(term:string){
//         return this.words[term]
//     }
//     static hello() {
//         return "hello";
//     }
// }

// class Word {
//     constructor(
//         // public term: string,
//         // public def: string
//         // 읽기전용 readonly => 수정불가
//         public readonly term: string,
//         public readonly def: string
//     ) { }
// }


// const kimchi = new Word("kimchi", "한국의 음식");
// const dict = new Dict();
// dict.add(kimchi);
// dict.def("kimchi");
// // 브라우저 콘솔에 tsc -w로 변환된 .js를 붙여넣으면 '한국의 음식'을 출력하지만
// // 브라우저는 결과값을 자동으로 출력하는 코드가 내장되어있기때문임
// // 따라서 터미널에서는 해당 출력값을 볼 수 없음 => 보려면 콘솔로그사용


// Dict.hello();
// // 정적(static)메서드는 클래스 인스턴스를 통해 호출할 수 없음
// // => 클래스 자체에 바인딩됨



// // console.log("!!!");
// ============================================
// // 타입
// type Nickname = string;
// type Helath = number;
// type Player2 = {
//     nickname: Nickname,
//     healthBar:Helath
// }

// type Friends = Array<string>


// type Player = {
//     nickname: string,
//     healthBar:number
// }
// const nico: Player = {
//     nickname: "nico",
//     healthBar:10
// }

// type Food = string;
// const kimchi:Food = "delicious"

// // ============================================
// // // type 지정된 옵션으로만 제한
// type Team = "red" | "blue" | "yellow"
// type Health = 1 | 5 | 10


// type Player = {
//     nickname: string,
//     team: Team,
//     // => team이 read, blue, yellow중에 하나만 가능해짐
//     helath : Health
//     // => helath가 1,5,10만 가능
// }

// const nico: Player = {
//     nickname: "nico",
//     team: "red",
//     helath: 5
// }




// ============================================
// // 인터페이스
// // => 인터페이스는 오직 '오브젝트{}'를 설정해주기 위할때만 사용할 수 있음
// type Team = "red" | "blue" | "yellow"
// type Health = 1 | 5 | 10


// interface Player {
//     nickname: string,
//     team: Team,
//     // => team이 read, blue, yellow중에 하나만 가능해짐
//     helath : Health
//     // => helath가 1,5,10만 가능
// }

// const nico: Player = {
//     nickname: "nico",
//     team: "red",
//     helath: 5
// }


// ============================================
// // 타입
// type User = {
//     name: string
// }

// type Player = User & {

// }
// const nico : Player = {
//     name: "nico"
// }

// // 인터페이스
// interface User {
//     name: string
// }

// interface Player extends User {

// }
// const nico : Player = {
//     name: "nico"
// }



// ============================================
// // 인터페이스 쌓기
// interface User {
//     name: string
// }

// interface User{
//     lastName: string
// }

// interface User{
//     health: number   
// }

// const nico: User = {
//     name: "nico",
//     lastName: "n",
//     health: 5
// }



// ============================================
// // 추상 클래스
// // abstract class => 추상 클래스
// // 추상클래스를 상속받는 클래스가 가질 property와 메소드를 지정
// abstract class User {
//     constructor(
//         public name: string,
//         public lastName: string
//     ) { }
//     abstract sayHi(name:string):string;
//     abstract fullName():string;
// }
// class Player extends User {
//     sayHi(name:string){
//         return `Hello ${name}, my name is ${this.name}`
//     }
//     fullName(){
//         return this.name + this.lastName
//     }
// }


// ============================================
// // 인터페이스와 클래스 결합
// interface User {
//     firstName: string;
//     lastName: string;
//     sayHi(name: string): string;
//     fullName(): string;
// }
// // implements => 구현
// // => 인터페이스를 구현하는 클래스는 인터페이스에 정의된 모든 메소드를 구현해야함

// interface Human {
//     health: number;
// }
// // User인터페이스를 구현한 Player클래스
// class Player implements User, Human {
//     constructor(
//         public firstName: string,
//         public lastName: string,
//         public health: number
//         // public이 들어가야하는 이유
//         // => 생성자에 public을 붙이면 클래스 내부에 같은 이름의 프로퍼티가 생성되고
//         // => this.프로퍼티명으로 접근 가능해짐
//         // => public을 붙이지 않으면 클래스 내부에 프로퍼티가 생성되지 않아서 this.프로퍼티명으로 접근 불가
//         // => 따라서 생성자에 public을 붙여서 클래스 내부에 프로퍼티를 생성해주어야함
//     ){}
//     fullName(){
//         return this.firstName + this.lastName
//     }
//     sayHi(name: string){
//         return `Hello ${name}, my name is ${this.firstName}`
//     }
// }


// function makeUser(user: User) : User{
//  return {
//     firstName: "nico",
//     lastName: "las",
//     fullName: () => "xx",
//     sayHi: (name) => "string"
//  }
// }
// makeUser({
//     firstName: "nico",
//     lastName: "las",
//     fullName: () => "xx",
//     sayHi: (name) => "string"
// });
// ============================================
// // 타입과 인터페이스 비교 복습
// type PlayerA = {
//     name: string;
// }
// type PlayerAA = PlayerA & { // => 타입상속
//     lastName: string
// }
// const playerA : PlayerAA = {
//     name: "nico",
//     lastName: "las"

//     // team: "red",
//     // health: 100
// }

// interface PlayerB{
//     name: string;
// }
// interface PlayerBB extends PlayerB{ // => 인터페이스 확장(상속)
//     lastName: string
// }

// interface PlayerBB { // 이것도 상속이 됨
//     health: number 
// }
// const playerB: PlayerBB = {
//     name: "nico",
//     lastName: "las",
//     health: 1
//     // team: "red",
//     // health: 100
// }
// ============================================
// // 타입과 인터페이스 비교 복습2
type PlayerA = {
    firstName:string
}

interface PlayerB{
    firstName:string
}
class User implements PlayerA, PlayerB {
    constructor(
        public firstName: string
    ){}
}