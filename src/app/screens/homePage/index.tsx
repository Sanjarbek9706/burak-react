import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setnewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/data/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/data/enums/product.enam";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/data/types/member";
import "../../../css/home.css"


/** REDUX SLICE SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
    setNewDishes: (data: Product[]) =>  dispatch(setnewDishes(data)), 
    setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
});

export default function HomePage() {
    const {setPopularDishes, setNewDishes, setTopUsers} = actionDispatch(useDispatch());

    /*************Backendan data olish****************/
    useEffect(() => {
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.DISH,
        }).then(data => {
            console.log("data passed here:",data);
            setPopularDishes(data);
        }).catch((err) => console.log(err));


        product.getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
            // productCollection: ProductCollection.DISH,
        }).then(data => {
            setNewDishes(data);
        }).catch((err) => console.log(err));

        const member = new MemberService();
        member
        .getTopUsers()
        .then(data => setTopUsers(data))
        .catch((err) => console.log(err));

    }, []);


    return <div className={"homepage"}>
        <Statistics/>
        <PopularDishes/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>
        </div>;
}