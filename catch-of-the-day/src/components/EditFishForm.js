import React from 'react';

class EditFishForm extends React.Component {
    handleChange = e => {
        const updatedFish = {...this.props.fish };
        updatedFish[e.currentTarget.name] = e.currentTarget.value;
        this.props.updateFish(this.props.index, updatedFish);
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
            </div>
        );
    }

    componentDidMount() {
        // this.setState({ someKey: 'otherValue' });
    }
}

export default EditFishForm;
