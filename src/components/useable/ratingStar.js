import style from "./RatingStar.module.css"


const StartRating = ({value})=>{
    let stars = [];

    for(var i = 0; i < 5; i++) {
        let klass = style['star'];
        
        if (value >= i && value != null) {
          klass += style['is-selected'];
        }
        // console.log(klass)
        stars.push(
        <span
            className={klass}>
            ★
        </span>
        );
      }
    return (
        <label className={style.StarRating}>
            {stars}
        </label>
    )
}

export default StartRating