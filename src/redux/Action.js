import axios from "axios";
import { GET_EMPLOYEE_REQUEST } from "./EmployeeTypes";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// GET_EMPLOYEE_DATA

export const getEmployees = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_EMPLOYEE_REQUEST",
    });

    const { data } = await axios.get(`${BASE_URL}/getEmployee`);

    dispatch({
      type: "GET_EMPLOYEE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_EMPLOYEE_FAILED",
      payload: error.response?.data?.message,
    });
  }
};

// POST_EMPLOYEE_DATA

export const postEmployee = (employeeData) => async (dispatch) => {
  try {
    dispatch({
      type: "POST_EMPLOYEE_REQUEST",
    });

    const { data } = await axios.post(
      `${BASE_URL}/createEmployee`,
      employeeData,
    );

    dispatch({
      type: "POST_EMPLOYEE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_EMPLOYEE_FAILED",
      payload: error.response?.data?.message,
    });
  }
};
