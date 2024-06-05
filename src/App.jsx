import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MyComponent from "./components/MyComponent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/my-component" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
