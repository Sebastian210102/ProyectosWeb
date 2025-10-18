import reflex as rx
from PortafolioConReflex.styles.colors import Color
def header() -> rx.Component:
    return rx.vstack(
        rx.flex(
            rx.box(
                rx.text(
                    "Sebastian Rabadan",
                    size="7"
                        ),
                rx.text(
                    "Aute anim cillum fugiat sit Lorem qui culpa pariatur ullamco voluptate officia consectetur deserunt ut. Esse pariatur qui elit reprehenderit adipisicing id veniam ut dolor cupidatat adipisicing ex nostrud Lorem. Esse incididunt laborum consequat occaecat quis consectetur amet mollit magna nisi. Non proident nulla duis est ipsum tempor sunt duis labore aliquip est dolor. Labore aliqua nulla nisi culpa voluptate incididunt quis elit fugiat officia veniam.",
                    padding_top = "10px",
                    padding_bottom = "10px" 
                        ),
                direction = "column",
                align= "center",
                size = "5",
                width = "80%"
                ),
                rx.avatar(
                    fallback="SR", 
                    radius= "full", 
                    size = "9",
                    justify = "end"
                    ),

            direction = rx.breakpoints(
                initial = "column",
                sm = "column",
                lg = "row"   
            ),

            justify="between",
            align="center",
            # gap = "30px",
            width="80%",
            padding = "10px",
            height = "fit-content"

        ),

        width="100vw",
        min_height= "20em",
        background=f"linear-gradient(45deg, {Color.SECONDARY.value}, #32FFE775)",
        align = "center",
        justify = "center",
        box_shadow=f"5px 5px 10px {Color.SAHADOWS.value}"
    )