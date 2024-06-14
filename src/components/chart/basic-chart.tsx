import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

type Props = HighchartsReact.Props & {
  options: Highcharts.Options;
};

const BasicChart = ({ options, ...props }: Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default BasicChart;
