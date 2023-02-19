import { Fragment } from "react"
import style from "./style/LookProduct.module.css"
import Image from "next/image";
import {assets} from "/src/assets"

// redux
import { useSelector } from "react-redux";
import {lookProducts} from "store/globalStore";

// components
import StartRating from "components/useable/ratingStar";

const BoxesProduct = ()=>{
    const lookingFor = useSelector(lookProducts)

    return (
        <section className={style.LookingContainer}>
        {
            lookingFor.map((data,index)=> {
                return <div className={style.BoxesContainer} key={index} >
                        <Image src={data.img} alt="image product" width="144" height="144"/>

                        <h5>
                            {data.match}
                        </h5>
                        <div className={style.RateProduct}>
                            <span>
                                <strong>
                                {data.rate}
                                </strong>
                            </span>
                            <StartRating value={3}/>
                            <span>(8)</span>
                        </div>
                        <h4 style={{marginTop: "0.5rem"}}>
                            {data.title}
                        </h4>
                        <div style={{margin: "0.5rem 0"}}>
                            {data.subtitle}
                        </div>
                        {data.type ? <div style={{ color:"grey"}} >{data.type}</div> : ''}
                </div>
            })

        }
        </section>
    )
}

const LookProduct = ()=>{

    return (
        <Fragment>
            <section className={style.LookContainer}>
                <Image className={style.ImageLooks} src={assets.skincare} alt="skincare-img"/>
                <div className={style.ContainerContent}>
                    <div className={style.TextContainer}>
                        <h2>Looking for product that
                            are just simple perfect for you?
                        </h2>
                        <h3>
                            Here are some product that we believe 
                            match your skin, hair, and body! Have we 
                            mentioned that they solve your concern too?
                        </h3>
                        <button>See My Matches</button>
                    </div>
                    <BoxesProduct/>
                  
                </div>
            </section>
        </Fragment>
    )

}


export default LookProduct