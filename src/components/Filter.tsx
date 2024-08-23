import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/reducers";
import { StoreData } from "../redux/store";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const states = ["All", "Maharashtra", "Kerala", "Karnataka"];
  const selectedState = useSelector(
    (state: StoreData) => state.covidData.filter
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label>Select State:</label>
      <select id="state-select" value={selectedState} onChange={handleChange}>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
