import SuperHeroCard from "./SuperHeroCard";
import { memo, useCallback, useMemo } from "react";

// TODO: Consider using React.memo to prevent unnecessary re-renders
const SuperheroList = ({ superHeros, handleHeroId, heroInformation }) => {
  // TODO(Advanced): Consider adding pagination or virtualization for better performance with large lists

  return (
    <div className="grid-container">
      {/* TODO: Add handling for empty superHeros array with a user-friendly message */}
      {superHeros.length === 0 ? (
        <p>No superheroes found</p>
      ) : (
        superHeros.map((hero) => (
          <SuperHeroCard
            hero={hero}
            key={hero.id}
            handleHeroId={handleHeroId}
            // TODO: heroInformation is passed but not used in SuperHeroCard - remove unused prop
            heroInformation={heroInformation}
          />
        ))
      )}
    </div>
  );
};

export default SuperheroList;
