import { Card, Navigator } from "@/components";
import { getCharacters } from "./services";
import { Routes } from "@/models";

async function fetchCharacters() {
  return await getCharacters();
}

const Characters = async () => {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card data={character} key={character.id} />
      ))}
    </>
  );
};

export default Characters;
