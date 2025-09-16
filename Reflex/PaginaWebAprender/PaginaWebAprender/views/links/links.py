import reflex as rx
from PaginaWebAprender.components.links_button import link_button
from PaginaWebAprender.components.title import title

def links() -> rx.Component:
    return rx.vstack(
        title("Sobre mí"),
        link_button(
            "Portafolio",
            "Un pequeño viztaso a mis proyectos",
            "https://github.com/Sebastian210102",
            "square-dashed-bottom-code"),
        link_button(
            "Linkedin",
            "Donde puedes ver sobre mi carrera profesional",
            "https://www.linkedin.com/in/sebastian-rabadan/",
            "linkedin"),
        link_button("Git Hub", 
                    " Conocer mas de mis proyectos" 
                    ,"https://www.instagram.com/sebastian_rabadan/",
                    "github"),
        title("Contacto"),
        link_button("Email",
                    "Contactame",
                    f"mailto:sebastian.rabadangranados@gmail.com",
                    "mails"),
        width = "100%",
        spacing= "4"
    )