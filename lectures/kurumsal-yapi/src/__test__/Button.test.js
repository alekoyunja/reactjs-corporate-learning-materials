import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button";

// eslint-disable-next-line no-undef
it("Button render oluyor.", () => {
  renderer.create(<Button />).toJSON();
});