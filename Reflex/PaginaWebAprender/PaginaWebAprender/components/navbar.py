import reflex as rx
from PaginaWebAprender.styles.styles import Size as size 
from PaginaWebAprender.styles.colors import TextColor, Color
import PaginaWebAprender.styles.styles as styles

def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.text(
                "Sebastián",
                as_= "span",
                color = Color.PRIMARY.value,
            ),
            rx.text(
                "Rabadán",
                as_= "span",   
                color = Color.SECONDARY.value
                ),
            style = styles.navbar_title_style
        ),
            
        position = "sticky",
        bg = Color.CONTENT.value,
        padding_x= size.DEFAULT.value,
        padding_y = size.DEFAULT.value,
        z_index = "999",
        top=0
    )


