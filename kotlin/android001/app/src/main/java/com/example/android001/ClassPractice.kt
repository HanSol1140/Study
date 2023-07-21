package com.example.android001

class Human  constructor(val name : String = "Anonymous"){ // "Anonymous" => 기본값 설정
    fun eatingCake(){
        println("this is so YUMMYYY")
    }
}


fun main(){
    val human = Human("hansol")
    val stranger = Human()
    human.eatingCake()
    println("this human's name is ${human.name}")
    println("this human's name is ${stranger.name}")
}