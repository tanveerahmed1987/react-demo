// components/__tests__/Counter.snapshot.test.tsx
import * as React from "react";
import Menu from "../Counter";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});
