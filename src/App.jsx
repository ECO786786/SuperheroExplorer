import { useEffect, useState } from "react";
import "./App.css";
import SuperheroList from "./SuperheroList";
import SearchBar from "./SearchBar";
import SelectOptions from "./SelectOptions";

// TODO: ui is not responsive (no mobile view)

function App() {
  // TODO: this app usually dont contain too much logic
  // everything should happen inside other components (container & presentational components)
  const [superHeros, setSuperHeros] = useState([]);
  const [input, setInput] = useState("");
  const [publishers, setPublishers] = useState([]);
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [heroId, setHeroId] = useState("");
  const [heroInformation, setHeroInformation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllSuperHeros = async () => {
      const url = "https://akabab.github.io/superhero-api/api/all.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // TODO: a generic error message would be more helpful to the user
          throw new Error(`Response status: ${response.status}`);
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

    // TODO: this should be after the loading has been done, not randomly after 2 seconds
    // however, the simulation of loading is a great idea
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getAllSuperHeros();
  }, []);

  useEffect(() => {
    const getSuperHeroInformation = async () => {
      // TODO: the url should be store in a separate config file, instead of hardcoding here
      const url = `https://akabab.github.io/superhero-api/api/id/${heroId}.json`;
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
    const findHero = hero.name.toLowerCase().includes(input.toLowerCase());
    // TODO: this logic looks weird to me, fallback value is true
    const publisherMatch = selectedPublisher
      ? hero.biography.publisher === selectedPublisher
      : false;

    return findHero && publisherMatch;
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
