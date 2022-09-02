import {
  Routes,
  Route,
} from "react-router-dom";

import Container from './components/Container/Container';

function App() {
  return (
    <div className="App pt-5">
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
