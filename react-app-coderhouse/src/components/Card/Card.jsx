import "./Card.css";

function Card(props) {
  const { children } = props;

  return <div className="card__container">{children}</div>;
}

export default Card;
