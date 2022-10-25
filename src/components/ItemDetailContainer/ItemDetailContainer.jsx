import React, {useState,useEffect} from "react";
import "./itemdetailcontainer.css";
import DetailedCard from "../CardDetail/CardDetail"
import { getItemById } from "../services/firebase";
import {useParams } from "react-router-dom";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import FirebaseApp from "../services/firebase";

function ItemDetailContainer(props) {
    const [item,setItem] = useState([]);
    const [fbMsg, setFbMsg] = useState(null);
    const itemId  = useParams().id;

    useEffect(() => {
        
        getItemById(itemId).then((data) => {
            setItem(data);
        })

        .catch((error) => {
            console.log("Error")
            setFbMsg(error.message);
        });

    }, [itemId]);

    return (
        <FlexWrapper>
        {fbMsg !== null ? (
            <h4 className="errorMsg">Error: {fbMsg}</h4>
          ) :
        (<div className="container">
            <DetailedCard
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        detail={item.detail}
                        stock={item.stock}
                        team={item.team}
                        category={item.category}
            />
        </div>)
    }
    </FlexWrapper>
    );
}

export default ItemDetailContainer;