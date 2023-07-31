import "../App.css";
function ListItem(props) {
  return (
    <div
      className={`image-${props.index}`}
      onMouseEnter={() => props.handleMouseEnter(props.index)}
      onMouseLeave={() => props.handleMouseLeave()}
    ></div>
  );
}

export default ListItem;
