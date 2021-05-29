import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
