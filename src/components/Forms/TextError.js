import React from 'react';

function TextError(props) {
  return (
    <small id="nameHelp" className="form-text text-danger">{props.children}</small>
  );
}

export default TextError;
