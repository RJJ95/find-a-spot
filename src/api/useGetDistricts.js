import { useState, useEffect, useReducer } from "react";
import api from "./api";

const districtsFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        fetchingDistricts: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        fetchingDistricts: false,
        isError: false,
        districts: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        fetchingDistricts: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useGetDistricts = (selectedCity) => {
  const [url, setUrl] = useState("");

  const [state, dispatch] = useReducer(districtsFetchReducer, {
    fetchingDistricts: false,
    isError: false,
    districts: null,
  });

  useEffect(() => {
    setUrl(`cities/${selectedCity}/districts`);
  }, [selectedCity]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await api(url);

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    selectedCity && fetchData();
  }, [url, selectedCity]);

  return [state, setUrl];
};

export default useGetDistricts;
