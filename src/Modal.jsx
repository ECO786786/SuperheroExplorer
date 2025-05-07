const Modal = ({ onClose, hero }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        <p>{hero.biography.fullName}</p>
        <p>{hero.biography.placeOfBirth}</p>
        <p>{hero.biography.firstAppearance}</p>
      </div>
    </div>
  );
};

export default Modal;
