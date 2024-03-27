package com.example.android001

import androidx.compose.ui.text.toUpperCase

fun main(){
//    helloWorld();
//    println(add(4, 5))

// 3. String Template
//    val name = "HanSol"
//    val lastName = "Song"
//    println("my name is ${lastName + name}") // 자바스크립트의 템플릿 리터럴과 동일한 기능
//    println("this is true? ${1 == 0}")
//    // $가 쓰고싶을때
//    println("this is 2\$!!!!")
//
    /*
     여러줄 주석하기
    */
//    checkNum(1)

//    forAndWhile()
//    nullcheck()
    ignoreNulls("hello")
}

// 1. 함수
fun helloWorld() : Unit{ // : 리턴타입
// Return형이 없을때 => void랑 똑같음 => 리턴이 없다면 생략이 가능함( : Unit)
    println("Hello World!")
}

fun add(a: Int, b: Int) : Int{ // 변수 타입이 뒤에 옵니다.
    return a + b
}

// 2. val vs var
// val == value
fun hi() {
    val a : Int = 10 // 상수 : 변할 수 없는 값
    var b : Int = 9 //  변수 : 변할 수 있는 값
    b = 100

    val c = 100 // Int라고 적지않아도 Integer인걸 인지함
    var d = 100 // ''

    var name1 : String = "HanSol"
    var name2 = "HanSol" // 데이터타입 안적어도 됨

    // var e => 이건 불가능함
    var e : String // 값이 없을경우 데이터타입을 선언해주어야합니다.
}

// 4. 조건식

fun maxBy(a : Int, b : Int) : Int{
    if(a > b){
        return a
    }else{
        return b
    }
}

fun maxBy2(a : Int, b : Int) : Int = if(a > b) a else b


// When => case문과 비슷한 기능
fun checkNum(score : Int){
    
    when(score){
        0 -> println("this is 0")
        1 -> println("this is 1")
        2,3 -> println("this is 2 or 3")
    }

    var b = when(score){ // 이렇게 사용할땐 반드시 else를 넣어줘야함 (예외처리)
        1 -> 1
        2 -> 2
        else -> 3
    }
    println("b : ${b}")

    when(score){
        // 90 ~ 100
        in 90..100 -> println("You are genius")
        // 10 ~ 80
        in 10..80 -> println("not bad")
        else -> println("okay")
    }
}

// Expression vs Statement

// expression : 표현식
// statement : 문장

// 코틀린의 모든 함수는 표현식으로 사용이 가능합니다.
// ex)
fun expression() : Unit{
    var a = 1
    var b = 2
    var aa = if(a > b) 1 else 2
    // 원래 if는 값을 반환하지 않아서 할당이 불가능합니다.
    // 그러나 코틀린에서는 표현식으로도 사용이 가능하고, 문장으로 사용할 수 있습니다.
}

// 5. Array and List
// Array => 크기가 정해져서 나옴

// List / 1. List / 2. MutableList
// MutableList => 수정 가능
// List  수정 불가

fun array(){
    val array  = arrayOf(1,2,3)
    val list = listOf(1,2,3)

    val array2 = arrayOf(1, "d", 3.4f)
    val list2 = listOf(1, "d", 11L)

    // array는 기본적으로 값을 변경할 수 있음
    array[0] = 3
    // 리스트는 기본적으로 값변경이 불가능합니다
    // list[0] = 2
    var result = list.get(0)

    // arrayList를 수정하는데 상수인 val을 쓸수잇는이유
    val arrayList = arrayListOf<Int>()
    arrayList.add(10)
    arrayList.add(20)
    arrayList[0] = 20
    // ArrayList는 주소값을 가르키기 때문

    // 새로운 주소를 할당하려고 하면 오류가 출력됨
    // arrayList = arrayListOf()

}

// 6. For / While

fun forAndWhile(){
    val students = arrayListOf("hansol", "dongkyun", "garam", "sangmin")

    for((index, name) in students.withIndex()){
    println("${index+1}번째 학생 : ${name}")
    }
    for( name in students){
        println("${name}")
    }
    var sum : Int = 0
    for( i : Int in 1..10){
        sum += i
    }
    println(sum)

    sum = 0
    for( i : Int in 1..10 step 2){ // 1, 3, 5, 7, 9
        sum += i
    }
    println(sum)

    sum = 0
    for( i in 10 downTo 1 step 2){ // 10에서 2씩 내려서 값이 1이 될때까지 반복, step 미기입시 1씩 줄어듬
        sum += i
        print("sum : ")
        println(i)
    }
    println(sum)

    sum = 0
    // for( i in 1 until 10){ // 1부터 10미만까지 반복
      for( i in 1..9){ // 같은 코드
        sum += i
    }
    println(sum)


    var index = 0
    while(index < 10){
        println("current index : ${index}")
        index++
    }

}

// 7. Nullable / NonNull => 코틀린의 가장 큰 특징
fun nullcheck(){
    // NPE : Null pointer Exception
    var name : String = "HanSol"
    var nullName : String? = null

    var nameInUpperCase = name.uppercase()
    var nullNameInUpperCase = nullName?.uppercase()
    // => 이렇게 해줘야 문자열이 null일때 uppercase도 null을 반환합니다. => null이면 uppercase를 실행하지않음 => null이 아니면 uppercase 실행

    // ?:
    // var lastName : String? = null
     var lastName : String? = "Song"
    var fullName : String = name + " " + (lastName?: " No LastName") // => lastName이 null이면 대신 출력할 메세지를 설정
    println(fullName)




}
// !! => null이 아니다

fun ignoreNulls(str : String?){
    val mNotNull : String = str!!
    val upper = mNotNull.uppercase()

    // ~?.let
    // ~가 null이 아니라면
    val email : String? = "skycriperd@gmail.com"
    email?.let{
        println("my email is ${email}")
    }
}
