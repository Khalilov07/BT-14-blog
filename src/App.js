import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CreatePost from './pages/CreatePost/CreatePost';

// JSX - HTML JS

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/create' element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;