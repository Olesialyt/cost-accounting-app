import './CostItem.css';
import Card from "./Card";

function CostItem(props) {
    const month = props.date.toLocaleString('en-GB', {
        month: "long"});
    const year  = props.date.getFullYear();
    const day = props.date.toLocaleString('en-GB', {
        day: "2-digit"});
    return (
        <Card className='cost-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <div className='cost-item__price'>${props.price}</div>
            </div>
        </Card>
    )
}
export default CostItem;