import React, {useState, useEffect} from "react";
import { getBestSellers} from "../../stockAPI/stockAPI";
import Card from "../Card/Card";
import "./ItemListContainer.css";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemListContainer(props) {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        getBestSellers().then((data) => {
            setItemsList(data);
        });
    }, []);

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