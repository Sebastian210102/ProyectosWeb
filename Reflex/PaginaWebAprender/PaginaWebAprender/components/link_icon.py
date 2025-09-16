import reflex as rx
import PaginaWebAprender.styles.styles as styles

def link_icon(url:str, icono: str, alt: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag = icono,
            width = styles.Size.BIG.value,
            height = styles.Size.BIG.value,
            margin = styles.Size.MEDIUM.value,
            alt = alt
        ),
        href= url,
        is_external= True
    )