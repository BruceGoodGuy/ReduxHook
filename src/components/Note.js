import React, {Fragment} from 'react';
import {connect} from 'react-redux';

function Note(props) {
    var {dispatch} = props;
    const removeNote = () => {
        var {index} = props;
        dispatch({type: 'REMOVE_ITEM', index: index});
    }
  return (
      <Fragment>
        <p>Title: {props.lesson}</p>
        <p><button className="btn btn-delete" onClick={removeNote}>Delete</button></p>
      </Fragment>
  );
}

export default connect()(Note);