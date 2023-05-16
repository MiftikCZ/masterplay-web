import { useEffect, useState } from 'preact/hooks'
import '../app.css'
import Header from '../components/Header'
import minecraftIcon from "../../public/survival 2.png"
import Novinka from '../components/Novinka'
import getData from '../lib/database'
import databaseJson from "../../public/database.json"
import loadingGif from "../assets/785.gif"
import PripojSeDiscord from '../components/PripojSeDiscord'
import Footer from '../components/Footer'

interface FindUNasBlockInterface {
  icon?: string,
  title: string,
  popis: string
}

function FindUNasBlock({ icon, title, popis }: FindUNasBlockInterface) {
  return <>
    <div class="block">
      <img loading={"lazy"} src={icon ? minecraftIcon : undefined} alt="" height={64} className="icon" />
      <div className="column">
        <div className="title">{title}</div>
        <div className="popis">{popis}</div>
      </div>
    </div>
  </>
}

function SupportUs() {
  return <>
    <div className="section supportus">
      <div class="row">
        <h2 className="title">Pomož nám i ty!</h2>
        <div className="popis">Každý hlas se počítá a je to nejlepší způsob, jak nás zdarma podpořit.<br />Jako odměnu za každý hlas dostaneš klíč do truhly, která obsahuje velké množství výher.</div>
      </div>
      <div class="row tlacitka">
        <a href="" className="tlacitko">Craftlist</a>
        <a href="" className="tlacitko">Czech Craft</a>
      </div>
    </div>
  </>
}

function Loading() {
  return <>
    <img src={loadingGif} height={64} width={64} alt="" />
  </>
}

interface NeedSomeDatabase {
  database?: (typeof databaseJson)
}
export interface NeedJustDatabase {
  database: (typeof databaseJson)
}
interface NeedDatabase {
  database: (typeof databaseJson),
  showNovinek: number
}
interface NeedDatabaseWithNovinka {
  database: (typeof databaseJson)
}


function NovinkyListMainPage({ database,showNovinek }: NeedDatabase) {
  let [novinky,setNovinky] = useState<(((typeof database)["novinky"][0] | undefined)[])>([database.novinky[0], database.novinky[1], database.novinky[2]])

  useEffect(() => {
    console.log("eej")
    for (let i = 0; i < showNovinek; i++) {
      novinky[i] = database.novinky[i]
    }
    setNovinky(novinky)
  }, [showNovinek])
  

  return <>
    {novinky.map(novinka => {
      if (!novinka) return <></>
      return <>
        <Novinka author={novinka.author} content={novinka.content} datum={novinka.datum} isNovinka={novinka.isNovinka} timeAgo={novinka.timeAgo} obrazekText={[["Jedinečný"], ["survival", true]]} />
      </>
    })}
  </>
}

function NovinkyOnMainPage({ database }: NeedSomeDatabase) {

  let [showNovinek, setShowNovinek] = useState<number>(3)

  return <>
    <div class="novinky-wrapper">
      <div className="novinky">
        {database ? <>
          <NovinkyListMainPage showNovinek={showNovinek} database={database} />
        </> : <>
          <Loading />
        </>}

      </div>
      <button class="more-novinek" onClick={()=>{
        setShowNovinek(showNovinek + 2)
      }}>Zobrazit více</button>
    </div>


  </>
}

export default function () {
  const [database, setDatabase] = useState<typeof databaseJson | undefined>(undefined)

  getData().then((data) => {
    setDatabase(data)
  })

  return (
    <>
      <div class="main">
        <Header path="/" title="Vydej se za dobrodružstvím!" />
        <section class="section">
          <div class="join">
            <div className="link">play.masterplay.cz</div>
            <div className="verze">Verze: 1.19.2</div>
          </div>
          <div class="about">
            <div class="velky">O nás</div>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam fuga deleniti eos ipsum? Ad deserunt culpa beatae amet magni repellendus vel, fugiat rem et. Non iure sunt perspiciatis voluptas?</p>
          </div>
        </section>
        <div class="main-vlna"></div>

      </div>
      <div className="main-second">
        <div class="section">
          <h2 className="title">Co u nás najdeš?</h2>
          <div className="blocks">
            <FindUNasBlock title='Survival' popis='Natěž si suroviny, postav si své obydlí, objevuj svět, vydělávej peníze a relaxuj!' icon={minecraftIcon} />

            <FindUNasBlock title='Survival' popis='Natěž si suroviny, postav si své obydlí, objevuj svět, vydělávej peníze a relaxuj!' icon={minecraftIcon} />
          </div>
        </div>

        <SupportUs />

        <h1 class="bigtitle">Novinky</h1>


        <NovinkyOnMainPage database={database} />

        {database && <PripojSeDiscord database={database}/>}
      </div>
      {database && <Footer database={database}/>}
    </>
  )
}
