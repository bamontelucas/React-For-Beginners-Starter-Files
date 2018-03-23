import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    static propTypes = {
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        fishes: PropTypes.object        
    }
    render() {
        const fishesIds = Object.keys(this.props.fishes);
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {fishesIds.map(fishId => (
                    <EditFishForm 
                        key={fishId}
                        index={fishId}
                        fish={this.props.fishes[fishId]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;