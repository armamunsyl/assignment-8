import React, { useState, useEffect } from "react";
import AppsShow from "../AppsShow/AppsShow";
import Loading from "../Loading/Loading";

const AppHome = () => {
  const [homeapp, setHomeapp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/AllAppsData.json")
      .then((res) => res.json())
      .then((data) => {
        setHomeapp(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <AppsShow homeapp={homeapp}></AppsShow>
    </div>
  );
};

export default AppHome;
