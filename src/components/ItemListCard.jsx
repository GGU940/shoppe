import style from '../css/ItemListCard.module.css'
const itemListCard = () => {
    return (
        <div className={style.itemListCard}>
            <div className={style.imgCon}>
                <img src="./img/img_bg3.jpg" alt="" />
            </div>
            <p className={style.discount}>50%</p>
            <strong className={style.name} >Lira Earrings</strong>
            <span className={style.price}>$ 20,00</span>
        </div>
    )
}

export default itemListCard