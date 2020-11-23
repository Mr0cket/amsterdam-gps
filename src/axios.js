import axios from "axios";

axios.create({
  baseURL: "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data",
});
async function fetchData(endPoint, setState) {
  const doctorData = await axios
    .get(endPoint)
    .then((res) => res.data)
    .catch((e) => console.error("request error:", e));

  if ("0" in doctorData) {
    console.log(doctorData);
    setState({
      data: doctorData,
      status: "success",
      error: false,
    });
  } else if (doctorData.length === 0) {
    console.log("error retrieving data");
    setState({
      data: false,
      status: "fail",
      error: "error retrieving data",
    });
  } else console.log("I shouldnt get here... but I did :/");
}
export default fetchData;
