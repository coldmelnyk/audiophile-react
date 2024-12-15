import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import { Paths } from "./enums";
import { Home } from "./pages/Home";
import { Earphones } from "./pages/Earphones";
import { Headphones } from "./pages/Headphones";
import { Speakers } from "./pages/Speakers";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route path={Paths.EARPHONES} element={<Earphones />} />
          <Route path={Paths.HEADPHONES} element={<Headphones />} />
          <Route path={Paths.SPEAKERS} element={<Speakers />} />
          <Route path={Paths.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
