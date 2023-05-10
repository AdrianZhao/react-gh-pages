
function Gallery(props) {
  return (
    <section className='galleryWrapper container'>
        <h2 className='title'>Cats Gallery</h2>
        <div className="gallery">
          {props.image.map(image => (
            <figure key={image.name} className="detail">
              <div className="image">
                <img alt={image.name} src={image.url} />
              </div>
            </figure>
          ))}
        </div>
      </section>
  )
}

export default Gallery
