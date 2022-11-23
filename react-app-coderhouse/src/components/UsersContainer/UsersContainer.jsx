import User from "./User/User";

function UsersContainer() {
  /**
   * supongamos que la siguiente variable es la data que manejamos internamente
   * como data de un usuario
   */

  const user = {
    name: "Lucas",
    surname: "Cravero",
  };

  return (
    <div className="users-container">
      <User name={user.name} surname={user.surname} />
    </div>
  );
}

export default UsersContainer;
