import { Fragment } from "react"
import style from "/src/styles/Ads.module.css"

const billBoard = ()=>{
    return <Fragment>
        <section>
        <div className={`${style.Box} ${style.Billboard}`}>
                    Billboard 970x250
            </div>
        </section>

    </Fragment>
}

export default billBoard;