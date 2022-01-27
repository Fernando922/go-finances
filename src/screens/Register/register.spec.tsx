import React from "react";
import { Register } from ".";
import { render, fireEvent } from "@testing-library/react-native";

import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Register Screen", () => {
  it("Should be open category modal when user click on the category button", () => {
    const { getByTestId } = render(<Register />, { wrapper: Providers });

    const categoryModal = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");

    fireEvent.press(buttonCategory);

    expect(categoryModal.props.visible).toBeTruthy();
  });
});