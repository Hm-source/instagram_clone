import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App({ Component, pageProps }) {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* 다른 라우트들 추가 */}
      </Routes>
    </Router>

    </>
  )
}

export default App;
