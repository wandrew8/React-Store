import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    }
    addFish = fish => {
        console.log('Fish was added')
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        // This updates the fishes objects within the state object
        this.setState({ fishes })
        console.log(this.state.fishes)

    }
    loadSampleFishes = () => {
        console.log("Samples loaded");
        this.setState({ fishes: sampleFishes})
    }
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

 
export default App;