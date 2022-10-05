import { render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();
  });

  it("should be able to add a new item to the list", async () => {
    const { getByText, getByPlaceholderText, debug, findByText } = render(
      <App />
    );

    const inputElement = getByPlaceholderText("Novo Item");
    const addButton = getByText("Adicionar");

    await userEvent.type(inputElement, "Novo");
    await userEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });

  it("should be able to remove an item from the list", async () => {
    const { getByText, getByPlaceholderText, getAllByText } = render(<App />);

    const removeButtons = getAllByText("Remover");

    await userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return expect(getByText("Diego"));
    });
  });
});
