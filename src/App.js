import "./assets/styles/index.scss";
import "antd/dist/antd.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import {
  HomePage,
  MenuPage,
  OurStoryPage,
  ContactsPage,
  NotFoundPage,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
