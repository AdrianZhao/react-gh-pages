import { Component } from 'react';
import GetImage from './GetImage';
class Gallery extends Component {
  render() {
    const images = [
      {name: 'XiaoGou01', url: '../src/image/XiaoGou01.jpeg'},
      {name: 'XiaoGou02', url: './src/image/XiaoGou02.jpeg'},
      {name: 'NuoMi01', url: './image/NuoMi01.jpeg'},
      {name: 'NuoMi02', url: './image/NuoMi02.jpg'},
      {name: 'ZhaZha01', url: '../image/ZhaZha01.jpeg'},
      {name: 'ZhaZha02', url: '../image/ZhaZha01.jpg'}
    ]
    return (
      <section className='gallery'>
        <GetImage image={images} />
      </section>
    )
  }
}

export default Gallery;
