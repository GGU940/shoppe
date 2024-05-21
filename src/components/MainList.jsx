import style from '../css/MainList.module.css'
import { Link } from 'react-router-dom';

import ItemListCard from './ItemListCard';


const MainList = () => {
    return (
        <section className={style.mainList}>
            <h3>Shop The Latest</h3>
            <Link to="/ShopAll">View All</Link>
            <ul className={style.itemListCon}>
                <li>
                    <ItemListCard />
                </li>
                <li>
                    <ItemListCard />
                </li>
                <li>
                    <ItemListCard />
                </li>
                <li>
                    <ItemListCard />
                </li>
                <li>
                    <ItemListCard />
                </li>
            </ul>
        </section>
    )
}

export default MainList