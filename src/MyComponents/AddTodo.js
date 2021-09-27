import React, { useState } from "react";

export const AddTodo = (props) => {
  
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{
        props.addTodo(title, desc)
        setTitle("")
        setDesc("")
        } 
    }

    return (
    <div className="container">
        <h3 className="my-3">Add a todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange = {
                (e)=>{setTitle(e.target.value)}
            }
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="desc" class="form-label">
            Todo Description
          </label>
          <input
            type="text"
            onChange = {
                (e)=>{setDesc(e.target.value)}
            }
            value={desc}
            class="form-control"
            id="desc"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add this damnfuncking todo
        </button>
      </form>
    </div>
  );
};
