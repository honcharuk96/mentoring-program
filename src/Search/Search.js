import { PureComponent } from "react";
import Button from "../Button/ButtonComponent";

class Search extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }
    setText = (text) => {
        this.setState({ searchText: text });
    }

    searchWithText = () => {
        return true
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.searchText} onInput={event => this.setText(event.target.value)} />
                <Button text="Search..." onClick={this.searchWithText} />
            </>
        )
    }
}
export default Search;
