import { Language } from "@/interfaces/languages";
import { NextBadge } from "../badges/Next.badge";
import { NodeBadge } from "../badges/Node.badge";
import { Card } from "./Card";
import { PrismaBadge } from "../badges/Prisma.badge";
import { PostgresBadge } from "../badges/Postgres.badge";
import { TailwindBadge } from "../badges/Tailwind.badge";

export const NextAuth = ({ info }: { info: Language }) => {
  const data = info.proyectos.nextauth;

  return (
    <Card
      title={data.titulo}
      image="/images/next-auth.png"
      url="https://github.com/carlosmgonzalez/nextauth-tutorial"
      page="https://nextauth.carlosgonzalez.info"
      text={data.descripcion}
    >
      <NextBadge />
      <NodeBadge />
      <PrismaBadge />
      <PostgresBadge />
      <TailwindBadge />
    </Card>
  );
};
