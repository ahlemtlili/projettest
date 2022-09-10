import { DELETE_NOTE_FAIL, GET_NOTE_FAIL, GET_NOTE_LOADING, GET_NOTE_SUCCESS, GET_ONE_NOTE_FAIL, GET_ONE_NOTE_SUCCESS, GET_ONE_PUPIL_FAIL, GET_ONE_PUPIL_SUCCESS, UPDATE_ONE_NOTE_FAIL,} from "../constants/noteTypes";

const initialState={
loading: false,
notes:[],
errors:null,
noteseleve:[],
oneNote:{}
}
export const noteReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case GET_NOTE_LOADING: return {...state, loading:true}
        case GET_NOTE_SUCCESS: return {...state, notes:payload, loading:false}        
        case GET_NOTE_FAIL: return {...state, errors: payload, loading:false}
        case DELETE_NOTE_FAIL: return {...state, errors: payload}
        case UPDATE_ONE_NOTE_FAIL: return {...state, errors: payload}
        case GET_ONE_PUPIL_SUCCESS: return {...state,noteseleve:payload, loading:false}        
        case GET_ONE_PUPIL_FAIL: return {...state, errors: payload, loading:false}
                case GET_ONE_NOTE_SUCCESS:return{...state,oneNote:payload}
                case GET_ONE_NOTE_FAIL: return {...state, errors: payload}
        default: return state;
           
    }
}