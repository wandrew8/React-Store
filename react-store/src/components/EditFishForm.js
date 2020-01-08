import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class EditFishForm extends Component {
    handleChange = event => {
        const updatedFish = { 
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    }
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={formatPrice(this.props.fish.price)} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option>Fresh</option>
                    <option>Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm