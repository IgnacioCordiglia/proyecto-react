import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./ItemListContainer.css";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import {useParams } from "react-router-dom";
import {getItems,getTeam,getCategory, getBestSellers} from"../services/firebase";

function ItemListContainer(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [itemsList, setItemsList] = useState([]);
    let categoryId = useParams().categoryId;
    const params = useParams();
    let teamId = useParams().teamId;

    useEffect(() => {
        setIsLoading(true);
        if (categoryId === undefined && teamId === undefined) {
            getBestSellers().then((data) => {
            setItemsList(data);
            setIsLoading(false);
          });
        } 

      }, [categoryId,teamId]);

        if(categoryId !== undefined){
            getCategory(categoryId).then((data) => {
            setItemsList(data);
            setIsLoading(false);
            });
        }
            
        if(teamId !== undefined) {
            getTeam(teamId).then((data) => {
            setItemsList(data);
            setIsLoading(false);
            });
        }

    return (
        <div>
            <h2 className="title-sec">{props.title}</h2>

            <div className="ItemListContainer">
                {isLoading ? <Loader /> :
                <FlexWrapper>
                    {itemsList.map((items) => {
                        return(
                            <Card
                                key={items.id}
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
                    })
                }
                </FlexWrapper>
                }
            </div>
        </div>
    );

}

export default ItemListContainer;