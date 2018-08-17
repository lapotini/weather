import React, {Component} from 'react';

class Input extends Component {

    onChange(e) {
        this.props.onChange({type: e.target.type, value: e.target.value});
    }

    render() {
        return (
            <input
                type={this.props.type}
                placeholder='City'
                value={this.props.search}
                required={true}
                onChange={(e) => this.onChange(e)}
            />
        );
    }
}

export default Input;