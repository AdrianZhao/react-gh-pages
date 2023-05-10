import Header from './components/Header';
import './style/index.css';
import Banner from './components/Banner';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <header>
        <Header title="The Fantanstic Cats" />
      </header>
      <main>
        <Banner />
        <Gallery />
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
