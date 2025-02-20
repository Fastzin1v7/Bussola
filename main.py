def on_logo_pressed():
    input.calibrate_compass()
    # Projeto Bl Fase 01
    if input.compass_heading() == 0:
        basic.show_string("N")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 45:
        basic.show_string("NE")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 90:
        basic.show_string("L")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 135:
        basic.show_string("SE")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 180:
        basic.show_string("S")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 225:
        basic.show_string("SW")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 270:
        basic.show_string("W")
    else:
        basic.show_string("" + str((input.compass_heading())))
    if input.compass_heading() == 315:
        basic.show_string("NW")
    else:
        basic.show_string("" + str((input.compass_heading())))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

