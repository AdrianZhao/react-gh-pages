
function GetImage(props) {
  return (
    <div className="gallery">
      {props.image.map(image => (
      <figure key={image.name} className="detail">
        <div className="image">
          <img alt={image.name} src={image.url} />
        </div>
      </figure>
    ))}
    </div>
  )
}

export default GetImage