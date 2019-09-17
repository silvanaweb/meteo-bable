// This function allows to store the selection in a Selector component and use it when the app is reloaded

import React from "react";
import { SelectorProps, SelectorOption } from "../Selector/Selector.component";

type State = {
  defaultOption: SelectorOption | null;
};
function withRememberOption(
  WrappedComponent: React.ComponentType<SelectorProps>
) {
  // And return a new anonymous component
  return class extends React.Component<SelectorProps, State> {
    constructor(props: SelectorProps) {
      super(props);
      this.state = {
        defaultOption: null
      };
    }
    componentDidMount() {
      const savedOption = localStorage.getItem("defaultOption");
      const defaultOption = savedOption && JSON.parse(savedOption);
      this.setState({ defaultOption });
    }
    onChange(option: any) {
      localStorage.setItem("defaultOption", JSON.stringify(option));
      this.props.onChange(option);
    }
    render() {
      const newProps = {
        ...this.props,
        defaultOption: this.state.defaultOption,
        onChange: this.onChange.bind(this)
      };

      return <WrappedComponent {...(newProps as SelectorProps)} />;
    }
  };
}

export { withRememberOption };
