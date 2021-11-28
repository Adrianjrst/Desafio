import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@mui/icons-material";

const Todo = ({ title, checkTodo, id, completed, deleteTodo }) => {
  const markComplete = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = completed
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 30, background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2" style={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check style={{ color: "green" }} />
              </IconButton>
              {title}
              <IconButton style={{ float: "right" }} onClick={delTodo}>
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
