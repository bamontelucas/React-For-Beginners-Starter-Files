import React from 'react';
import PropTypes from 'prop-types';
import {fishShape} from './Fish';

class EditFishForm extends React.Component {
    static propTypes = {
        updateFish: PropTypes.func,
        fish: fishShape,
        index: PropTypes.string
    }

    handleChange = e => {
        const updatedFish = {...this.props.fish };
        updatedFish[e.currentTarget.name] = e.currentTarget.value;
        this.props.updateFish(this.props.index, updatedFish);
    }

    deleteFish = () => {
        this.props.deleteFish(this.props.index);
    }

    render() {
        const { name, price, status, desc, image } = this.props.fish;
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={name} placeholder="Name" />
                <input type="text" name="price" onChange={this.handleChange} value={price} placeholder="Price" />
                <select name="status" onChange={this.handleChange} value={status}>
                    <option value="avaiable">Fresh!</option>
                    <option value="unavaiable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={desc} placeholder="Description" />
                <input type="text" name="image" onChange={this.handleChange} value={image} placeholder="Image" />
                <button onClick={this.deleteFish}>Remove Fish</button>
            </div>
        );
    }

    componentDidMount() {
        // this.setState({ someKey: 'otherValue' });
    }
}

export default EditFishForm;
