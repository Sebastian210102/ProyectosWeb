import reflex as rx
from PortafolioConReflex.components.contendor import contenedor_links

def links() -> rx.Component:

    return rx.center(
            rx.flex(
        
                contenedor_links("GitHub", "github", "https://github.com/Sebastian210102"),
                contenedor_links("Linkedin", "Linkedin", "https://github.com/Sebastian210102"),
                contenedor_links("Instagram", "instagram", "https://github.com/Sebastian210102"),

                justify= rx.breakpoints(
                    sm="center",
                    md = "between"
                ),

                align= "center",

                width = "50%",
                padding_top = "40px",
                padding_bottom = "10px", 
                
                direction= rx.breakpoints(
                    initial = "column",
                    md= "row"
                    
                ),
                margin_top = "100px",

                padding = "20px"
        ),

        width = "100vw",
      
    )