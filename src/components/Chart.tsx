import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import { StoreData } from "../redux/store";

const Chart: React.FC = () => {
  const { data, filter } = useSelector((state: StoreData) => state.covidData);

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.state === filter);

  const traceTotalCases = {
    x: filteredData.map((item) => item.date),
    y: filteredData.map((item) => item.totalCases),
    type: "scatter",
    mode: "lines",
    name: "Total Cases",
  };

  const traceActiveCases = {
    x: filteredData.map((item) => item.date),
    y: filteredData.map((item) => item.activeCases),
    type: "scatter",
    mode: "lines",
    name: "Active Cases",
  };

  const traceRecovered = {
    x: filteredData.map((item) => item.date),
    y: filteredData.map((item) => item.recovered),
    type: "scatter",
    mode: "lines",
    name: "Recovered",
  };

  const traceDeaths = {
    x: filteredData.map((item) => item.date),
    y: filteredData.map((item) => item.deaths),
    type: "scatter",
    mode: "lines",
    name: "Deaths",
  };
  const config = {
    displayModeBar: false,
  };

  return (
    <div>
      <h2>COVID-19 Line Plot</h2>
      <Plot
        data={[traceTotalCases, traceActiveCases, traceRecovered, traceDeaths]}
        layout={{
          title: `COVID-19 Statistics (${filter})`,
          xaxis: { title: "Date" },
          yaxis: { title: "Count" },
        }}
        config={config}
      />
    </div>
  );
};

export default Chart;
