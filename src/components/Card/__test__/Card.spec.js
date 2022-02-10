import { render, screen } from "@testing-library/react";

import Card from "..";

test("should render Card compoenet", () => {
  const title = "simular";
  render(<Card title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});