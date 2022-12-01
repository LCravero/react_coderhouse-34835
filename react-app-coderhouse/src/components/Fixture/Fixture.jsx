import { useEffect, useState } from "react";
import GroupsList from "./components/GroupsList";
import { getGroups } from "../../services/groups";
import "./Fixture.css";

export default function Fixture() {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    // TODO: call mock service to get groups data
    getGroups()
      .then((groups) => setGroupsData(groups))
      .catch((error) => {
        console.error("[GROUPS_SERVICE]: ERROR - ", error);
        setGroupsData([]);
      });

    return () => console.log("Se desmonto el componente Fixture");
  }, []);

  const isGroupDataEmpty = groupsData.length === 0;

  return (
    <div className="fixture__container">
      {isGroupDataEmpty ? (
        <span className="loading-text">Loading Groups' data...</span>
      ) : (
        <GroupsList data={groupsData} />
      )}
    </div>
  );
}
