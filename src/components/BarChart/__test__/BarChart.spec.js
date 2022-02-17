import { render, screen } from "@testing-library/react";

import BarChart from "..";

describe("<BarChart />", () => {
  test("should render BarChart with correct value", () => {
    const dataChart = [1000, 1103.2737397822002, 1206.8855709147763];
    const dataChartBlack = [1000, 1003.273739782199, 1006.5581969365594];
    const labelChart = ["0", "1", "2"];

    render(
      <BarChart
        data={dataChart}
        labels={labelChart}
        dataBlack={dataChartBlack}
      />
    );

    expect(screen.getAllByTestId("container")).toBeInTheDocument();
  });
});
