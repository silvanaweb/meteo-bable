import React from "react";
import Select from "react-select";

const options = [
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "sydney", label: "Sydney" }
];

type Props = {
  onChange: (location: any) => void;
};
const LocationSelector: React.FC<Props> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = React.useState();

  const handleSelectedOption = (selection: any) => {
    setSelectedOption(selection);
    onChange(selection);
  };
  return (
    <div className="content-container">
      <h3 className="text-align--center">Select a city</h3>
      <Select
        onChange={handleSelectedOption}
        options={options}
        placeholder="Select a location"
        value={selectedOption}
      />
    </div>
  );
};

export { LocationSelector };
