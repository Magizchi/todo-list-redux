import React from 'react';
import constant from '../constants/constant';
import {connect} from 'react-redux';

const Form = (props) => {
    return (
        <div className='form'>
            <h2 className='title'>Todo List</h2>

            {props.list.map ( (list,index) => {
                return (
                <div key={index} style ={{
                    display:'flex'
                }}>
                <i onClick= {() => props.deleteList(index)} className="fas fa-minus-square fa-2x delete"></i>
                <i onClick= {() => props.checkedList(index)} className="fas fa-check-square fa-2x check" ></i>
                <span className='text'><p className = {"item"+index} >{list}</p></span>
                </div>)
            })}
            <div className='form2'>
            <form onSubmit={props.addList}>
                <input type='text' className='input' value={props.inputText} onChange={props.onChange}></input>
                <button type='button' className='button' onClick={props.addList}>Ajouter</button>
            </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        inputText: state.inputText,
        list: state.list,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange : (evt) => {
            const action = { type:constant.TEXT, text: evt.target.value }
            dispatch(action)
        },
        addList : (evt) => {
            evt.preventDefault();
            const action = { type: constant.ADD_LIST };
            dispatch(action)
        },
        deleteList : (index) => {
            const action = { type : constant.DELETE_LIST, index:index };
            dispatch(action)
        },
        checkedList : (index) => {
            const action = { type:constant.CHECKED, index:index }
            dispatch(action)
        }
        
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(Form)