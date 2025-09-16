

import { Fragment, useEffect } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Github as LucideGithub, Instagram as LucideInstagram, Linkedin as LucideLinkedin, Mails as LucideMails, SquareDashedBottomCode as LucideSquareDashedBottomCode } from "lucide-react"
import { jsx } from "@emotion/react"



export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["position"] : "sticky", ["background"] : "#001829", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "1em", ["paddingBottom"] : "1em", ["zIndex"] : "999", ["top"] : 0 }),direction:"row",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["fontFamily"] : "Lobster", ["--default-font-family"] : "Lobster", ["fontSize"] : "1.5em" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["color"] : "#7A0058" })},
"Sebasti\u00e1n"
,),jsx(
RadixThemesText,
{as:"span",css:({ ["color"] : "#09526E" })},
"Rabad\u00e1n"
,),),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["maxWidth"] : "600px", ["width"] : "100%", ["marginTop"] : "2em", ["marginBottom"] : "2em", ["padding"] : "2em" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"6"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"6"},
jsx(RadixThemesAvatar,{color:"purple",css:({ ["padding"] : "5px", ["border"] : "5px solid", ["borderColor"] : "#7A0058" }),fallback:"SR",size:"9",src:"Tecnologia-del-mundo.jpg"},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["size"] : "9", ["color"] : "#FFFFFF", ["fontFamily0"] : "Epunda Slab - Bold 700" })},
"Hola, soy Sebasti\u00e1n Rabad\u00e1n"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginTop"] : "0px !important", ["color"] : "#E0E0E0" })},
"Ingeniero en mecatr\u00f3nica con experiencia de desarrollo web"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://instagram.com"},
jsx(LucideInstagram,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "instagram" })},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://github.com"},
jsx(LucideGithub,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "github" })},)
,),),),),),jsx(
RadixThemesFlex,
{css:({ ["width"] : "100%" })},
jsx(
RadixThemesBox,
{css:({ ["fontSize"] : "0.8em" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#7A0058" })},
"+2"
,)," a\u00f1os de experiencia"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesBox,
{css:({ ["fontSize"] : "0.8em" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#7A0058" })},
"+2"
,)," a\u00f1os de experiencia"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesBox,
{css:({ ["fontSize"] : "0.8em" })},
jsx(
RadixThemesText,
{as:"span",css:({ ["fontWeight"] : "bold", ["color"] : "#7A0058" })},
"+2"
,)," a\u00f1os de experiencia"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#E0E0E0" })},
"Hola, soy estudiante de ingenier\u00eda que se apaciona por el desrrollo de software,\n                en especial el desarrollo web y data science. Con la visi\u00f3n de que la tecnolg\u00eda cree maravillas \n                y haga nuestras vidas m\u00e1s emocionantes y sencillas, vengo a que me des la oportunidad de demostrarte mis habilidades"
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},
jsx(
RadixThemesHeading,
{css:({ ["size"] : "9", ["color"] : "#FFFFFF", ["fontFamily0"] : "Epunda Slab - Bold 700", ["width"] : "100%", ["paadingTop"] : "1em" }),size:"6"},
"Sobre m\u00ed"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://github.com/Sebastian210102"},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["backgroundColor"] : "#001829", ["color"] : "#FFFFFF", ["whiteSpace"] : "normal", ["textAling"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#7A0058" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://github.com/Sebastian210102"},
jsx(LucideSquareDashedBottomCode,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "" })},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["margin"] : "0px !important", ["fontSize"] : "1em", ["paddingRigth"] : "1em", ["alt"] : "Portafolio" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1em", ["color"] : "#FFFFFF", ["fontFamily"] : "Epunda Slab - Bold 700", ["--default-font-family"] : "Epunda Slab - Bold 700" })},
"Portafolio"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["color"] : "#E0E0E0", ["fontFamily"] : "Epunda Slab", ["--default-font-family"] : "Epunda Slab" })},
"Un peque\u00f1o viztaso a mis proyectos"
,),),),),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://www.linkedin.com/in/sebastian-rabadan/"},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["backgroundColor"] : "#001829", ["color"] : "#FFFFFF", ["whiteSpace"] : "normal", ["textAling"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#7A0058" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://www.linkedin.com/in/sebastian-rabadan/"},
jsx(LucideLinkedin,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "" })},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["margin"] : "0px !important", ["fontSize"] : "1em", ["paddingRigth"] : "1em", ["alt"] : "Linkedin" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1em", ["color"] : "#FFFFFF", ["fontFamily"] : "Epunda Slab - Bold 700", ["--default-font-family"] : "Epunda Slab - Bold 700" })},
"Linkedin"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["color"] : "#E0E0E0", ["fontFamily"] : "Epunda Slab", ["--default-font-family"] : "Epunda Slab" })},
"Donde puedes ver sobre mi carrera profesional"
,),),),),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://www.instagram.com/sebastian_rabadan/"},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["backgroundColor"] : "#001829", ["color"] : "#FFFFFF", ["whiteSpace"] : "normal", ["textAling"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#7A0058" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://www.instagram.com/sebastian_rabadan/"},
jsx(LucideGithub,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "" })},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["margin"] : "0px !important", ["fontSize"] : "1em", ["paddingRigth"] : "1em", ["alt"] : "Git Hub" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1em", ["color"] : "#FFFFFF", ["fontFamily"] : "Epunda Slab - Bold 700", ["--default-font-family"] : "Epunda Slab - Bold 700" })},
"Git Hub"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["color"] : "#E0E0E0", ["fontFamily"] : "Epunda Slab", ["--default-font-family"] : "Epunda Slab" })},
" Conocer mas de mis proyectos"
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["size"] : "9", ["color"] : "#FFFFFF", ["fontFamily0"] : "Epunda Slab - Bold 700", ["width"] : "100%", ["paadingTop"] : "1em" }),size:"6"},
"Contacto"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"mailto:sebastian.rabadangranados@gmail.com"},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100%", ["display"] : "block", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["backgroundColor"] : "#001829", ["color"] : "#FFFFFF", ["whiteSpace"] : "normal", ["textAling"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#7A0058" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"mailto:sebastian.rabadangranados@gmail.com"},
jsx(LucideMails,{css:({ ["width"] : "2em", ["height"] : "2em", ["margin"] : "0.8em", ["alt"] : "" })},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["margin"] : "0px !important", ["fontSize"] : "1em", ["paddingRigth"] : "1em", ["alt"] : "Email" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1em", ["color"] : "#FFFFFF", ["fontFamily"] : "Epunda Slab - Bold 700", ["--default-font-family"] : "Epunda Slab - Bold 700" })},
"Email"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["color"] : "#E0E0E0", ["fontFamily"] : "Epunda Slab", ["--default-font-family"] : "Epunda Slab" })},
"Contactame"
,),),),),),),),),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em", ["paddingBottom"] : "2em", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["color"] : "#9A8FBF" }),direction:"column",gap:"3"},
jsx("img",{alt:"Logotipo de Seb",css:({ ["width"] : "4em", ["height"] : "4em", ["margin"] : "auto" }),src:"favicon.ico"},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"paginaweb.com"},
"\u00a9 Esta pagina es el portafolio de proyectos"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.8em", ["marginTop"] : "0px !important" })},
"Sebastian es el dise\u00f1ador de esta p\u00e1gina creada en Agosto 2025 hasta 2025"
,),),),),jsx(
"title",
{},
"SebRa | Portafolio WEB"
,),jsx("meta",{content:"Hola soy Sebastian, un igniero que esta empezando sus pasos como programador y con ganas de desarrollar ML, data science y Webs para poder cambiar el mundo.",name:"description"},)
,jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
