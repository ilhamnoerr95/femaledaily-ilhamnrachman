import { Fragment } from "react";
import style from "/src/styles/Header.module.css"
import Image from "next/image";

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// assets
import {assets} from "/src/assets"



const Header = ()=>{
    return <Fragment>
        <nav className={style.MainNavContainer}>
            <div className={style.NavContainerTop}>
                <div className={style.NavLeftContainer}>
                    <FontAwesomeIcon icon={faBars} style={{cursor:"pointer", marginLeft:"1rem"}}/>
                    <Image src={assets.logo} alt="fd" width={150} height={35}/>
                    <div className={style.NavInputContainer}>
                        <input 
                        className={`${style.NavInputContainer} ${style.TextField}`} 
                        type="text"
                        placeholder="Search product, articles, topics, brands, etc"
                        />

                        <FontAwesomeIcon
                        className={`${style.Icon}`}
                        icon={faMagnifyingGlass} />

                        {/* <i className="icon-input__icon material-icons">search</i> */}
                    </div>
                </div>
                <div className={style.NavAuth}>
                    <div className={style.NavAuthChild}>
                    <Image src={assets.user} alt="Menu" width={24} height={24}/>
                        <h4 className="font-light">LOGIN / SIGNUP</h4>
                    </div>
                </div>
            </div>
            <div className={`${style.NavContainerBot} 
            ${style['poppin-md']}`}>
                <li>SKINCARE</li>
                <li>MAKE UP</li>
                <li>BODY</li>
                <li>HAIR</li>
                <li>FRAGRANCE</li>
                <li>NAILS</li>
                <li>TOOLS</li>
                <li>BRANDS</li>
            </div>
        </nav>
    </Fragment>
}

export default Header;