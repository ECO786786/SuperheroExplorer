import { useEffect } from "react";

const Modal = ({ onClose, hero }) => {
  useEffect(() => {
    // TODO: UX - Prevent body scrolling when modal is open

    return () => {
      // TODO: UX - Cleanup function to restore body scrolling
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        {/* TODO: Add proper labels for this data */}
        {/* TODO: Add null checks for hero biography properties */}
        <p>{hero.biography.fullName || "Unknown"}</p>
        <p>{hero.biography.placeOfBirth || "Unknown"}</p>
        <p>{hero.biography.firstAppearance || "Unknown"}</p>
      </div>
    </div>
  );
};

export default Modal;
