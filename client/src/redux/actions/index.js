import axios from 'axios';

import { ADDNEW_TODO } from './type';   
const API_URI ='http://localhost:8000';

export const addNewToDo =(data) =>async(dispatch)=>{ 
    try{
    const res = axios.post(`${API_URI}/todos`,{data});
   dispatch({type:ADDNEW_TODO,payload:res.data});
}
    catch(error){
        console.log('Error while calling addNewTODO api',error.message);
    }
}