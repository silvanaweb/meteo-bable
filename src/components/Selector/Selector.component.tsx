import React, { useEffect } from "react";
import Select from "react-select";

export type SelectorOption = { value: string; label: string };

export type SelectorProps = {
  defaultOption?: SelectorOption;
  loading?: boolean;
  onChange: (option: any) => void;
  options: Array<SelectorOption>;
};
const Selector: React.FC<SelectorProps> = ({
  defaultOption = null,
  loading = false,
  onChange,
  options
}) => {
  const [selectedOption, setSelectedOption] = React.useState<SelectorOption>();

  useEffect(() => {
    if (defaultOption) {
      const aOption = options.find(x => x.value === defaultOption.value);
      if (aOption) {
        setSelectedOption(aOption);
        onChange({ ...aOption });
      }
    }
  }, [options]);

  const handleSelectedOption = (sOption: any) => {
    setSelectedOption(sOption);
    onChange({ ...sOption });
  };
  return (
    <div className="content-container">
      <h3 className="text-align--center">Select a city</h3>
      <Select
        isDisabled={loading}
        onChange={handleSelectedOption}
        options={options}
        placeholder="Select a location"
        value={selectedOption}
      />
    </div>
  );
};

export { Selector };
