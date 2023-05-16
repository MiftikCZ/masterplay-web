import { useState } from 'preact/hooks'
import '../app.css'
import { JSX } from 'preact/jsx-runtime'
import { NeedJustDatabase } from '../routes/Main'

interface BublinaInterface {
    icon: string,
    link: string
}

function Bublina({icon,link}:BublinaInterface) {
    return <>
        <a class="bublina" target="|blank" href={link}><img height="42" width="42" src={"https://cdn.simpleicons.org/"+icon} /></a>
    </>
}

export default function ({database}:NeedJustDatabase) {
  return (
    <>
        <footer>
            <div className="up">
                <div class="container">
                    <div className="link title">UŽITEČNÉ ODKAZY</div>
                    <a className="link" href="/">Domů</a>
                    {/* <a className="link">Jak se připojit</a> */}
                    {/* <a className="link">VIP</a> */}
                </div>

                <div class="container">
                    <div className="link title">PRAVIDLA A PODMÍNKY</div>
                    <a className="link" href="/">Pravidla</a>
                    {/* <a className="link">Ochrana osobních údajů</a> */}
                </div>
            </div>
            <div className="bottom">
                <div class="text">© MasterPlay.cz. Všechna práva vyhrazena | Designed by: exotwd | Coded by: MiftikCZ </div>
                <div className="odkazy">
                    <Bublina icon='discord' link={database.odkazy.discord}/>
                    <Bublina icon='instagram' link={database.odkazy.instagram}/>
                    <Bublina icon='youtube' link={database.odkazy.youtube}/>
                </div>
            </div>
        </footer>
    </>
  )
}
