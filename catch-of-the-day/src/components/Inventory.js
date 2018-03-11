import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
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
                    />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;