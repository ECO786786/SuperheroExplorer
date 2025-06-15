import { useEffect } from "react";

const Modal = ({ onClose, hero }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const bio = hero && hero.biography ? hero.biography : {};
  const fullName = bio.fullName || "Unknown";
  const placeOfBirth = bio.placeOfBirth || "Unknown";
  const firstAppearance = bio.firstAppearance || "Unknown";

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close modal">
          Close
        </button>
        <div className="modal-content">
          <p>
            <strong>Full Name:</strong> {fullName}
          </p>
          <p>
            <strong>Place of Birth:</strong> {placeOfBirth}
          </p>
          <p>
            <strong>First Appearance:</strong> {firstAppearance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
