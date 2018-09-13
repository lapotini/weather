import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchData(this.state.search);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <Input type="search" onChange={this.onChange} value={this.state.search}/>
        <Button/>
      </form>
    );
  }
}

export default Form;
