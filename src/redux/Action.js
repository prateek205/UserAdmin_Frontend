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
    console.log("DATA:", data);

    dispatch({
      type: "GET_EMPLOYEE_SUCCESS",
      payload: data.Employee,
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
    console.log("NEW_DATA:", data);

    dispatch({
      type: "POST_EMPLOYEE_SUCCESS",
      payload: data.employeeData,
    });
  } catch (error) {
    dispatch({
      type: "POST_EMPLOYEE_FAILED",
      payload: error.response?.data?.message,
    });
  }
};

export const updateEmployee = (id, employeeData) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_EMPLOYEE_REQUEST",
    });

    const { data } = await axios.put(
      `${BASE_URL}/updateEmployee/${id}`,
      employeeData,
    );

    dispatch({
      type: "UPDATE_EMPLOYEE_SUCCESS",
      payload: data,
    });

    dispatch(getEmployees());
  } catch (error) {
    dispatch({
      type: "UPDATE_EMPLOYEE_FAILED",
      payload: error.response?.data?.message,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_EMPLOYEE_REQUEST",
    });

    const { data } = await axios.delete(`${BASE_URL}/deleteEmployee/${id}`);

    dispatch({
      type: "DELETE_EMPLOYEE_SUCCESS",
      payload: id,
    });

    dispatch(getEmployees());
  } catch (error) {
    dispatch({
      type: "DELETE_EMPLOYEE_FAILED",
      payload: error.response?.data?.message,
    });
  }
};
