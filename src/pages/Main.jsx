import MainBanner from '../components/MainBanner'
import MainList from '../components/MainList'
// getItemList를 통해 itemList에 접근하고 싶다면, 
//  Redux의 useDispatch와 useSelector 훅을 사용하여 상태를 가져오고, 액션을 디스패치할 수 있습니다. 
import { useDispatch, useSelector } from 'react-redux'
import { getItemList } from '../redux/itemListStore'
import { useEffect } from 'react'


const Main = () => {
    // Redux 디스패치 훅
    const dispatch = useDispatch();

    // useSelector 훅을 사용하여 
    // Redux Store의 itemList 상태를 선택하고,
    // 이 상태에서 itemList, status,error를 가져옵
    let itemListState = useSelector(state => state.itemList);
    let { itemList, status, error } = itemListState;
    // console.log('%%%%%%%%', itemList,);

    // 컴포넌트가 마운트될 때 getItemList 액션 디스패치
    useEffect(() => {
        dispatch(getItemList())
    }, [dispatch]);

    // itemList 및 status를 콘솔에 출력합니다.
    useEffect(() => {
        console.log('itemList:', itemList);
        console.log('status:', status);
    }, [itemList, status]);
    // 왜안나오징

    return (
        <main className="mw">
            <h2 hidden>mainPage</h2>
            <MainBanner />
            <MainList />
        </main >
    )
}

export default Main