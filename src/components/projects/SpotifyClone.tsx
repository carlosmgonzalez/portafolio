import { Language } from "@/interfaces/languages";
import { NodeBadge } from "../badges/Node.badge";
import { PostgresBadge } from "../badges/Postgres.badge";
import { PrismaBadge } from "../badges/Prisma.badge";
import { ReactBadge } from "../badges/React.badge";
import { Card } from "./Card";

export const SpotifyClone = ({ info }: { info: Language }) => {
  const data = info.proyectos.spotifyClone;

  return (
    <Card
      title={data.titulo}
      image="/images/spotify-clone-1.png"
      url="https://github.com/carlosmgonzalez/chat-with-pdf-next"
      text={data.descripcion}
    >
      <ReactBadge />
      <NodeBadge />
      <PostgresBadge />
      <PrismaBadge />
    </Card>
  );
};
