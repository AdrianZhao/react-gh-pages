import Button from './Button';

function Banner(props) {
  return (
    <section className='banner'>
      <div className='filter'>
        <div className='wrapper container'>
          <h2>Welcome to Fantanstic Cats! Let\'s enjoy plenty of cats photos and videos from our gorgeous cats!</h2>
          <div className='buttonWrapper'>
            <Button isMoreCat={!props} />
            <Button isMoreCat={props} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner