import { useState } from 'preact/hooks'
import '../app.css'
import { NeedJustDatabase } from '../routes/Main'

export default function ({database}:NeedJustDatabase) {
  return (
    <>
        <div class="join-discord">
            <div class="left">
                <div className="title">Připoj se na discord!</div>
                <ul className="vyhody">
                    <li>Máte přístup do místnosti #general 🎮</li>
                    <li>Otevře se vám místnost #pomoc-mezi-hráči, ve které můžete požádat o pomoc druhých hráčů, nebo naopak druhým hráčům můžete pomoct vy 👥</li>
                    <li>Máte přístup do mnoha dalších text channelů</li>
                    <li>Máte k dispozici několik volných voice místností 🗣️</li>
                    <li>Máte možnost se zúčastňovat herních akcí! </li>
                </ul>
            </div>
            <div className="right">
                <a href={database.odkazy.discord} className="button" target="_blank">Připojit se!</a>
            </div>
        </div>
    </>
  )
}
