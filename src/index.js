import React, { useEffect, useReducer } from "react";
import {
  CumulioContext,
  CumulioComponent,
  initialState,
  reducer,
  useCumulio,
} from "react-cumulio";
import { render } from "react-dom";

const dashboardId = "";

const authKey = "";
const authToken = "";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CumulioContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </CumulioContext.Provider>
  );
};

const Dashboard = () => {
  const { state } = useCumulio();

  useEffect(() => {
    console.log("State", state);
  }, [state]);

  const filters = state.filters && state.filters[0];

  useEffect(() => {
    console.log("Filters changed!");
  }, [filters]);

  return (
    <CumulioComponent
      dashboardId={dashboardId}
      authKey={authKey}
      authToken={authToken}
      screenmode={"desktop"}
      language="en"
    />
  );
};

render(<App />, document.getElementById("app"));
