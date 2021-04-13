// components/__tests__/Counter.snapshot.test.tsx
import * as React from "react";
import Geo from "../Geo";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Geo />).toJSON();
  expect(tree).toMatchSnapshot();
});
