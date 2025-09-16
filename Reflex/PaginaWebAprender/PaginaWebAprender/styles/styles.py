import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font

#Constants
MAX_WIDTH = "600px"


#Sizes

class Size(Enum):   
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"

#Styles


BASE_STYLE = {
    "font_family":Font.DEFAULT,
    "background_color": Color.BACKGROUND.value
    ,

    rx.heading: {
        "size" : "9",
        "color" : TextColor.HEADER.value,
        "font_family0": Font.TITLE.value
    },

    rx.button : {
        "width": "100%",
        "height": "100%",
        "display":"block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "background_color": Color.CONTENT.value,
        "color" : TextColor.HEADER.value,
        "white_space" : "normal",
        "text_aling" : "start",
        "_hover" : {
            "background_color": Color.PRIMARY.value
        }
    },
    rx.link : {
        "text_decoration" : "none",
        "_hover" : {}
    }
}

title_style = dict(
    width = "100%",
    paading_top = Size.DEFAULT.value
)

button_title_style = dict(
    font_size = Size.DEFAULT.value,
    color = TextColor.HEADER.value,
    font_family = Font.TITLE.value
)

button_body_style = dict(
    font_size = Size.MEDIUM.value,
    color = TextColor.BODY.value,
    font_family = Font.DEFAULT.value
)

navbar_title_style = dict(
    font_family = Font.LOGO,
    font_size = Size.LARGE.value
)