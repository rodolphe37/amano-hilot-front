import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
const { axe, toHaveNoViolations } = require("jest-axe");

import Navigation from "../components/shared/Header";

afterEach(cleanup);
expect.extend(toHaveNoViolations)

test("Navigation should render", () => {
  const { getByText } = render(<Navigation />);

  expect(getByText("Accueil", "A propos", "blog", "contact", "activités", "developpeur", "thérapeute", "lapidaire", "les jeux amano-hilot")).toBeInTheDocument();
});

test("navigation should not have any accessibility violations", async () => {
  const { container } = render(<Navigation />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
