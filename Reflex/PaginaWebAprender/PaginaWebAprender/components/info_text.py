import reflex as rx
from PaginaWebAprender.styles.styles import Size as size 
from PaginaWebAprender.styles.colors import TextColor, Color


def info_text(title : str,body : str ):
    return rx.box(
        rx.text(
            title,
            as_="span",
            font_weight = "bold", 
            color = Color.PRIMARY.value
            ),
        f' {body}', #Span que quiero modificar
        font_size = size.MEDIUM.value


    )