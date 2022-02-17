import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import ButtonBar from "..";

test("should render ButtonBar compoenet", () => {
  const title = "simular";
  render(<ButtonBar title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});