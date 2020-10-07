let servo_rotation = 0
let resistance = 0
basic.showIcon(IconNames.Happy)
// Created by Aidan L-N
// Created October 7th 2020
// 
// Code that reads the value given by the potentiometer and converts it to a degree
// value that the servo can use to rotate itself.
basic.forever(function () {
    resistance = pins.analogReadPin(AnalogPin.P1)
    servo_rotation = resistance / 5
    robotbit.Servo(robotbit.Servos.S1, servo_rotation)
    basic.showNumber(resistance)
    basic.pause(100)
})
