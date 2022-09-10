import axios from "axios"
import { ADD_NOTE_FAIL, ADD_NOTE_SUCCESS, DELETE_NOTE_FAIL, DELETE_NOTE_SUCCESS, GET_NOTE_FAIL, GET_NOTE_LOADING, GET_NOTE_SUCCESS, GET_ONE_NOTE_FAIL, GET_ONE_NOTE_SUCCESS, GET_ONE_PUPIL_FAIL, GET_ONE_PUPIL_SUCCESS, UPDATE_ONE_NOTE_FAIL, UPDATE_ONE_NOTE_SUCCESS } from "../constants/noteTypes"

export const getAllNotes = ()=> async dispatch=>{
  const token=localStorage.getItem("token")
    dispatch({type:GET_NOTE_LOADING})
    try {
        const response=await axios.get('http://localhost:5000/note/',{ headers: { Authorization: `Bearer ${token}` } })
        dispatch({type: GET_NOTE_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_NOTE_FAIL, payload: error})
    }

}

export const deleteNote = (id)=> async dispatch=>{
  const token=localStorage.getItem("token")
    try {
         const response =await axios.delete(`http://localhost:5000/note/${id}`,{ headers: { Authorization: `Bearer ${token}` } })
         console.log(response)
         dispatch({type:DELETE_NOTE_SUCCESS})
         dispatch(getAllNotes())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_NOTE_FAIL , payload:error})
         }

}

export const addNote = (newNote, navigate)=> async dispatch=>{
  console.log(newNote)
  const token=localStorage.getItem("token")
    try {
         const response=await axios.post("http://localhost:5000/note/addnote", newNote,{ headers: { Authorization: `Bearer ${token}` } })
         console.log(response)
         dispatch({type:ADD_NOTE_SUCCESS})
         dispatch(getAllNotes())
         navigate("/note")
        } catch (error) {
            console.log(error);
            dispatch({type:ADD_NOTE_FAIL , payload:error})
            alert(error.response.data)
         }
}
  export const editNote=(id,newNote,navigate) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:5000/note/${id}`,newNote,{ headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response)
      
      dispatch({type:UPDATE_ONE_NOTE_SUCCESS})
      dispatch(getAllNotes())
      navigate("/note")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_NOTE_FAIL,payload:error})}};
  export const editNoteAdmin=(id,newNote,navigate) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:5000/note/${id}`,newNote,{ headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response)
      
      dispatch({type:UPDATE_ONE_NOTE_SUCCESS})
      dispatch(getAllNotes())
      navigate("/noteG")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_NOTE_FAIL,payload:error})
    }
  };

  export const getOnePupil=() => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.get(`http://localhost:5000/note/noteEleve`,{ headers: { Authorization: `Bearer ${token}` } });
      dispatch({type:GET_ONE_PUPIL_SUCCESS,payload:response.data.noteseleve})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_PUPIL_FAIL,payload:error})
    }
  };
  export const getOneNote=(id) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.get(
        `http://localhost:5000/note/details/${id}`,{ headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:GET_ONE_NOTE_SUCCESS,payload:response.data.oneNote})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_NOTE_FAIL,payload:error})
    }
  };

