import React from "react";
import Select from "react-select";

export type SelectorOption = { value: string; label: string };

type Props = {
  options: Array<SelectorOption>;
  onChange: (location: any) => void;
};
const Selector: React.FC<Props> = ({ onChange, options }) => {
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

export { Selector };
