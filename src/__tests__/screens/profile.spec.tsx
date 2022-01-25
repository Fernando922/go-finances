import React from "react";

import { render } from "@testing-library/react-native";

import Profile from "../../screens/Profile";

describe("Profile", () => {
  it("Shold have placeholder correctly user name input", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });

  it("Should be loaded user data", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Fernando");
    expect(inputSurname.props.value).toEqual("de Paula");
  });

  it("Should exist title correctly", () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});
