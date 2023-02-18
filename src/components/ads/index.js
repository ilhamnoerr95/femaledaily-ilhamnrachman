import { Fragment } from "react"
import style from "/src/styles/Ads.module.css"

const billBoard = ({children, cssName})=>{
    return <Fragment>
        <section className={`${style.Box} ${style[cssName]}`}>
                {children}
        </section>

    </Fragment>
}

export default billBoard;