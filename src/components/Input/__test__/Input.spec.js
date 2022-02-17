import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Input from "..";

test("should render Input component", () => {
  const label = "simular";
  const name = 'name'
  render(<Input label={label} name={name} />);

  expect(screen.getByText(label)).toBeInTheDocument();

  
  const input = screen.getByTestId(name);
  userEvent.type(input, '5400.00');
});
