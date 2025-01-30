import { apiClient } from "./apiClient"
// import urls from "../env"
import { notification } from "antd"

function displaySuccessMessage(message){
    notification.success({
        placement: "bottomRight",
        description: message,
    })
}
function displayErrorMessage(message){
    notification.error({
        placement: "bottomRight",
        description: message,
    })
}

async function get(){
    try{
        const res = await apiClient.get("/getAll")
        // console.log(res);
        if(res && res.data){
            return res.data;
        }
        
    }
    catch(err){
        // console.log(err);
        if(err.response){
            displayErrorMessage(err.response.data.errorMessage);
        }
        else{
            displayErrorMessage(err.message)
        }
        
    }
}

async function update(visit) {
    try{
        const res = await apiClient.patch("/endvisit", visit);
        if(res && res.data){
           displaySuccessMessage("visit ended successfully");
        }
    }
    catch(err){
        console.log(err);
        if(err.response){
            displayErrorMessage(err.response.data.errorMessage)
        }
        else{
            displayErrorMessage(err.message)
        }
    }
}

async function add(visit){
    try{
        // console.log(visit);
        const res = await apiClient.post("/addvisitor", visit);
        // console.log(res);
        if(res && res.data){
           displaySuccessMessage("visit added successfully")
            return res.data;
        }
    }
    catch(err){
        if(err.response){
            displayErrorMessage(err.response.data.errorMessage)
        }
        else{
            displayErrorMessage(err.message)
        }
    }
}
async function remove(id) {
    try{
        const res = await apiClient.remove(`/deletevisitor/${id}`)
        // console.log(res);
        if(res && res.data){
            displaySuccessMessage(res.data)
            // return data;
        }
    }
    catch(err){
        // console.log(err);
        if(err.response){
            displayErrorMessage(err.response.data.errorMessage)
        }
        else{
            displayErrorMessage(err.message)
        }
    }
}
export default {
    get,
    add, 
    remove, 
    update
}