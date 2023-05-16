import { useState } from 'preact/hooks'
import '../app.css'
import novinkabg from "../../public/novinka-bg1.png"

interface NovinkaInterface {
    datum: string,
    author: string,
    isNovinka: boolean,
    timeAgo: string,
    content: string,
    obrazek?: string,
    obrazekText?: Array<[string,boolean?]> /**
    [["Prvni slovo"], ["druhé slovo"], ["vyznačené slovo", true]]
    */
}

export default function ({timeAgo,datum,obrazek,obrazekText,content,author,isNovinka}:NovinkaInterface) {
    let [showMore, setShowMore] = useState<boolean>(false)

  return (
    <>
        <div class={showMore ? "novinka" : "novinka fade"}>
            <div  style={{background: `url("${obrazek || novinkabg}") no-repeat center`,webkitBackgroundSize: "cover", backgroundSize: "cover"}} class="obrazek">
                <div>
                    {(obrazekText || [["Jedinečný", false], ["survival", true]]).map(el => {
                        return <>
                            {el[1] ? <span class="text focus">{el[0]} </span> : <span class="text">{el[0]} </span> }
                        </>
                    })}
                </div>
            </div>
            <div class="head">
                <div class="ago">{timeAgo}</div>
                {isNovinka && <div class="isnovinka">Novinka</div>}
            </div>
            <div class="content">
                <div className="text">{showMore ? content : content.substring(0, 170)}...</div>
                {!showMore ? <div className="readmore" onClick={()=>{
                    setShowMore(true)
                }}>Číst dále</div> : <div className="readmore" onClick={()=>{
                    setShowMore(false)
                }}>Číst méně</div>}
            </div>
            <div class="bottom">
                <div>{datum}</div>
                <div>{author}</div>
            </div>
        </div>
    </>
  )
}
