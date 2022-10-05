import React, {useState,useEffect} from "react";
import "./itemdetailcontainer.css";
import DetailedCard from "../DetailedCard/DetailedCard"
import { getItemById } from "../../stockAPI/stockAPI";
import {useParams } from "react-router-dom";

function ItemDetailContainer(props) {
    const [item,setItem] = useState([]);
    const itemId  = useParams().id;

    useEffect(() => {
        
        getItemById(itemId).then((data) => {
            setItem(data);
        });
    }, [itemId]);

    return (
        <div className="container">
            <DetailedCard
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        detail={item.detail}
                        stock={item.stock}
                        team={item.team}
                        category={item.category}
                    />
            <hr />
        </div>
    );
}

export default ItemDetailContainer;