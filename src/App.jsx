import './App.css';
import Todo from './components/Todo.jsx'
import ListTitle from './components/ListTitle.jsx'
import Modal from './components/Modal.jsx'
import React, { useState, useEffect } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function hideModal() {
    setShowModal(false)
  }

  useEffect(() => {
    console.log('on mount')
  }, [])

  return (
    <div>
      <ListTitle />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
      <Todo onTodoDelete={onTodoDelete} title="Land $100k Job" />
      </div>
      {showModal && <Modal hideModal={hideModal} title="Are you sure you want to delete?"/>}
    </div>
  );
}

export default App;
