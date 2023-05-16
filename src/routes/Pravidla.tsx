import { useState } from 'preact/hooks'
import '../app.css'
import Header from '../components/Header'
import databaseJson from "../../public/database.json"
import { JSX } from 'preact/jsx-runtime'
import getData from '../lib/database'
import Footer from '../components/Footer'
interface JustChildren {
  children: string|JSX.Element|any
}

function Head({children}:JustChildren) {
  return <h3>
    {children}
  </h3>
}

function PravidlaText({children}:JustChildren) {
  return <div class="text">
    {children}
  </div>
}

export default function () {
  const [database, setDatabase] = useState<typeof databaseJson | undefined>(undefined)

  getData().then((data) => {
    setDatabase(data)
  })

  return (
    <>
        <div class="main">
        <Header path="/pravidla" title="Pravidla"/>
        <section class="section pravidla">
          <p>Všeobecné obchodní podmínky a Podmínky používání služeb QPlay.cz
        <div class="links">
          <a href="https://www.qplay.cz/dokumenty/VOP-01-07-2020.pdf">Obchodní podmínky (VOP)</a>
          <a href="https://www.qplay.cz/dokumenty/PodminkyPouzivani-01-07-2020.pdf">Podmínky používání služeb QPlay.cz</a>
          <a href="https://www.qplay.cz/dokumenty/ZasadyZpracovaniDat-01-07-2020.pdf">Zásady zpracování osobních údajů</a>
        </div></p>
<PravidlaText>
<span className="head">Pravidla</span>
Hráč registrovaný na serveru QPlay souhlasí s těmito pravidly a zavazuje se je dodržovat.<br/>
Pravidla se vztahují na Minecraft, Discord, TeamSpeak3 a Informační panel projektu QPlay.cz.<br/>
<span className="head">Podvádění</span>
Hráč nesmí konat věci, které vedou k jeho obohacení nebo ke škodě druhého. Je zakázáno zamlčení podstatné skutečnosti a uvedení hráče v omyl.<br/>
<span className="head">Nevhodný skin</span>
Nevhodný skin obsahuje například prvky nacismu a sexuality. Za skin považujeme veškeré jeho prvky včetně například cape.<br/>
<span className="head">Nevhodné jméno</span>
Nevhodné jméno obsahuje například urážlivé a sexuální prvky, vulgární slova. Jméno, které odkazuje na hacky/cheaty je taktéž nevhodné. Jméno se nesmí podobat jménu, které používá člen A-týmu.<br/>
<span className="head">Zneužití chyby serveru</span>
Hráč nesmí zneužívat jakékoliv chyby serveru. Jakmile hráč zjistí nějakou chybu na serveru, je povinen ji ihned ohlásit na Informačním panelu v ticket-systému. Za nahlášení chyby (je-li první) obdrží patřičnou odměnu.<br/>
<span className="head">Povinnosti hráče</span>
Hráč musí dodržovat platné zákony České republiky.Hráč je povinen na serveru dbát na zásady slušného chování. V případě, že zásady slušného chování porušuje jeho spoluhráč/protihráč, měl by ho nahlásit A-týmu.Hráč nesmí používat ani vlastnit upravené klienty, které mu ulehčují hru v Minecraftu (různé podpůrné nástroje, hacky, double click, multi click...). Butterfly click je povolen, avšak je zde vysoké riziko, že z důvodu vysokého počtu kliknutí za sekundu budete blokováni od Anti-Cheatu, proto jeho používání nedoporučujeme. Povolené modifikace jsou popsány níže.Hráč nesmí podvádět (žádným způsobem).Hráč nesmí vlastnit více než 1 účet za účelem obohacení účtů nebo poškození zájmů projektu QPlay.cz.Je zakázáno si uměle zvyšovat statistiky.Hráč nesmí spamovat chat. Za spam může být považována jakákoliv nevhodná zpráva do chatu - reklama, opakování stejné zprávy, nadávky apod.Hráč je povinen si chránit svůj účet silným heslem. V případě, že je hráč vlastníkem originálního účtu, doporučujeme použít ověření účtu.Hráč musí používat pouze vhodné jméno, které není vulgární, neobsahuje rasismus.Hráč musí mít nastaven vhodný skin.Hráč musí respektovat všechna nařízení serveru.Hráč nesmí jakýmkoliv způsobem kazit průběh hry ostatním hráčům (cross teaming, podkopávání spoluhráčů, targetování druhých hráčů, TPA-kill aj.).Hráč nesmí zneužít chyby serveru a musí ji nahlásit A-týmu nebo Vedení serveru.Hráč nesmí poskytovat žádné informace o tom, jak obejít systém zabezpečení proti podvádění a o způsobech fungování našich ochran. Dále nesmí poskytovat informace o instalaci zakázaných cheatů nebo komukoliv s instalací (či nastavením) přímo pomoci.Je zakázáno šířit jakékoliv informace o serveru, které nejsou veřejně přístupné.Hráč nesmí jakýmkoliv způsobem zneužívat či zbytečně zatěžovat podporu serveru.Je zakázáno podporovat nebo propagovat hnutí, které směřuje k potlačení práv a svobod člověka nebo hlásá národnostní, rasovou, náboženskou či třídní zášť nebo zášť vůči jiné skupině osob.Povolené modifikace:1) Veškeré estetické modifikace (například shadery, jas)[blinking skin mód je na serveru zakázán]2) Veškeré modifikace, které hráče informují, nebo něco indikují (například status brnění, status efektů, minimapa, damage indicator)3) Módy zlepšující výkon hry nebo zlepšující připojení k serveru (například módy zlepšující FPS)Veškeré modifikace jsou používány na vlastní nebezpečí, stejně jako hraní přes mobilní zařízení.<br/>
<span className="head">Povinnosti člena A-týmu:</span>
V případě, že není člen A-týmu AFK, musí hráčům vždy pomoci nebo je odkázat na podporu.Člen A-týmu se musí snažit udržovat server v pořádku, je-li někde problém, musí zakročit.Člen A-týmu by měl v době své přítomnosti řešit ticket-systém a problémy hráčů.Člen A-týmu se nesmí navyšovat nad ostatní hráče.Žádný z členů A-týmu nesmí hráčům poskytovat<br/> jakékoliv interní informace (například týkající se způsobu fungování Anti-Cheat ochrany, informace o poradách AdminTeamu a jiné).<br/>
<span className="head">Respektování hráčů/členů A-týmu</span>
Je zakázáno komukoliv (hráči nebo A-týmu) jakkoliv vyhrožovat, snažit se jej zesměšnit (či jinak znevážit nebo zpochybnit jeho autoritu před ostatními hráči), uvádět o něm nepravdivé či nepotvrzené informace. Toto pravidlo se týká nejen herního serveru QPlay.cz, ale i TeamSpeaku, Discordu a jakýchkoliv veřejně publikovaných příspěvků/fotek. <br/>Závažnější porušení tohoto pravidla může být nahlášeno příslušným úřadům.
Hráč:Každý hráč je si roven, a proto musí ostatní hráče na serveru respektovat. Vyžadujeme od hráčů, aby při hraní na serveru QPlay dbali na zásady slušného chování, byli laskaví a uctiví.Při komunikaci musí hráč brát v potaz, že na serveru hrají i mladší hráči, neplnoletí, a proto je nutné komunikovat slušně, bez vulgarit a bez sdílení obsahu pro dospělé.Každý má právo na své soukromí, a proto nesmí nikdo na serveru sdělovat ostatním hráčům jakékoliv osobní údaje druhých hráčů.Hráč nesmí projevovat žádné prvky provokace, diskriminace, rasismu a posměšku.<br/>
Člen A-týmu:Každé rozhodnutí člena A-týmu je považováno za rozhodující a pokud s ním hráč nesouhlasí, musí se obrátit na Vedení A-týmu, které stížnost hráče vyřeší.Při řešení problémů je nutné, aby hráč dbal na zásady slušného chování a udržel své nervy na uzdě při jakékoliv situaci. Obě strany tak předejdou zbytečným komplikacím.
<span className="head">Trestání</span>
Hráč:V případě, že hráč obdrží trest neprávem (MC/TS3/Discord), může podat ticket s žádostí o unban/unmute na Informační panel a tam se jeho trest projedná.Jestliže se hráč snaží mařit nebo obcházet své potrestání, může mu být délka trestu navýšena.<br/>
Člen A-týmu:Člen A-týmu má právo potrestat hráče, jestliže porušuje jakákoliv pravidla serveru.Člen A-týmu musí uchovat důkaz, trvá-li ban déle jak 7 dní. Výjimkou jsou bany na 30 a 60 dní. Vedení serveru důkazy uchovávat nemusí.<br/>
Zabezpečení a sdílení herního účtu<br/>
Je nutné si účet pořádně zabezpečit. K tomu slouží silné heslo a ověření originálního Minecraft účtu.Každý hráč je zodpovědný za bezpečnost svého účtu. Pokud jiný uživatel získá přístup k Vašemu účtu jakýmikoliv prostředky, stále zodpovídáte za svůj účet právě Vy.Sdílet své přihlašovací údaje ostatním hráčům je zakázané. Účet může mít pouze jednoho uživatele.<br/>
Silné heslo:Silné heslo musí obsahovat kombinaci, která obsahuje velká a malá písmena a je doplněna čísly. Silné heslo nesmí být stejné jako herní jméno a nemělo by obsahovat slovo.<br/>
<span className="head">Reklama</span>
Každý hráč, včetně členů A-týmu, nesmí psát do chatu reklamu. Výjimkou jsou hráči se skupinou „YouTuber", kteří mají jiné podmínky stanovené vedením serveru.Za reklamu se považuje jakákoliv přímá propagace (IP adresa, pozvánka na jiný server aj.) nebo kterákoliv URL adresa, vyjma těch, které souvisí s projektem QPlay.cz. Za reklamu se nepovažuje reklama na video/YouTube kanál/Twitch kanál tvůrce, který projekt QPlay.cz pozitivně propaguje. V případě inzerce názvů svých sociálních sítí záleží na posouzení člena A-týmu, zda taková inzerce není nevhodná.O potrestání reklamy rozhoduje člen A-týmu.<br/>
<span className="head">Obchodování</span>
Každý hráč, člen A-týmu, Vedení A-týmu a Vedení serveru má zakázáno nabízet hráčům jakoukoliv obchodní nabídku. Předejdeme tak několika podvodným dohodám, na které doplatilo v historii Minecraft serverů už několik hráčů. Jedná se také o nabídky typu: „Ahoj, pošli mi prosím tě určitý počet coins a já ti koupím VIP“.Je zakázáno obchodovat či jen nabízet jakoukoliv obchodní nabídku se svým účtem nebo s jeho částmi (coiny, VIP, atd.) nebo s VIP kódy. Výjimku tvoří pouze Survival server, kde je povoleno obchodování s částmi účtu specifickými pro Survival (itemy, Survival peníze).<br/>
<span className="head">TeamSpeak3</span>
Každý hráč/uživatel po připojení na TeamSpeak3 je povinen seznámit se s pravidly, které nalezne v místnosti [Pravidla TS3]. Pravidla musí respektovat.<br/>
<span className="head">Discord</span>
Každý hráč/uživatel po připojení na Discord je povinen seznámit se s pravidly, které nalezne v místnosti [#pravidla]. Pravidla musí respektovat.<br/>
<span className="head">Osobní údaje</span>
Pokud se hráč nebo člen A-týmu jakýmkoliv způsobem dostane k jakýmkoliv osobním údajům libovolného hráče (či člena a-týmu), je povinen zachovat mlčenlivost a v žádném případě je nesdílet s kýmkoliv dalším.<br/>
Vyhrazujeme si právo každý případ porušení pravidel posuzovat individuálně. Každý registrovaný uživatel na serveru QPlay.cz je povinen pravidelně kontrolovat změny těchto pravidel, hraním na herním serveru QPlay.cz stvrzuje, že se se všemi pravidly seznámil, rozumí jim a zavazuje se je dodržovat. <br/>
Všechna zde uvedená pravidla jsou platná od 14. 2. 2023.<br/>
</PravidlaText>
        </section>

      </div>
      {database && <Footer database={database}/>}
    </>
  )
}
