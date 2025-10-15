import reflex as rx

def contenedor_links(nombre: str, logo: str, link: str) -> rx.Component : 
    
    return rx.link(
        rx.button(
            rx.vstack(
                rx.icon(
                    tag = logo
                ),
                rx.text(nombre)
            ),

            height= "5em"
        ),

        href=link,
        is_external= True,


    )