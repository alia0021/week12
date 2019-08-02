import axios from "axios";
const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
});
export default instance;
// this auth file handles all the calls globally (authorization service)
