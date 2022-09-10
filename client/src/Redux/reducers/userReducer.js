import {
  DELETE_PARENT_FAIL,
  DELETE_TEACHER_FAIL,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  GET_ELEVES_FAIL,
  GET_ELEVES_SUCCESS,
  GET_ONE_USER_FAIL,
  GET_ONE_USER_SUCCESS,
  GET_PARENTS_FAIL,
  GET_PARENTS_SUCCESS,

  GET_TEACHERS_FAIL,
  GET_TEACHERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  LOGOUT,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNUP_CHILD_FAIL,
  SIGNUP_CHILD_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  UPDATE_ONE_USER_FAIL,
} from "../constants/userTypes";

const initialState = {
  loading: false,
  currentUser: {},
  errors: null,
  eleves:[],
  parents:[],
  enseignants:[],
  oneUser:{},
  users:[]
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOADING: return {...state, loading:true}
        case GET_USERS_SUCCESS: return {...state,users:payload, loading:false}        
        case GET_USERS_FAIL: return {...state, errors: payload, loading:false}
    case DELETE_PARENT_FAIL: return {...state, errors: payload}
  case DELETE_TEACHER_FAIL: return {...state, errors: payload}
    case SIGNUP_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGNUP_USER_FAIL:
      return { ...state, errors: payload };
      case SIGNUP_CHILD_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGNUP_CHILD_FAIL:
      return { ...state, errors: payload };
    case SIGNIN_USER_SUCCESS:
      let user=JSON.stringify(payload.user)
      localStorage.setItem("user",user );
      localStorage.setItem("token", payload.token);
      return { ...state, currentUser: payload.user };
    case SIGNIN_USER_FAIL:
      return { ...state, errors: payload };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case GET_CURRENT_USER_FAIL:
      return { ...state, errors: payload };
      case GET_ELEVES_SUCCESS:
        return { ...state, eleves: payload };
        case GET_ELEVES_FAIL:
          return { ...state, errors: payload };
          case GET_PARENTS_SUCCESS:
            return { ...state, parents: payload };
            case GET_PARENTS_FAIL:
              return { ...state, errors: payload };
              case GET_TEACHERS_SUCCESS:
                return { ...state, enseignants:payload };
                case GET_TEACHERS_FAIL:
                  return { ...state, errors: payload };
                  case UPDATE_ONE_USER_FAIL: return {...state, errors: payload}
                  case GET_ONE_USER_SUCCESS:return{...state,oneUser:payload}
                  case GET_ONE_USER_FAIL: return {...state, errors: payload}

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        loading: false,
        currentUser: {},
        errors: null,
      };
    default:
      return state;
  }
};
