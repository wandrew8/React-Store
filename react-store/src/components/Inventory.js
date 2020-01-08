import React from 'react';
import AddFishForm from '../components/AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    render() {
        return(
           <div className="inventory">
           <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes} >Load Sample Fish</button>
           {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} />)}
           </div>
        )
    }
}

export default Inventory;