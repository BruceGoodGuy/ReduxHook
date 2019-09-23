import React, {Fragment, useState} from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';
function List(props) {
    var {dispatch} = props;
    const toggle = () => {
        dispatch({type: "TOGGLE_IS_ADDING"})
    }
    return (
        <Fragment>
        {props.isAdding ? <NoteForm/> : <button onClick={toggle}>Show Add</button>}
            {props.mang.map((e, i) => <Note key={i} index={i} lesson={e} />)}
        </Fragment>
    );
}

export default connect(function(state){
    return {mang: state.mang, isAdding: state.isAdding}
})(List);
