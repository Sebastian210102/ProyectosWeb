import reflex as rx
from PaginaWebAprender.components.navbar import navbar
from PaginaWebAprender.components.footer import footer 
from PaginaWebAprender.views.header.header import header
from PaginaWebAprender.views.links.links import links
import PaginaWebAprender.styles.styles as styles
from PaginaWebAprender.styles.styles import Size as Size

# class State(rx.State):
#     pass 



def index() -> rx.Component:
    return rx.box(
        
    navbar(),
    rx.center(
        rx.vstack(
        header(),
        links(),
        max_width = styles.MAX_WIDTH,
        width = "100%",
        margin_y = Size.BIG.value,
        padding = Size.BIG.value
        )
    ),
    footer()        
    )


app = rx.App(
    style=styles.BASE_STYLE,
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
        "https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&display=swap"
    ]
)
app.add_page(
    index,
    title = "SebRa | Portafolio WEB",
    description= "Hola soy Sebastian, un igniero que esta empezando sus pasos como programador y con ganas de desarrollar ML, data science y Webs para poder cambiar el mundo.",
)
app.add_page(index)
