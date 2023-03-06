import './ContentItem.css';
import CostItem from "./CostItem";
import Card from "./Card";

function ContentItem(props){
    return(
        <Card class="contentItem">
            <CostItem 
            date={props.costs[0].date} 
            description={props.costs[0].description}
            price={props.costs[0].price}
            ></CostItem>
            <CostItem
            date={props.costs[1].date} 
            description={props.costs[1].description}
            price={props.costs[1].price}
            ></CostItem>
            <CostItem
            date={props.costs[2].date} 
            description={props.costs[2].description}
            price={props.costs[2].price}
            ></CostItem>
            <CostItem
            date={props.costs[0].date} 
            description={props.costs[0].description}
            price={props.costs[0].price}
            ></CostItem>
            <CostItem
            date={props.costs[0].date} 
            description={props.costs[0].description}
            price={props.costs[0].price}
            ></CostItem>
        </Card>
    )
}

export default ContentItem;