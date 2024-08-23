import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store, StoreDispatch } from "./redux/store";
import { setData } from "./redux/reducers";
import Filter from "./components/Filter";
import Chart from "./components/Chart";
import PieChart from "./components/PieChart";
import "./styles/App.css";

const AppContent: React.FC = () => {
  const dispatch = useDispatch<StoreDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/covidData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(setData(data));
      } catch (error) {
        console.error("Failed to fetch COVID-19 data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>COVID-19 Tracker India</h1>
      <div className="charts-container">
        <Filter />
        <Chart />
        <PieChart />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
