"use strict";
const nico = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
};
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
// }
// class Word {
//     constructor(
//         public term: string,
//         public def: string
//     ) { }
// }
// const kimchi = new Word("kimchi", "한국의 음식");
// const dict = new Dict();
// dict.add(kimchi);
// dict.def("kimchi");
// console.log("!!!");
// 브라우저 콘솔에 tsc -w로 변환된 .js를 붙여넣으면 '한국의 음식'을 출력하지만
// 브라우저는 결과값을 자동으로 출력하는 코드가 내장되어있기때문임
// 따라서 터미널에서는 해당 출력값을 볼 수 없음
