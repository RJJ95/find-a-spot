import { useState, useEffect, useReducer } from "react";
import api from "./api";

const citiesFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        fetchingCities: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        fetchingCities: false,
        isError: false,
        cities: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        fetchingCities: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useGetCities = (search) => {
  const [url, setUrl] = useState(`cities`);

  const [state, dispatch] = useReducer(citiesFetchReducer, {
    fetchingCities: false,
    isError: false,
    cities: null,
  });

  useEffect(() => {
    setUrl(`cities${search ? `/?search=${search}` : ""}`);
  }, [search]);

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

    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [url, search]);

  return [state, setUrl];
};

export default useGetCities;
