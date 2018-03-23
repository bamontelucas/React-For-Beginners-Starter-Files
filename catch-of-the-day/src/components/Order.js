import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
    static propTypes = {
        order: PropTypes.object,
        fishes: PropTypes.object,
        removeFromOrder: PropTypes.func
    }

    renderItem = id => {
        const { order, fishes } = this.props;
        const fish = fishes[id];
        const count = order[id];

        const transitionOptions = {
            classNames: "order",
            key: id,
            timeout: { enter: 500, exit: 500 }
        };

        if (!fish) {
            return null;
        }

        if (fish.status !== 'available') {
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={id}>
                        Sorry, {fish ? fish.name : 'fish'} is no longer available
                        <button onClick={() => this.props.removeFromOrder(id)}>&times;</button>
                    </li>
                </CSSTransition>
            )
        }

        return (
            <CSSTransition {...transitionOptions}>
                <li key={id}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name}
                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(id)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        )
    }

    render() {
        const { order, fishes } = this.props;
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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderItem)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;