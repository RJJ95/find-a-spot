import axios from "axios";

const api = axios.create({
  baseURL: "https://fys-d-fa.azurewebsites.net/api/",
  headers: {
    "x-functions-key":
      "YvRVWgMT6dvDkbiac221ZJ9o6eFqP3DaNWhlCaazTpi2ZcUz2YJOEg==",
    "Content-Type": "application/json",
  },
});

export default api;
