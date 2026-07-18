import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/data/types/screen";

const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],
};

const hompePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setnewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    }
});

export const { setPopularDishes, setnewDishes, setTopUsers } =
 hompePageSlice.actions;

const HomePageReducer = hompePageSlice.reducer;
export default HomePageReducer;