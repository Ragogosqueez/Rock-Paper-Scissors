Cha = 0

def on_pin_pressed_p0():
    global Cha
    Cha = 0
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    basic.show_number(3)
    basic.show_number(2)
    basic.show_number(1)
    if Cha == 0:
        basic.show_string("Rock")
        basic.pause(1000)
        basic.show_icon(IconNames.SQUARE)
    elif Cha == 1:
        basic.show_string("Paper")
        basic.pause(1000)
        basic.show_icon(IconNames.SMALL_SQUARE)
    elif Cha == 2:
        basic.show_string("Scissors")
        basic.pause(1000)
        basic.show_icon(IconNames.SCISSORS)
    else:
        basic.show_icon(IconNames.NO)
        basic.pause(1000)
        basic.show_string("Invalid")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global Cha
    Cha = 1
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_pin_pressed_p1():
    global Cha
    Cha = 1
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
