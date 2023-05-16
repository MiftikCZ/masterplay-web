//@ts-nocheck

import { render } from 'preact'
import Main from './routes/Main.tsx'
import './index.css'
import {Router} from "preact-router"
import Pravidla from './routes/Pravidla.tsx'
import "@fontsource/inter"
import { importDatas } from './lib/database.ts'


render(<>
    <Router>
        <Main path="/"/>
        <Pravidla path="/pravidla"/>
    </Router>
</>, document.getElementById('app') as HTMLElement)