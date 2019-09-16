import React, { useEffect } from "react";
import Select from "react-select";
import { useWindowSize, WinSize } from "../../hooks/useWindowSize";
import { CheckButton } from "../CheckButton/CheckButton.component";
import { When } from "../Helpers/When";
import "./Selector.css";
export type SelectorOption = { value: string; label: string };

export type SelectorProps = {
  defaultOption?: SelectorOption;
  loading?: boolean;
  onChange: (option: any) => void;
  options: Array<SelectorOption>;
  title?: string;
};
const Selector: React.FC<SelectorProps> = ({
  defaultOption = null,
  loading = false,
  onChange,
  options,
  title
}) => {
  const [selectedOption, setSelectedOption] = React.useState<SelectorOption>();
  const winSize: WinSize = useWindowSize();

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
      <When condition={!!title}>
        <h3 className="text-align--center">{title}</h3>
      </When>

      {// according to the size of the screen, it is using a Select or Check Buttons
      winSize.width < 600 ? (
        <div>
          <Select
            isDisabled={loading}
            onChange={handleSelectedOption}
            options={options}
            placeholder="Select a location"
            value={selectedOption}
          />
        </div>
      ) : (
        <div className="LocationSelector__list">
          {options.map((option: SelectorOption, idx: number) => (
            <div key={`genre.value${idx}`} className="LocationSelector__item">
              <CheckButton
                checked={
                  !!selectedOption && selectedOption.value === option.value
                }
                disabled={loading}
                name={option.value}
                onChange={() => handleSelectedOption(option)}
                title={option.label}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Selector };
