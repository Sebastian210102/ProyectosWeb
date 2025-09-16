import reflex as rx
import PaginaWebAprender.styles.styles as styles
from PaginaWebAprender.components.link_icon import link_icon


def link_button(title: str,body:str ,url:str, icono: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                link_icon(url, icono,""),              
                rx.vstack(
                    rx.text(title, style= styles.button_title_style),
                    rx.text(body,style= styles.button_body_style),
                    spacing="3",
                    align_items ="start",
                    margin = styles.Size.ZERO.value,
                    font_size = styles.Size.DEFAULT.value,
                    padding_rigth = styles.Size.DEFAULT.value,
                    alt = title
                )
                
            )
        ),
        href=url,
        is_external=True,
        width = "100%",
        text_decoration = "none"
    )
