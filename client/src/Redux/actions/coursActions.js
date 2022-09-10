import axios from "axios"
import { ADD_COURS_FAIL, ADD_COURS_SUCCESS, DELETE_COURS_FAIL, DELETE_COURS_FAIL_TEACHER, DELETE_COURS_SUCCESS, DELETE_COURS_SUCCESS_TEACHER, GET_COURS_FAIL, GET_COURS_LOADING, GET_COURS_SUCCESS, GET_ONE_COURS_FAIL, GET_ONE_COURS_SUCCESS, UPDATE_ONE_COURS_FAIL, UPDATE_ONE_COURS_FAIL_TEACHER, UPDATE_ONE_COURS_SUCCESS, UPDATE_ONE_COURS_SUCCESS_TEACHER } from "../constants/coursTypes"

export const getAllCours = ()=> async dispatch=>{
  const token=localStorage.getItem("token")
    dispatch({type:GET_COURS_LOADING})
    try {
        const response=await axios.get('http://localhost:5000/cours/',{ headers: { Authorization: `Bearer ${token}` } })
        dispatch({type: GET_COURS_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_COURS_FAIL, payload: error})
    }

}

export const deleteCours = (id)=> async dispatch=>{
  const token=localStorage.getItem("token")
    try {
         const response=await axios.delete(`http://localhost:5000/cours/${id}`,{ headers: { Authorization: `Bearer ${token}` } })
         dispatch({type:DELETE_COURS_SUCCESS})
         dispatch(getAllCours())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_COURS_FAIL , payload:error})
         }

}
export const deleteCoursTeacher = (id)=> async dispatch=>{
  const token=localStorage.getItem("token")
    try {
         const response=await axios.delete(`http://localhost:5000/cours/deleteTeacher/${id}`,{ headers: { Authorization: `Bearer ${token}` } })
         dispatch({type:DELETE_COURS_SUCCESS_TEACHER})
         dispatch(getAllCours())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_COURS_FAIL_TEACHER , payload:error})
         }

}

export const addCours= (newCours, navigate)=> async dispatch=>{
  console.log(newCours)
  const token=localStorage.getItem("token")
    try {
         const response=await axios.post("http://localhost:5000/cours/addCourse", newCours,{ headers: { Authorization: `Bearer ${token}` } })
         console.log(response)
         dispatch({type:ADD_COURS_SUCCESS})
         dispatch(getAllCours())
         navigate("/cours")
        } catch (error) {
            console.log(error);
            dispatch({type:ADD_COURS_FAIL , payload:error})
            alert(error.response.data)
         }
}

  export const editCours=(id,newCours,navigate) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:5000/cours/${id}`,newCours,{ headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:UPDATE_ONE_COURS_SUCCESS})
      dispatch(getAllCours())
      navigate("/cours")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_COURS_FAIL,payload:error})
    }
  };
  export const editCoursTeacher=(id,newCours,navigate) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:5000/cours/updateTeacher/${id}`,newCours,{ headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:UPDATE_ONE_COURS_SUCCESS_TEACHER})
      dispatch(getAllCours())
      navigate("/cours")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_COURS_FAIL_TEACHER,payload:error})
    }
  };
  export const editCoursAdmin=(id,newCours,navigate) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:5000/cours/${id}`,newCours,{ headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:UPDATE_ONE_COURS_SUCCESS})
      dispatch(getAllCours())
      navigate("/coursG")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_COURS_FAIL,payload:error})
    }
  };
  export const getOneCours=(id) => async (dispatch) => {
    const token=localStorage.getItem("token")
    try {
      const response = await axios.get(
        `http://localhost:5000/Cours/details/${id}`,{ headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:GET_ONE_COURS_SUCCESS,payload:response.data.oneCours})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_COURS_FAIL,payload:error})
    }
  };

