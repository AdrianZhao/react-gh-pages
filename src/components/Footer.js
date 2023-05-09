import { Component } from 'react';

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <div className='container flexbox'>
          <h1>{title}</h1>
          <ul>
            <li><p>My Cats</p></li>
            <li><p>Cats Gallery</p></li>
            <li><p>About Cats</p></li>
            <li><p>Subscribe Cats</p></li>
            <li><p>Contact Us</p></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;