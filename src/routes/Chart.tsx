import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
import {ChartProps, IHistorical} from "../types";

function Chart({coinId}: ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <div>
    {isLoading ? (
      "Loading chart..."
    ) : (
      <>
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[] || null,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {show: false},
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: {show: false},
              axisTicks: {show: false},
              labels: {show: false},
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => {
                return {x: new Date(price.time_open), y: [price.open, price.high, price.low,  price.close]}
              }) as { x: Date, y: number[] }[] || null,
            },
          ]}
          options={{
            chart: {
              type: 'candlestick',
              height: 350,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            theme: {
              mode: "dark",
            },
            grid: {show: false},
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: 'datetime',
              axisBorder: {show: false},
              axisTicks: {show: false},
              labels: {show: false},
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />

      </>

    )}
  </div>;
}

export default Chart;