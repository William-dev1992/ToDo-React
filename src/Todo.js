import React, { useState, useEffect } from 'react';
import './Todo.css';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item'
import Modal from './components/Modal';

const SAVED_ITEMS = "savedItems"

function Todo(){

  const [showModal, setShowModal] = useState(false)
  const [itens, setItens] = useState([])

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS, ))
    if(savedItems){
      setItens(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(itens))
  }, [itens])

  function onAddItem(text){
    let it = new Item(text);
    setItens([...itens, it])
    onHideModal();
  }

  function onItemDeleted(item){
    let filteredItens = itens.filter(it=>it.id !== item.id);
    setItens(filteredItens)
    console.log("item deletado")
  }

  function onDone(item){
    let updatedItem = itens.map(it => {
      if(it.id === item.id){
        it.done = !it.done
      }
      return it;
    })
    setItens(updatedItem)
  }

  function onHideModal(e){
    setShowModal(false)
  }

  return (
    <div className="container">
      <header className="header" ><h1>ToDo</h1> <button onClick={() => {setShowModal(true)}} className="addButton" >+</button> </header>
      <List onDone={onDone} onItemDeleted={onItemDeleted} itens={itens}></List>
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>
  )
}


export default Todo