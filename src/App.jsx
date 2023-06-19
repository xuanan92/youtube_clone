import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </>
          }
            extract />
          <Route path="/search/:searchTerm" element={
            <>
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          } extract />
        </Routes >
      </Router >
    </div>
  );
}

export default App;
