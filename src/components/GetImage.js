
function GetImage(props) {
  return (
    <div>
      {props.image.map(image => (
      <figure key={image.name} className="detail">
        <img alt={image.name} src={image.url} />
        <p>{image.name}</p>
      </figure>
    ))}
    </div>
  )
}

export default GetImage