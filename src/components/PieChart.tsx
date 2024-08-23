import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import { StoreData } from "../redux/store";

const PieChart: React.FC = () => {
  const { data, filter } = useSelector((state: StoreData) => state.covidData);

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.state === filter);

  const totalRecovered = filteredData.reduce(
    (acc, item) => acc + item.recovered,
    0
  );
  const totalActive = filteredData.reduce(
    (acc, item) => acc + item.activeCases,
    0
  );
  const totalDeaths = filteredData.reduce((acc, item) => acc + item.deaths, 0);

  const pieData = [
    {
      labels: ["Active Cases", "Recovered", "Deaths"],
      values: [totalActive, totalRecovered, totalDeaths],
      type: "pie",
    },
  ];
  const config = {
    displayModeBar: false,
  };
  return (
    <div>
      <h2>COVID-19 Pie Chart ({filter})</h2>
      <Plot
        data={pieData}
        layout={{
          title: `Distribution of Cases (${filter})`,
          showlegend: true,
        }}
        config={config}
      />
    </div>
  );
};

export default PieChart;
