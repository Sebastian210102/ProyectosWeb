import reflex as rx
from PortafolioConReflex.components.contendor import contenedor_links

def links() -> rx.Component:

    return rx.center(
            rx.flex(
        
                contenedor_links("GitHub", "github", "https://github.com/Sebastian210102"),
                contenedor_links("GitHub", "github", "https://github.com/Sebastian210102"),
                contenedor_links("GitHub", "github", "https://github.com/Sebastian210102"),

                justify="between",
                width = "50%",
                padding_top = "40px",
                padding_bottom = "10px", 
        ),

        width = "100vw"
    )