import { Route } from "@/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      {pathNames.map((pathName) => (
        <Link key={pathName.path} href={pathName.path} className="bg-fuchsia-500 hover:bg-sky-700">{pathName.name}</Link>
      ))}
    </div>
  );
};

export default Navigator;
