import { memo } from "react";

// TODO: Consider adding some styling for this component
const SelectOptions = ({
  handlePublisherChange,
  selectedPublisher,
  publishers,
}) => {
  return (
    <div>
      <select
        onChange={handlePublisherChange}
        value={selectedPublisher}
      >
        <option value="">All Publishers</option>
        {/* TODO: Consider alphabetically sorting publishers for better UX */}
        {publishers.map((pub) => (
          <option key={pub} value={pub}>
            {pub}
          </option>
        ))}
      </select>
    </div>
  );
};

// TODO: Use React.memo since this component rarely changes
export default SelectOptions;
