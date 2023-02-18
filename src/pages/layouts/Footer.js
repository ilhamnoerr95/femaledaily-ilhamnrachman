import { Fragment } from "react";
import style from "/src/styles/Footer.module.css"
import Image from "next/image";

// assets
import {assets} from "/src/assets"

// components
import Ads from '/src/components/ads'

const footer = ()=>{
    return <Fragment >
        <div className={style.Pondation}>
            <footer className={style.FooterContainer}>
                <div className={`${style.ChildFooterContainer}`}>
                    <ul>
                        <li>About Us</li>
                        <li>Terms & COnditions</li>
                        <li>Awards</li>
                        <li>Feedback</li>
                        <li>Privacy Policy</li>
                        <li>Newsletter</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                    <Image src={assets.logo} alt="fd" width={150} height={35}/>
                </div>
                <div className={`${style.ChildFooterContainer}`}>
                    <ul>
                        <li className={style.Downloads}>Download Our Mobile App</li>
                        <li className={style.Images}>
                            <Image src={assets.applestore} alt="applestore" width={120} height={40}/>

                        </li>
                        <li className={style.Images}>
                            <Image src={assets.playstore} alt="playestore" width={120} height={40}/>
                        </li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <div className={style.FooterSosmed}>
                        <Image src={assets.facebook} alt="fd" width={32} height={32}/>
                        <Image src={assets.twitter} alt="fd" width={32} height={32}/>
                        <Image src={assets.instagram} alt="fd" width={32} height={32}/>
                        <Image src={assets.youtube} alt="fd" width={32} height={32}/>
                    </div>

                </div>
                <div className={`${style.CopyRightContainer}`}>
                        Copyright © 2015 - 2023 Female Daily Network ∙ All the rights reserved.
                </div>
            </footer>
            <div className={style.AdsContainer}>
                <Ads cssName="FooterAds">
                    Bottom Frame 970x250, 468x60, 320x50
                </Ads>
            </div >

        </div>
    </Fragment>
}

export default footer;