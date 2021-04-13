// components/__tests__/Timer.snapshot.test.tsx
import * as React from "react";
import { Timer } from "../Timer";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Timer />).toJSON();
  expect(tree).toMatchSnapshot();
});
