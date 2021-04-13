// components/__tests__/Counter.snapshot.test.tsx
import * as React from "react";
import Counter from "../Counter";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});
