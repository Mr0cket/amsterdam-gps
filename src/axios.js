import a from "axios";
import _ from "lodash";
const axios = a.create({
  baseURL: "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data",
});
export default async function fetchData(setState, ...endPoints) {
  console.log("fetching:", endPoints);
  const promises = endPoints.map((endPoint) =>
    axios
      .get(endPoint)
      .then((res) => res.data)
      .catch((e) => console.error("request error:", e))
  );
  const results = await Promise.all(promises);
  if (results.length > 1) {
    setState({
      data: results, // will always be an array of results.
      status: "success",
      error: false,
    });
  } else if (results.length === 1) {
    setState({
      data: results[0], // Will not be an array of results.
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
