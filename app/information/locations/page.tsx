import { Card } from "@/components";
import { getLocations } from "./services";
import { Routes } from "@/models";
import { Navigator } from "@/components";

async function fetchLocations() {
  return await getLocations();
}

const Locations = async () => {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((character) => (
        <Card data={character} key={character.id} />
      ))}
    </>
  );
};

export default Locations;
