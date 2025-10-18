import reflex as rx
from PortafolioConReflex.styles.colors import Color
def contenedor_links(nombre: str, logo: str, link: str) -> rx.Component : 
    
    return rx.center(
        rx.link(
            rx.button(

                rx.vstack(
                    
                    rx.icon(
                        tag = logo
                    ),
                    rx.text(nombre),

                    direction = "column",
                    align= "center",
                    justify="center",
                 
                ),

                height= "5em",
                border_radius = "20px",
                width = "6em",   
                background = Color.SECONDARY.value

            ),
            href=link,
            is_external= True,
        ),

            background = Color.SECONDARY.value,
            width = "8em",
            height = "8em",
            border_radius = "10px",
            box_shadow = f"0px 0px 15px {Color.SAHADOWS.value}"
    )