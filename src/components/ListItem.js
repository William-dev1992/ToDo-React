import React from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import {deleteItem, changeDone} from '../actions/listAction'

function DoneImg(props){
  if(props.done){
    return 'Done'
  } else {
    return 'Not done'
  }
}


function ListItem(props){
  const dispatch = useDispatch()
  return (
      <li>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div>
            <button onClick={() => {dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
            <button onClick={() => {dispatch(deleteItem(props.item.id))}}>x</button>
          </div>
        </Card>
      </li>)}

export default ListItem