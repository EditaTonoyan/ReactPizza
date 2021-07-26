import {  useSelector } from 'react-redux';

const OrderedList = (props) => {
    const state = useSelector(state => state);
    
    console.log(state);

    return(
        <div>
            <h1>Ordered pizzas list</h1>
        </div>
    )
}

export default OrderedList