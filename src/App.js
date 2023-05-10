import Header from './components/Header';
import './style/index.css';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
function App() {
  const isMoreCat = true;
  const images = [
    {name: 'XiaoGou01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou01.jpeg'},
    {name: 'XiaoGou02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou02.jpeg'},
    {name: 'NuoMi01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/NuoMi01.jpeg'},
    {name: 'NuoMi02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/NuoMi02.jpeg'},
    {name: 'ZhaZha01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/ZhaZha01.jpeg'},
    {name: 'ZhaZha02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/ZhaZha02.jpeg'}
  ]
  return (
    <>
      <header>
        <Header title="The Fantanstic Cats" />
      </header>
      <main>
        <Banner isMoreCat={isMoreCat}/>
        <Gallery image={images}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
