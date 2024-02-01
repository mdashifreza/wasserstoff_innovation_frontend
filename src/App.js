import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchAddress from './components/SearchAddress';
function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<SearchAddress/>}/>
        </Routes>
      </Router>
  );
}
export default App;
