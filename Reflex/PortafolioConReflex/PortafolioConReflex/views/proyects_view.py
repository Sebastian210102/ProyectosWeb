import reflex as rx
from PortafolioConReflex.components.proyects import proyect
def projects_section() -> rx.Component:
    return rx.vstack(
        proyect(),
        proyect(),
        proyect(),
        proyect(),

        width = "100%",
        padding = "5em",
        spacing= "9"
    )