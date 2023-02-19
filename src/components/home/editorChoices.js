
import Image from "next/image";
import { Fragment } from "react";
import style from "./style/EditorChoices.module.css"
import {assets} from "/src/assets"

// redux
import { useSelector } from "react-redux";
import {editorsData} from "store/globalStore";

// components
import StartRating from "components/useable/ratingStar";

const EditorSection = ()=>{
    const editorData = useSelector(editorsData)
    return (
        <section className={style.EditorContainer}>
            {editorData.map((data,index)=> {
                return <div className={style.EditorBoxes} key={index}>
                    <div className={style.ImagesContainer}>
                        <Image src={assets.cat} alt="editor picture"/>
                        <div className={style.TextAuthor}>
                            <h4>{data.editor}</h4>
                            <h6>{data.role}</h6>
                        </div>
                    </div>
                    <div className={style.ProductContainer}>
                        <Image src={data.product.image} alt="image product" width="144" height="144"/>
                        <div className={style.RateProduct}>
                            <span>
                                <strong>
                                {data.product.rating}
                                </strong>
                            </span>
                            <StartRating value={3}/>
                            <span>(8)</span>
                        </div>
                        <h4>
                            {data.product.name}
                        </h4>
                        <span>{data.product.description}</span>
                    </div>
                    </div>
                
                })}
        </section>
    )
}


const EditorChoices = ()=>{

    return <Fragment>
        <section className="sub-header-container">
                <h2>Editors choice</h2>
                <div className="sub-head">
                    <span>Curated with love</span>
                </div>
                <EditorSection/>
        </section>
    </Fragment>
}


export default EditorChoices;