import Card from "../Card/Card";
import "./ItemListContainer.css";

function ItemListContainer(props) {
    return (
    <div>
        <h2 class="title-sec">{props.title}</h2>

        <div class="ItemListContainer">
            <Card title="Remera Alfa Romeo" detail="Remera estampada Alfa Romeo 2022" price="3000" img="https://alltexsantafe.com.ar/wp-content/uploads/2022/03/2022-scaled.jpg" />
            <Card title="Remera Alpha Tauri" detail="Remera estampada Alpine 2022" price="3000" img="https://alltexsantafe.com.ar/wp-content/uploads/2021/10/REPLICA-1-scaled.jpg"/>
            <Card title="Remera Alpine" detail="Remera estampada Alpha Tauri 2022" price="3000" img="https://alltexsantafe.com.ar/wp-content/uploads/2022/03/azul-marino-scaled.jpg"/>
            <Card title="Remera Ferrari" detail="Remera estampada Alfa Romeo 2022" price="3000" img="https://alltexsantafe.com.ar/wp-content/uploads/2021/09/REMERA-FERRARI-3-scaled.jpg"/>

        </div>
    </div>
    )
}

export default ItemListContainer;