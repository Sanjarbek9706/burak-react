import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes} from "./selector";
import { Product } from "../../../lib/data/types/product";

/** REDUX SLICE SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
    const {setPopularDishes} = actionDispatch(useDispatch());
    const {popularDishes} = useSelector(popularDishesRetriever); //  Selector: Store => Data
    
    useEffect(() => {
     // Backend server data request => Data
    //  const result = [ 
    // {
    //     "_id": "6a37b07ec5473ff65dd6761f",
    //     "productStatus": "PROCESS",
    //     "productCollection": "DISH",
    //     "productName": "Kebab",
    //     "productPrice": 14,
    //     "productLeftCount": 75,
    //     "productSize": "NORMAL",
    //     "productVolume": 1,
    //     "productDesc": "This is delicious Kebab.",
    //     "productImages": [
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/44d2aa2d-4d36-4ef6-aff3-e6564cfd548d.jpeg",
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/ec168500-6499-48dc-a638-0ba54600147a.jpeg",
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/35532083-757f-438d-a574-025d3b2e8ab7.jpg"
    //     ],
    //     "productViews": 2,
    //     "createdAt": "2026-06-21T09:35:58.152Z",
    //     "updatedAt": "2026-07-10T06:51:37.376Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "6a37a654c5473ff65dd6760d",
    //     "productStatus": "PROCESS",
    //     "productCollection": "DISH",
    //     "productName": "Steak",
    //     "productPrice": 15,
    //     "productLeftCount": 100,
    //     "productSize": "NORMAL",
    //     "productVolume": 1,
    //     "productDesc": "This is the most delicions Steak",
    //     "productImages": [
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/1ca64a29-d344-455c-9f54-26f8e0fcd2ea.jpeg",
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/dd69a1a6-773a-4dc1-9c4b-cf7e119c7c8f.jpeg",
    //         "/Users/sanjarbekmatmuratov/Desktop/BURAK/uploads/products/b8ca33e0-4316-4b32-b887-f779647e713c.jpeg"
    //     ],
    //     "productViews": 10,
    //     "createdAt": "2026-06-21T08:52:36.343Z",
    //     "updatedAt": "2026-07-12T13:38:42.254Z",
    //     "__v": 0
    // }
    //  ];
     // Slice: Data => Store 
     // @ts-ignore
    //  setPopularDishes(result);
    }, []);


    // console.log("popelarDishes:", popularDishes);

    return <div className={"homepage"}>
        <Statistics/>
        <PopularDishes/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>
        </div>;
}