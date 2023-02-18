import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUserMinus, faBars, } from '@fortawesome/free-solid-svg-icons'
import {faMessage} from "@fortawesome/free-solid-svg-icons"
import styles from "./style/PopularGroups.module.css"
import Image from "next/image";

// redux toolkit
import { useSelector } from "react-redux";
import { groupBoxes } from "store/globalStore";

const BoxesPopuler = ()=>{
    const dataPopuler = useSelector(groupBoxes)

    return (
        <>
            {dataPopuler.map((data)=> {
                return (
                    <div className={styles.PopularBoxesContainer} key={data.id}>
                        <div className={styles.ImagesPopular}>
                            <Image src={data.img} alt="popular-images"/>
                        </div>
                       <h2 style={{marginBottom: "2rem"}}>Embrace the Curl</h2>
                       <div className={styles.PopularChoice}>
                            <FontAwesomeIcon icon={faUserMinus} size="sm"/>
                            <FontAwesomeIcon icon={faBars} style={{marginLeft: "1rem"}} size="sm"/>
                            <FontAwesomeIcon icon={faMessage} style={{marginLeft: "1rem"}} size="sm"/>
                       </div>
                       <p>May our curls pop and never stop!</p>
                    </div>
                )
            })}
        </>
    )
}

const PopularGroup = ()=>{
    return (
        <Fragment>
            <section className="sub-header-container">
                <h2>Popular Groups</h2>
                <div className="sub-head">
                    <span>What the beauty TALK are</span>
                    <div className="see-more">
                        See more
                        <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: "1rem"}} size="xs"/>
                    </div>
                </div>
                <div className={styles.BoxesContainer}>
                    <BoxesPopuler/>
                </div>
            </section>
        </Fragment>
    )
}

export default PopularGroup;