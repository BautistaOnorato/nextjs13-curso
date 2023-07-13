import { Navigator } from "@/components";
import { Routes } from "@/models";
import Image from "next/image";
import Mustachy from "../public/images/mustachy_.png";
import { mustachyBlur } from "./models";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <h1>Rick & Morty App</h1>
      <h2>What do you want to see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image
        alt="image"
        src={Mustachy}
        blurDataURL={mustachyBlur}
        placeholder="blur"
      />
    </div>
  );
}

export default App;
