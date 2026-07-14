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
  Employee: [],
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
        Employee: action.payload,
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
        loading: false,
      };

    case "POST_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        employee: action.payload.newEmployee,
      };

    case "POST_EMPLOYEE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default employeeReducer;
