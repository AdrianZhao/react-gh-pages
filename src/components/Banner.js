import { Component } from 'react';
import Button from './Button';
class Banner extends Component {
  render() {
    let isMoreCat = true;
    return (
      <section className='banner'>
        <div className='filter'>
          <div className='wrapper container'>
            <h2>Welcome to Fantanstic Cats! Let's enjoy plenty of cats photos and 
              videos from our gorgeous cats!</h2>
            <div className='buttonWrapper'>
              <Button isMoreCat={!isMoreCat} />
              <Button isMoreCat={isMoreCat} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner;