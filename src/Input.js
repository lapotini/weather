import React from 'react';

const Input = (props) => {
  return (
    <input
      name={props.type}
      placeholder='City'
      value={props.search}
      required={true}
      onChange={props.onChange}
    />
  );
};

export default Input;
