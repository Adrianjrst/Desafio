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
import { sliderClasses } from "@mui/material";

const Layout = () => {
  const [todos, setTodos] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        console.log(response);
        setTodos(response.data.slice(0, 10));
      });
  }, []);

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
      id: todos.length == 0 ? 0 : todos[todos.length - 1].id + 1,
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
