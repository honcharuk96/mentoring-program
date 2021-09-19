import { Component } from "react";
import Button from "../Button/ButtonComponent";

class Toogle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    IncrementItem = () => {
        this.setState({ count: this.state.count + 1 });
    }

    DecreaseItem = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div> 
                <div>{this.state.count}</div>
                <Button onClick={this.IncrementItem} text="Increment Count"/>
                <Button onClick={this.DecreaseItem} text="Decrease Count"/>
            </div>
        )
    }
}
export default Toogle;