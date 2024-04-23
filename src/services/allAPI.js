
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//api to upload video



export const uploadAllVideo = async(reqBody) => {
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
 }

 // api to get all video

 export const getAllvideo = async() =>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
 }


 // api to delete a video

 export const deleteVideo = async(id) => {
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
 }


 //api to add watch history

 export const addToHistory = async(videoDetails) =>{
   return await commonAPI('POST', `${serverURL}/history`,videoDetails)
 }

 // to get data from the history

 export const getAllHistory = async() => {
  return await commonAPI('GET',`${serverURL}/history`,"")
 }

 // api to add category

 export const addCategory = async() => {
  return await commonAPI('POST',`${serverURL}/category`,"")
 }