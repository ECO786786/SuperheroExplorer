import { useEffect, useState } from "react";
import "./App.css";
import SuperheroList from "./SuperheroList";
import SearchBar from "./SearchBar";
import SelectOptions from "./SelectOptions";
import { ALL_HEROS_URL, getHeroById } from "./config";

function App() {
  // TODO: this app usually dont contain too much logic
  // everything should happen inside other components (container & presentational components)
  const [superHeros, setSuperHeros] = useState([]);
  const [input, setInput] = useState("");
  const [publishers, setPublishers] = useState([]);
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [heroId, setHeroId] = useState("");
  const [heroInformation, setHeroInformation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllSuperHeros = async () => {
      const url = ALL_HEROS_URL;
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Cannot find Super Hero: ${response.status}`);
        }

        const data = await response.json();

        const uniquePublishers = [
          ...new Set(data.map((d) => d.biography.publisher).filter(Boolean)),
        ];
        setSuperHeros(data);
        setPublishers(uniquePublishers);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllSuperHeros();
  }, []);

  useEffect(() => {
    const getSuperHeroInformation = async () => {
      const url = getHeroById(heroId);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setHeroInformation(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (heroId) {
      getSuperHeroInformation();
    }
  }, [heroId]);

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setSelectedPublisher(event.target.value);
  };

  const handleHeroId = (id) => {
    setHeroId(id);
  };
  const filteredHeros = superHeros.filter((hero) => {
    const nameMatch = hero.name.toLowerCase().includes(input.toLowerCase());
    const publisherMatch =
      !selectedPublisher || hero.biography.publisher === selectedPublisher;

    return nameMatch && publisherMatch;
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar input={input} handleSearch={handleSearch} />
          <SelectOptions
            handlePublisherChange={handlePublisherChange}
            selectedPublisher={selectedPublisher}
            publishers={publishers}
          />
          <SuperheroList
            superHeros={filteredHeros}
            handleHeroId={handleHeroId}
            heroInformation={heroInformation}
          />
        </>
      )}
    </>
  );
}

export default App;
