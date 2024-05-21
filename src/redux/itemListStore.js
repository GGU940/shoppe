import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// item을 가져오는 비동기 함수 정의
//    getItemList() : api 호출
export const getItemList = createAsyncThunk(
  "itemList/getItemList",
  async () => {
    let url = "http://localhost:3000/products";
    let response = await fetch(url); // JSON Server에서 데이터를 가져옴
    let data = await response.json(); // 응답을 JSON 형식으로 변환

    return data;
  }
);

// productsSlice를 생성
// 슬라이스(Slice)는 특정 상태와 그 상태에 대한 리듀서 및 액션을 관리하는 단위
const itemListSlice = createSlice({
  name: "itemList", // 슬라이스 이름
  initialState: {
    itemList: [], // 초기 상태의 제품 목록
    status: "idle", // 초기 상태
    error: null, // 초기 에러 상태
  },
  reducers: {
    // 동기 리듀서를 여기에 정의할 수 있습니다.
  },
  extraReducers: () => {
    // 비동기 액션을 처리하기 위해 extraReducers를 사용
  },
});

export default itemListSlice.reducer;
