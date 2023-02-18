import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styles from "/src/components/home/style/TopBrands.module.css"
import Image from "next/image";

// redux toolkit
import { useSelector } from "react-redux";
import { brandsImg } from "store/globalStore";

const BrandsLogo = ()=>{
    const imgBrands = useSelector(brandsImg)

    return (
        <div className={styles.TopBrands}>
          {imgBrands.map((data) => {
            return (<div key={data.id}>
                <Image src={data.img} width={data.width} height={data.height} alt="top brands"/>
            </div>)
          })}
        </div>
    )
}

const TopBrands = ()=>{
    return <Fragment>
        <section className="sub-header-container">
            <h2>Top Brands</h2>
            <div className="sub-head">
                <span>We all know and love</span>
                <div className="see-more">
                    See more
                    <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: "1rem"}} size="xs"/>
                </div>
            </div>
            <BrandsLogo/>
            <div className={styles.BrandsMessage}>
                <h2 style={{marginBottom: "0.6rem"}}>Female Daily - Find everything you want to know about beauty on Female Daily</h2>
                <span>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! <br/>
                    We are here to be your friendly solution to all things beauty, inside and out!</span>
            </div>

        </section>
    </Fragment>
}


export default TopBrands;