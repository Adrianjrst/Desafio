import React, { useState, Provider } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Todolist from "../TodoList/Todolist";
import TodoForm from "../TodoForm/TodoForm";
import axios from "axios";

const Layout = () => {
  const [todos, setTodos] = useState();

  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) todo.completed = !todo.completed;
        console.log(todo.completed);
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  //Añadir a todo
  const addTodo = (text) => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  //Navegar
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }}>Desafio Gett</Typography>
          <Button variant="text" color="inherit" onClick={() => navigate("/")}>
            Cerrar sesión
          </Button>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <Todolist todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default Layout;
