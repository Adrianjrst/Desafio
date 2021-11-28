import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidht="sm" style={{ marginTop: 100 }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Tengo que hacer esto"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 15 }}
            type="submit"
          >
            {" "}
            Añadir
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
