import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

export const fishShape = PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
});

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    }

    addToOrder = () => {
        this.props.addToOrder(this.props.index);
    }

    render() {
        const { image, name, desc, status, price } = this.props.details;
        const isAvaiable = status === 'available';


        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={this.addToOrder} disabled={!isAvaiable}>
                    {isAvaiable ? 'Add To Order' : 'Sold Out!'}
                </button>
            </li>
        )
    }
}

export default Fish;