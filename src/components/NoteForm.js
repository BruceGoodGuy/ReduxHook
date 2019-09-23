import React, {Fragment, useState, useRef} from 'react';
import {connect} from 'react-redux';
function NoteForm(props) {
    var {dispatch} = props;
    const inputEl = useRef('');
    const addNote = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_ITEM", item: inputEl.current.value});
        dispatch({type: "TOGGLE_IS_ADDING"})
    }
  return (
      <Fragment>
            <form onSubmit={addNote}>
                <input type="text" placeholder="Enter your text" ref={inputEl}></input>
                <br/><br/>
                <button> Add </button>
            </form>
      </Fragment>
  );
}

export default connect()(NoteForm);
