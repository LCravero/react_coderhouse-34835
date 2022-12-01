import Group from "./Group";
import "./GroupsList.css";

export default function GroupsList(props) {
  const { data: groups } = props;

  return (
    <div className="groups__container">
      {groups.map((group) => (
        <Group key={group.id} name={group.name} countries={group.countries} />
      ))}
    </div>
  );
}
