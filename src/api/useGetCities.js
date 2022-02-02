import { useState, useEffect, useReducer } from "react";
import api from "./api";

const citiesFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        cities: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useGetCities = (search) => {
  const [url, setUrl] = useState(`cities${search ? `/?search=${search}` : ""}`);

  const [state, dispatch] = useReducer(citiesFetchReducer, {
    isLoading: false,
    isError: false,
    cities: null,
  });

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

    fetchData();
  }, [url]);

  return [state, setUrl];
};

export default useGetCities;
