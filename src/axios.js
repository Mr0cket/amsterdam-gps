import a from "axios";
import _ from "lodash";
const axios = a.create({
  baseURL: "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data",
});
export default async function fetchData(endPoints, setState) {
  console.log("fetching:", endPoints);
  const promises = endPoints.map((endPoint) =>
    axios
      .get(endPoint)
      .then((res) => res.data)
      .catch((e) => console.error("request error:", e))
  );

  const results = await Promise.all(promises);
  console.log(results);
  if (results.length > 0) {
    setState({
      data: results,
      status: "success",
      error: false,
    });
  } else if (_.isEmpty(results)) {
    console.log("error retrieving data");
    setState({
      data: false,
      status: "fail",
      error: "error retrieving data",
    });
  } else {
    console.log("I shouldnt get here... but I did :/");
    console.log(results);
  }
}
