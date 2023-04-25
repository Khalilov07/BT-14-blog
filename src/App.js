import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// JSX - HTML JS

const App = () => {

  const a = 10

  const b = 10

  const total = b + a

  return (
    <>
      <Header data={data} />
      <Main a={a} b={b} total={total} />
      <Footer />
    </>
  );
}

export default App;