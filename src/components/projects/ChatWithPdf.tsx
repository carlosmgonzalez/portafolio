import { Language } from "@/interfaces/languages";
import { NextBadge } from "../badges/Next.badge";
import { NodeBadge } from "../badges/Node.badge";
import { Card } from "./Card";

export const ChatWithPdf = ({ info }: { info: Language }) => {
  const data = info.proyectos.chatpdf;

  return (
    <Card
      title={data.titulo}
      image="/images/chat-with-pdf-2.png"
      url="https://github.com/carlosmgonzalez/chat-with-pdf-next"
      text={data.descripcion}
    >
      <NextBadge />
      <NodeBadge />
    </Card>
  );
};
