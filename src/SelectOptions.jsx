const SelectOptions = ({
  handlePublisherChange,
  selectedPublisher,
  publishers,
}) => {
  return (
    <div>
      <select onChange={handlePublisherChange} value={selectedPublisher}>
        <option value="">All Publishers</option>
        {publishers.map((pub) => (
          <option key={pub} value={pub}>
            {pub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
