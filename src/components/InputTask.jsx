import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
];
export default function InputTask() {
  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
            iconPosition="left"
            name="taskName"
          />
        </Input>
        <Select
          compact
          options={options}
          className="select-form-task"
          name="categoryTask"
          placeholder="Categoria"
        />
        <Button type="submit" color="violet">
          Añadir tarea
        </Button>
      </Grid>
    </>
  );
}
