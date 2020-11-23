import a from "axios";
import _ from "lodash";
const axios = a.create({
  baseURL: "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data",
});
async function fetchData(endPoint, setState) {
  console.log("fetching:", endPoint);
  const data = await axios
    .get(endPoint)
    .then((res) => res.data)
    .catch((e) => console.error("request error:", e));

  if (data.length > 0 || !_.isEmpty(data)) {
    setState({
      data: data,
      status: "success",
      error: false,
    });
  } else if (_.isEmpty(data)) {
    console.log("error retrieving data");
    setState({
      data: false,
      status: "fail",
      error: "error retrieving data",
    });
  } else {
    console.log("I shouldnt get here... but I did :/");
    console.log(data);
  }
}
export default fetchData;
