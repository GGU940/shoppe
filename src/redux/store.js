import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from "./itemListStore"; // itemStore에서 만든 리듀서를 임포트
// 리듀서(Reducer)는 Redux에서 상태(state) 변화를 처리하는 함수입니다.
// 리듀서는 현재 상태와 액션을 인수로 받아서 새로운 상태를 반환하는 순수 함수입니다.

// Redux 스토어를 설정
export const store = configureStore({
  reducer: {
    itemList: itemListReducer,
  },
});

export default store;
