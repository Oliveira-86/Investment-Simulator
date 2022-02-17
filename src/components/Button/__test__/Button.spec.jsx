import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Button from "..";

test("should render Button compoenet", () => {
  const label = "simular";
  render(<Button label={label} />);

  expect(screen.getByText(label)).toBeInTheDocument();

  
  const submitButton = screen.getByRole('button', { name: /simular/i });

  userEvent.click(submitButton);

  
});
