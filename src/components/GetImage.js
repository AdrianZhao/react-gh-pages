
function GetImage(props) {
  return (
    <div className="gallery">
      {props.image.map(image => (
      <figure key={image.name} className="detail">
        <img alt={image.name} src={image.url} />
      </figure>
    ))}
    </div>
  )
}

export default GetImage