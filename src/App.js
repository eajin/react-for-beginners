import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/abot-us" element={<h1>Hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
