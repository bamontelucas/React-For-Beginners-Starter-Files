import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    renderItem = id => {
        const {order, fishes} = this.props;
        const fish = fishes[id];
        const count = order[id];

        if (!fish) {
            return null;
        }

        if (fish.status !== 'available') {
            return (
                <li key={id}>
                    Sorry, {fish? fish.name : 'fish'} is no longer available
                </li>
            )
        }

        return (
            <li key={id}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        )
    }

    render() {
        const {order, fishes} = this.props;
        const orderIds = Object.keys(order);
        const total = orderIds.reduce((total, id) => {
            const fish = fishes[id];
            const count = order[id];
            if (fish && fish.status === 'available') {
                return total + fish.price * count;
            }
            return total;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderItem)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;