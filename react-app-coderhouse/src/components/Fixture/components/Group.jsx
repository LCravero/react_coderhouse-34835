import "./Group.css";

export default function Group(props) {
  const { name, countries } = props;

  return (
    <div className="group-item__container">
      <div>
        <span className="group-name">{name}</span>
        {countries.map((country) => (
          <span key={country}>{country}</span>
        ))}
      </div>
      <ul className="group-countries__list-container">
        {countries.map((country) => (
          <li key={country} className="group-country">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}
