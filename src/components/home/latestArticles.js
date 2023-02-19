const { Fragment } = require("react")
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from "./style/LatestArticles.module.css"
import Image from "next/image";

// redux
import { latestArticlesData } from 'store/globalStore'
import { useSelector } from 'react-redux'

const ArticleSection = ()=>{
    const articleData = useSelector(latestArticlesData)
    console.log(articleData)
    return (<div className={styles.ArticlesContainer}>
        {articleData.map((data,index)=>{
            return (<div className={styles.ArticlesContent} key={index}>
                <Image src={data.image} alt="artile-img" width="500" height="200"/>
                <div>
                    <h3 style={{margin: "1rem 0"}}>
                    {data.title}
                    </h3>
                    <span>{data.author}  
                        <span style={{color: "gray"}}> |  {data.published_at}</span>
                    </span>
                </div>
            </div>)
        })}
    </div>)
}


const LatestArticles = ()=>{
    return (
        <Fragment>
            <section className="sub-header-container">
            <h2>Latest Articles</h2>
                <div className="sub-head">
                    <span>So you can make better purchase decision</span>
                    <div className="see-more">
                        See more
                        <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: "1rem"}} size="xs"/>
                    </div>
                </div>
                <ArticleSection/>
            </section>
        </Fragment>
    )
}


export default LatestArticles