import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* Home */}

        <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
