import React from "react";
import {shallow} from "enzyme";
// Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  it("matches snapshot", () => {
    expect(getComponent()).toMatchSnapshot();
  });

  const getComponent = props => {
    const parsedProps = {
      ...props,
    };

    return shallow(<App {...parsedProps} />);
  };
});
