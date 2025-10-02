import reflex as rx
from rxconfig import config


class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.container(
        rx.heading("Página Principal", size="7"),
        # 👇 ¡Aquí está el enlace!
        rx.link(
            rx.button("Ir a Contacto"),
            href="/contacto",  # Usamos la ruta que definimos arriba
            is_external=False, # Importante: Indica que es un enlace interno
        )
    )
def contacto() -> rx.Component:
    return rx.container(
        rx.heading("¡Contáctame!", size="7"),
        rx.text("Aquí estarán mis datos de contacto..."),
        # ¡Ojo! También agregamos un enlace de vuelta a la página principal
        rx.link("Volver al inicio", href="/"),
    )

app = rx.App()
app.add_page(index)
app.add_page(contacto)
