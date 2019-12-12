import Axios from "axios";

export const setAuthorize = () => {
  Axios.defaults.headers.common["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjBiMjFiMDNmNzlmMDAxMTVjN2NkZCIsImlhdCI6MTU3NjA1NTMyMywiZXhwIjoxNTc4NjQ3MzIzfQ.n9E_n95s_d2oK6B_L8yTBl-hiKREDKxgUs8E4WZs-n8";
};
