import { DELETE_COURS_FAIL,  DELETE_COURS_FAIL_TEACHER,  GET_COURS_FAIL, GET_COURS_LOADING, GET_COURS_SUCCESS, GET_ONE_COURS_FAIL, GET_ONE_COURS_SUCCESS, UPDATE_ONE_COURS_FAIL, UPDATE_ONE_COURS_FAIL_TEACHER } from "../constants/coursTypes";

const initialState={
loading: false,
cours:[],
errors:null,
oneCours:{}
}
export const coursReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case GET_COURS_LOADING: return {...state, loading:true}
        case GET_COURS_SUCCESS: return {...state, cours:payload, loading:false}        
        case GET_COURS_FAIL: return {...state, errors: payload, loading:false}
        // case DELETE_COURS_SUCCESS: return {...state, cours: state.cours.filter()}
        case DELETE_COURS_FAIL: return {...state, errors: payload}
        case UPDATE_ONE_COURS_FAIL: return {...state, errors: payload}
        case DELETE_COURS_FAIL_TEACHER: return {...state, errors: payload}
        case UPDATE_ONE_COURS_FAIL_TEACHER: return {...state, errors: payload}
        //GET ONE COURS 
        case GET_ONE_COURS_SUCCESS:return{...state,oneCours:payload}
        case GET_ONE_COURS_FAIL: return {...state, errors: payload}
        default: return state;
           
    }
}