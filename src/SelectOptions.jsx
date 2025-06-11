import { memo } from "react";

const SelectOptions = ({
  handlePublisherChange,
  selectedPublisher,
  publishers,
}) => {
  const sortedPublishers = [...publishers].sort();

  return (
    <div className="select-options-container">
      <label htmlFor="publisher-select">Filter by Publisher</label>
      <select
        id="publisher-select"
        onChange={handlePublisherChange}
        value={selectedPublisher}
        className="publisher-select"
      >
        <option value="">All Publishers</option>
        {sortedPublishers.map((pub) => (
          <option key={pub} value={pub}>
            {pub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SelectOptions);
