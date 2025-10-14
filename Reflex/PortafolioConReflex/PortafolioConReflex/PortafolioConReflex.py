import reflex as rx
from rxconfig import config
from PortafolioConReflex.views.header import header 

# class State(rx.State):
"""The app state."""


def index() -> rx.Component:
    return rx.box(
        header(),
        width = "100%",

    )



app = rx.App()
app.add_page(index)

