import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track the index of the item being edited

  // Add a new todo
  const handleTodoList = () => {
    if (todo.trim() !== '') {
      setTodoList([...todoList, todo]);
      setTodo(''); // Clear input field
    }
  };

  // Delete a todo
  const handleDeleteTodo = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  // Start editing
  const startEdit = (index) => {
    setIsEditing(index);
    setTodo(todoList[index]); // Set the input field with the current value of the item
  };

  // Save the edited todo
  const handleSaveEdit = () => {
    if (todo.trim() !== '' && isEditing !== null) {
      const updatedTodoList = todoList.map((item, index) =>
        index === isEditing ? todo : item // Update only the edited item
      );
      setTodoList(updatedTodoList);
      setIsEditing(null); // Exit editing mode
      setTodo(''); // Clear input field
    }
  };

  return (
    <div>
      <div className="mx-4 justify-center">
        <input
          placeholder="Type your todo"
          type="text"
          value={todo}
          className="border-2 border-black rounded-md my-4 p-2"
          onChange={(e) => setTodo(e.target.value)}
        />
        {isEditing !== null ? (
          <button
            className="bg-green-500 text-white rounded-md p-2 mx-2"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-black text-white rounded-md p-2 mx-2"
            onClick={handleTodoList}
          >
            Add
          </button>
        )}
        <div>
          {todoList.map((item, index) => (
            <div className="flex my-3" key={index}>
              <div className="text-xl flex justify-between mx-3 items-center">
                <p className="mr-4">{index + 1}</p>
                <p className="flex-1">{item}</p>
                <button
                  className="bg-blue-400 text-white rounded-md p-2 mx-2"
                  onClick={() => startEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white rounded-md p-2 mx-2"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
