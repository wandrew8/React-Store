import React from 'react';
import AddFishForm from '../components/AddFishForm';
import EditFishForm from './EditFishForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
    static propTypes = {
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        deleteFish: PropTypes.func,
        fishes: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
    }
    render() {
        return(
           <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} deleteFish={this.props.deleteFish} fish={this.props.fishes[key]} updateFish={this.props.updateFish} />)}
                <button onClick={this.props.loadSampleFishes} >Load Sample Fish</button>
           </div>
        )
    }
}

export default Inventory;