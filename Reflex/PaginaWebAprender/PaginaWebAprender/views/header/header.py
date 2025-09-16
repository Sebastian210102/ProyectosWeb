import reflex as rx
from PaginaWebAprender.components.link_icon import link_icon
from PaginaWebAprender.styles.styles import Size as size 
from PaginaWebAprender.components.info_text import info_text
from PaginaWebAprender.styles.colors import TextColor, Color
from PaginaWebAprender.components.title import title

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(fallback   = "SR",
                      src= "Tecnologia-del-mundo.jpg", 
                      size="9",
                      color_scheme= "purple",
                      padding = "5px",
                      border = "5px solid",
                      border_color = Color.PRIMARY.value
                       ),
            rx.vstack(
                rx.heading(
                        "Hola, soy Sebastián Rabadán", 
                        
                           ),
                rx.text(
                    "Ingeniero en mecatrónica con experiencia de desarrollo web",
                    margin_top = size.ZERO.value,
                    color = TextColor.BODY.value
                    ),
                    rx.hstack(
                        link_icon("https://instagram.com","instagram","instagram"),
                        link_icon("https://github.com","github", "github"),
                    ),
                    align_items = "start"
                    
            ),
            spacing = "6"
        ),

        rx.flex(
            info_text("+2","años de experiencia"),
            rx.spacer(),
            info_text("+2","años de experiencia"),
            rx.spacer(),
            info_text("+2","años de experiencia"),
            width= "100%"
        ),
       
        rx.text(
                """Hola, soy estudiante de ingeniería que se apaciona por el desrrollo de software,
                en especial el desarrollo web y data science. Con la visión de que la tecnolgía cree maravillas 
                y haga nuestras vidas más emocionantes y sencillas, vengo a que me des la oportunidad de demostrarte mis habilidades""",
                color = TextColor.BODY.value
                ),
                align_items = "start",
                spacing = "6"
    )
