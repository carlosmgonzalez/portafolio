import { Language } from "@/interfaces/languages";
import { ReactBadge } from "../badges/React.badge";
import { Card } from "./Card";

export const TodoApp = ({ info }: { info: Language }) => {
  const data = info.proyectos.todoapp;

  return (
    <Card
      title={data.titulo}
      page="https://flourishing-conkies-aa52b7.netlify.app/"
      image="/images/todo-app.png"
      url="https://github.com/carlosmgonzalez/todo-app-react"
      text={data.descripcion}
    >
      <ReactBadge />
    </Card>
  );
};
