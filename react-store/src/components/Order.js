import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const transitionOptions = {
            classNames: 'order',
            key,
            timeout: { enter: 500, exit: 500 }
        }
        const isAvailable = fish && fish.status === 'available';
        if (!fish) return null;

        if(!isAvailable) {
           return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    Sorry, {fish ? fish.name : 'fish'} is no longer available
                </li> 
            </CSSTransition>
           )
        } else {

        return (
        <CSSTransition {...transitionOptions}>
            <li key={key}>
              <span>
                <TransitionGroup className="count" component="span">
                    <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                    <span>{count}</span> 
                    </CSSTransition>
                </TransitionGroup>
                {count>1? "lbs": "lb"} {fish.name} {formatPrice(count * fish.price)}
              </span>
                <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </li>
        </CSSTransition>
        )
        }
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
            }, 0);
        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;