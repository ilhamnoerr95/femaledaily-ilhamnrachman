import { Fragment, useMemo } from "react";
import Image from "next/image";
import style from './style/TrendingProducts.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// redux
import { trendsProduct } from "store/globalStore";
import { useSelector } from "react-redux";

// components
import StartRating from "components/useable/ratingStar";


const TrendingProduct = ()=>{

    const trends = useSelector(trendsProduct)

    return (<div className={style.ProductContainer}>
        {trends.map((product)=>{
            return <div className={style.ProductBox} key={product.id}>
                <Image src={product.img} alt="trending image" width="144" height="144"/>
                <div className={style.RateProduct}>
                    <span>{product.rate}</span>
                    <StartRating value={3}/>
                    <span>(8)</span>
                </div>
                <h4 style={{margin: "1rem 0"}}>{product.title}</h4>
                <div className={style.Desc}>
                    <span >{product.subtitle}</span>
                    {product.type ? <div style={{marginTop: "0.5rem"}} id={style.Premium}>{product.type}</div> : ''}
                </div>
            </div>
        })}
    </div>)
}

const Trending = ()=>{
    return (
        <Fragment>
        <section className="sub-header-container">
                <h2>Trending This Week</h2>
                <div className="sub-head">
                    <span>See our weekly most reviewed products</span>
                </div>
                <TrendingProduct/>
                <div className={style.Slider}>
                    slider
                </div>
        </section>
        </Fragment>
    
    )
}

export default Trending;