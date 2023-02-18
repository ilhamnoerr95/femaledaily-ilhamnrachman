import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import style from './style/LatestVideo.module.css'

const LatestVideo = ()=>{
return (
   <Fragment>
        <section className={style.LatestVideoContainer}>
            <h2>Latest Video</h2>
            <div className="sub-head">
                <span>Watch and learn, ladies</span>
                <div className="see-more">
                    See more
                    <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: "1rem"}} size="xs"/>
                </div>
            </div>
            <div className={style.VideoContainer}>
                <iframe class={style.NewestVideo} height="500" src="https://www.youtube.com/embed/6LUdS0VFOJc" t
                itle="Tips Menghilangkan Jerawat ft. Harumi Sudradjat | Female Daily" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                <div className={style.OldVideo}>
                <iframe 
                    style={{width: "100%", height: "47%"}}
                    src="https://www.youtube.com/embed/Mv4vd__JIjY" 
                    title="5 Skincare Retinol Lokal yang Jago Bikin Kulit Glowing dan Anti Kusam! | FD Insight" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                <iframe 
                style={{width: "100%", height: "47%"}}
                src="https://www.youtube.com/embed/UWlqWm62VVY" 
                title="Masker yang Bisa Ngilangin Masalah Minyak di Muka! | FD Insight" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
   </Fragment>
)    
}

export default LatestVideo;