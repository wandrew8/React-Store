import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    }

    static propTypes = {
        match: PropTypes.object,
    }

    componentDidMount() {
        //This reinstates the local storage
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }
    
    addFish = fish => {
        console.log('Fish was added')
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        // This updates the fishes objects within the state object
        this.setState({ fishes })
        console.log(this.state.fishes)

    }
    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes })
    }
    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes })
    }
    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key]
        this.setState({ order});
        console.log("This was removed to your order")
    }
    loadSampleFishes = () => {
        console.log("Samples loaded");
        this.setState({ fishes: sampleFishes})
    }
    addToOrder = key => {
        // Take a copy of state
        const order = {...this.state.order};
        // Add or update to the order
        order[key] = order[key] + 1 || 1;
        // call set State to update out state objects
        this.setState({ order});
        console.log("This was added to your order")
    }
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key}/>)}
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes}
                    removeFromOrder={this.removeFromOrder}
                    order={this.state.order} />
                <Inventory 
                    storeId={this.props.match.params.storeId}
                    deleteFish={this.deleteFish}
                    updateFish={this.updateFish}
                    fishes={this.state.fishes}
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    />
            </div>
        )
    }
}

 
export default App;