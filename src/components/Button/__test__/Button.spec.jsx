import { render, screen } from "@testing-library/react";

import Button from "..";

test("should render Button compoenet", () => {
  const label = "simular";
  render(<Button label={label} />);

  expect(screen.getByText(label)).toBeInTheDocument();
});
