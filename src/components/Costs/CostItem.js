import './CostItem.css';
import Card from "../UI/Card";
import React, { useState } from "react";
import CostDate from './CostDate';

const CostItem = (props) => {

    return (
    <div>
            <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                        <h2>{props.description}</h2>
                        <div className='cost-item__price'>${props.price}</div>
                </div>
            </Card>
    </div>
    );
}
export default CostItem;