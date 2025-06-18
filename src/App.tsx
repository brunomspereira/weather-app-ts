import React, { FC } from "react";
import {} from "react-redux";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state: RootState) => state.weather.data);
  const loading = useAppSelector((state: RootState) => state.weather.loading);
  const error = useAppSelector((state: RootState) => state.weather.error);
  const alertMsg = useAppSelector((state: RootState) => state.alert.message);
  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search" />
      {loading ? (
        <h2 className="is-size-3 py2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
