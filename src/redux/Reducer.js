import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILED,
  POST_EMPLOYEE_REQUEST,
  POST_EMPLOYEE_SUCCESS,
  POST_EMPLOYEE_FAILED,
} from "./EmployeeTypes";

const initialState = {
  loading: false,
  employees: [],
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET EMPLOYEE

    case "GET_EMPLOYEE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };

    case "GET_EMPLOYEE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // POST EMPLOYEE

    case "POST_EMPLOYEE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "POST_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        employees: [action.payload, ...state.employees],
      };

    case "POST_EMPLOYEE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Update Employee
    case "UPDATE_EMPLOYEE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        employee: action.payload,
      };

    case "UPDATE_EMPLOYEE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "DELETE_EMPLOYEE_REQUEST":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_EMPLOYEE_FAILED":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default employeeReducer;
