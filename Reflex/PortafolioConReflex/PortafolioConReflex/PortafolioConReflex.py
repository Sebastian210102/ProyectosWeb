import reflex as rx
from rxconfig import config
from PortafolioConReflex.views.header import header 
import PortafolioConReflex.styles.styles as styles
from PortafolioConReflex.views.links import links
from PortafolioConReflex.views.proyects_view import projects_section

# class State(rx.State):
"""The app state."""


def index() -> rx.Component:
    return rx.box(
        header(),
        links(),
        projects_section(),


        width = "100%",
    )



app = rx.App(
    style= styles.BASE_STYLE

)
app.add_page(index)

