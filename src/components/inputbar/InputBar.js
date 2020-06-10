// dependencies
import React from 'react';
// local files

const InputBar = (props) => {
  return (
    <div className="InputBar ui input focus">
      <input type="text" onChange={props.onInputChange} value={props.value} placeholder="Add todo..." />
    </div>
  );
};

export default InputBar;