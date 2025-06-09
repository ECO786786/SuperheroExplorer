import SuperHeroCard from "./SuperHeroCard";
import { memo } from "react";

const SuperheroList = ({ superHeros, handleHeroId }) => {
  return (
    <div className="grid-container">
      {superHeros.length === 0 ? (
        <p>No superheroes found. Try another search!</p>
      ) : (
        superHeros.map((hero) => (
          <SuperHeroCard
            key={hero.id}
            hero={hero}
            handleHeroId={handleHeroId}
          />
        ))
      )}
    </div>
  );
};

export default memo(SuperheroList);
