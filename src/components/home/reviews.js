import { Fragment } from "react";
import style from "./style/Review.module.css"
import Image from "next/image";
import {assets} from "/src/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// redux
import { useSelector } from "react-redux";
import {dataReviews} from "store/globalStore";

// components
import StartRating from "components/useable/ratingStar";
import Ads from '/src/components/ads'

const ReadMore = ({children})=>{
    let text = children.slice(0,100)
    return (
        <h5>
            {text}
            <span className={style.ReadMore}>
            ...Read More</span> 
        </h5>
    )
}

const BoxContent =()=>{
    const dataRev = useSelector(dataReviews)

    return <>
        {dataRev.map((data,index)=>
        {
            return (
                <div key={index} className={style.CardContainer}>
                    <div className={style.HeaderCard}>
                        <Image src={data.product.image} width="70" height="70" alt="img"/>
                        <div className={style.HeaderCard__Title}>
                            <h4>{data.product.desc}</h4>
                            <h4 style={{fontWeight:'400'}}>{data.product.name}</h4>
                        </div>
                    </div>
                    <hr className={style.Separator}/>
                    <div className={style.RatingStar}>
                        <StartRating value={data.star}/>
                        <h5>2 hours ago</h5>
                    </div>
                    <div className={style.Description}>
                        <ReadMore>
                            {data.comment}
                        </ReadMore>
                    </div>

                    <div className={style.ImagesContainer}>
                        <Image src={assets.cat} alt="editor picture"/>
                        <div className={style.TextAuthor}>
                            <h5>{data.user}</h5>
                            <h6>Combination skin, 25-26</h6>
                        </div>
                    </div>
                </div>
            )

        })}
    </>
}


const Reviews = ()=>{
    return <Fragment>
        <section className='sub-header-container' >
            <div className={style.MainContainer}>
                <div className={style.Title}>
                    <h2>Latest Reviews</h2>
                    <div className="sub-head">
                        <span>So you can make better purchase decision</span>
                        <div className="see-more review-see" >
                            See more
                        </div>
                    </div>
                </div>
                <div className={style.BoxContainer}>
                    <BoxContent/>
                </div>
                <div className={style.Adsense}>
                    <Ads cssName="Reviews">
                        Mr 2 <br/>
                        300x255
                    </Ads>
                </div>
                <div className={style.Slider}>
                    <span>
                    <FontAwesomeIcon icon={faChevronLeft} size="sm" color="pink"/>
                    </span>
                        <span className={style.Circle}></span>
                        <span className={style.Circle}></span>
                    <span style={{marginLeft: "1.5rem"}}>
                        <FontAwesomeIcon icon={faChevronRight} size="sm" color="red"/>
                    </span>
                </div>
            </div>
        </section>
    </Fragment>

}

export default Reviews;