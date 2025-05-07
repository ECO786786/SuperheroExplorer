import SuperHeroCard from "./SuperHeroCard";

const SuperheroList = ({ superHeros, handleHeroId, heroInformation }) => {
  return (
    <div className="grid-container">
      {superHeros.map((hero) => (
        <SuperHeroCard
          hero={hero}
          key={hero.id}
          handleHeroId={handleHeroId}
          heroInformation={heroInformation}
        />
      ))}
    </div>
  );
};

export default SuperheroList;
