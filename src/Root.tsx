import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import { Paths } from "./enums";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          {/* children will be another pages of the app */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
