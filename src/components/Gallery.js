import { Component } from 'react';
import GetImage from './GetImage';
class Gallery extends Component {
  render() {
    const images = [
      {name: 'XiaoGou01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou01.jpeg'},
      {name: 'XiaoGou02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou02.jpeg'},
      {name: 'NuoMi01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/NuoMi01.jpeg'},
      {name: 'NuoMi02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/NuoMi02.jpeg'},
      {name: 'ZhaZha01', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/ZhaZha01.jpeg'},
      {name: 'ZhaZha02', url: 'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/ZhaZha01.jpeg'}
    ]
    return (
      <section className='galleryWrapper container'>
        <h2 className='title'>Cats Gallery</h2>
        <GetImage image={images} />
      </section>
    )
  }
}

export default Gallery;
