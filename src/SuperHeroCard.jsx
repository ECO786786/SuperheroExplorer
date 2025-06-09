import { useState, useCallback, memo } from "react";
import Modal from "./Modal";

const fallbackImg = "https://via.placeholder.com/150?text=No+Image";

const SuperHeroCard = ({ hero, handleHeroId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => {
    handleHeroId(hero.id);
    setShowModal(true);
  }, [hero.id, handleHeroId]);

  const handleImageError = (e) => {
    e.target.src = fallbackImg;
    e.target.alt = "Image not available";
  };

  return (
    <div className="card">
      <h2>{hero.name}</h2>
      <img
        src={hero?.images?.sm || fallbackImg}
        alt={hero?.name || "Superhero"}
        loading="lazy"
        onError={handleImageError}
      />
      <button onClick={handleClick}>More information</button>

      {showModal && <Modal hero={hero} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default memo(SuperHeroCard);
