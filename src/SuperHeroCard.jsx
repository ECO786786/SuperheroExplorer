import { useState, useCallback, memo } from "react";
import Modal from "./Modal";

// TODO: Consider using React.memo to prevent unnecessary re-renders when parent re-renders
const SuperHeroCard = ({ hero, handleHeroId }) => {
  const [showModal, setShowModal] = useState(false);

  // TODO: Use useCallback to memoize this function
  const handleClick = useCallback(() => {
    handleHeroId(hero.id);
    setShowModal(true);
  }, [hero.id]);

  // TODO: Add error handling for missing image data
  return (
    <div className="card">
      {/* TODO: the white text is barely visible on the gray background */}
      <h2>{hero.name}</h2>
      <img
        src={hero.images.sm}
        alt={hero.name}
        loading="lazy"
        // TODO: Add loading="lazy" for better performance with many images
        // TODO: Add fallback image in case of loading error
        onError={(e) => console.error("Image failed to load", e)}
      />
      <button onClick={handleClick}>More information</button>

      {showModal && <Modal hero={hero} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SuperHeroCard;
