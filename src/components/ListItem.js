import React from 'react';
import Card from './Card';

function DoneImg(props){
  if(props.done){
    return 'Done'
  } else {
    return 'Not done'
  }
}


function ListItem(props){

  return (
      <li>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div>
            <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
            <button onClick={() => {props.onItemDeleted(props.item)}}>x</button>
          </div>
        </Card>
      </li>)}

export default ListItem