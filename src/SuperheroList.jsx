import SuperHeroCard from "./SuperHeroCard";
import { memo, useState } from "react";

const SuperheroList = ({ superHeros, handleHeroId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 50;

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const thisPageItems = superHeros.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(superHeros.length / itemPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className="grid-container">
        {superHeros.length === 0 ? (
          <p>No superheroes found. Try another search!</p>
        ) : (
          thisPageItems.map((hero) => (
            <SuperHeroCard
              key={hero.id}
              hero={hero}
              handleHeroId={handleHeroId}
            />
          ))
        )}
      </div>
      <nav style={{ padding: "0 1rem" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              fontWeight: currentPage === page ? "bold" : "normal",
              margin: "0.3rem 0.2rem",
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </nav>
    </>
  );
};

export default memo(SuperheroList);
