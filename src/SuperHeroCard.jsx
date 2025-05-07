import { useState } from "react";
import Modal from "./Modal";

const SuperHeroCard = ({ hero, handleHeroId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    handleHeroId(hero.id);
    setShowModal(true);
  };

  return (
    <div className="card">
      <h2>{hero.name}</h2>
      <img src={hero.images.sm} alt={hero.name} />
      <button onClick={handleClick}>More information</button>

      {showModal && <Modal hero={hero} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SuperHeroCard;
