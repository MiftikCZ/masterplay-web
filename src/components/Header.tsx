import { useState } from 'preact/hooks'
import '../app.css'
import { JSX } from 'preact/jsx-runtime'
import masterplay from "../../public/masterplay.png"
interface HeaderProps {
    path: string,
    title: string
}

interface LinkProps {
    bg: boolean,
    path: string,
    linkTo: string,
    children: string
}


function Link({bg,path,children,linkTo}:LinkProps) {
    return <>
        <a class={`link ${bg ? "bg" : ""} ${linkTo == path ? "focus" : ""}`} href={linkTo}>{children}</a>
    </>
}

export default function ({path,title}:HeaderProps) {
  return (
    <>
        <div class="head headerSection">
            <div className="header">
                <div className="left">
                    <img src={masterplay} height={64} alt="" />
                </div>
                <div className="right">
                    <input type="checkbox" name="" id="mobile-navbar-show" />
                    <label for="mobile-navbar-show" class="mobile-navbar-show">&#9776;</label>
                    <div class="links">
                        <Link bg={false} linkTo='/' path={path}>Domů</Link> 
                        <Link bg={false} linkTo='/pravidla' path={path}>Pravidla</Link>
                        <Link bg={false} linkTo='/#' path={path}>Wiki</Link>
                        <Link bg={true} linkTo='/#' path={path}>Obchod</Link>
                        <Link bg={false} linkTo='/#' path={path}>Novinky</Link>
                        <Link bg={true} linkTo='/#' path={path}>Přihlásit se</Link>
                    </div>
                </div>
            </div>

            <div class="summary">
                <h1 class="title">{title}</h1>
            </div>
        </div>
    </>
  )
}
