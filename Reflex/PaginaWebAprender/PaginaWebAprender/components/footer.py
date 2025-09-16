import reflex as rx
import datetime 
from PaginaWebAprender.styles.styles import Size as size 
from PaginaWebAprender.styles.colors import TextColor

def footer() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.image(src="favicon.ico",
                     width = size.VERY_BIG.value,
                     height = size.VERY_BIG.value,
                     margin = "auto",
                     alt = "Logotipo de Seb"),
            rx.link("© Esta pagina es el portafolio de proyectos",
                    href="paginaweb.com",
                    is_external=True),

            rx.text(
                f"Sebastian es el diseñador de esta página creada en Agosto 2025 hasta {datetime.date.today().year}",
                font_size = size.MEDIUM.value,
                margin_top = size.ZERO.value,
            ),
            margin_bottom = size.BIG.value,
            padding_bottom = size.BIG.value,
            padding_x = size.BIG.value,
            color = TextColor.FOOTER.value
        )
    )