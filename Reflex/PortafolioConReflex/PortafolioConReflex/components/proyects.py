import reflex as rx
from PortafolioConReflex.styles.colors import Color
def proyect() -> rx.Component:
    return rx.flex(
        rx.box(
            rx.text("Aquí irá el título del proyecto", size="6"),
            rx.text("Aquí ira la descripcion de el proyexto"),
            width = "50%"
        ),
        rx.image(
            src = "", 
            alt="Imagen del proyecto",
            width = "40%",
            object_fit="contain"
            ),
        padding = "2em",
        width = "100%",
        justify="between",
        background = Color.SECONDARY.value,
        border_radius = "10px",
        box_shadow = f"0px 0px 15px {Color.SAHADOWS.value}",
        spacing= "4",
        direction= rx.breakpoints(
            initial = "column",
            md = "row",
        )


    )