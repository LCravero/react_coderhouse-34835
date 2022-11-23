function User(props) {
  const { name, surname } = props;

  return (
    <div className="user">
      <ul className="user-data">
        <li>
          <span style={{ color: "white" }}>{name}</span>
        </li>
        <li>
          <span style={{ color: "white" }}>{surname}</span>
        </li>
      </ul>
    </div>
  );
}

export default User;
