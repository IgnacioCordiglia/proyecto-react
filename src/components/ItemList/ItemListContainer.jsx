import React, {useState, useEffect} from "react";
import {getItems,getTeam,getCategory, getBestSellers} from "../../stockAPI/stockAPI";
import Card from "../Card/Card";
import "./ItemListContainer.css";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import {useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [itemsList, setItemsList] = useState([]);
    const categoryId = useParams().category;
    const teamId = useParams().team;

    useEffect(() => {
        getItems().then((data) => {
            setItemsList(data);
        });
    }, []);

    if(categoryId!== undefined) {
        getCategory(categoryId).then((data) => {
            setItemsList(data);
        });
    } 

    if(teamId!== undefined) {
        getTeam(teamId).then((data) => {
            setItemsList(data);
        });
    } 

    if(teamId=== undefined && categoryId=== undefined) {
        getBestSellers().then((data) => {
            setItemsList(data);
        });
    } 

    return (
    <div>
        <h2 className="title-sec">{props.title}</h2>

        <div className="ItemListContainer">
            <FlexWrapper>
            {itemsList.map((items) => {
                return (
                    <Card
                        id={items.id}
                        title={items.title}
                        img={items.img}
                        price={items.price}
                        detail={items.detail}
                        stock={items.stock}
                        team={items.team}
                        category={items.category}
                    />
                );
            })}
            </FlexWrapper>
        </div>
    </div>
    )
}

export default ItemListContainer;