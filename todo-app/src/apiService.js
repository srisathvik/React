// import { noSSR } from "next/dynamic";

const BASE_URL = 'http://localhost:8000'
const ext = '/api/v1'

const apiFunc = fetch


async function get() {

  const currUrl = BASE_URL + ext + "/tasks/tasks";
  const res = await apiFunc(currUrl, {
    method: "GET",

  })
  const data = res.json();
  if(res.ok){
    return data;
  }
}

async function post(value) {
  // console.log(value);
  const currUrl = BASE_URL + ext + "/tasks/create";
  const res = await apiFunc(currUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })
  const data = await res.json();
  if(res.ok){
    return data;
  }
  
}
async function put(value) {
  const currUrl = BASE_URL + ext + `/tasks/update?taskId=${value.taskId}`;
  // console.log(currUrl);
  // console.log(value);
  const res = await apiFunc(currUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value),
  })
  const data = await res.json();
  // console.log(data);
  if(res.ok){
    return data;
  }
}
async function patch(url, body) {

}
async function remove(id) {
  // console.log(id);
  const currUrl = BASE_URL + ext + `/tasks/delete?taskId=${id}`;
  const res = await apiFunc(currUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = res.json();
  if(res.ok){
    return data;
  }
}

export default {
    get,
    post,
    put,
    patch,
    delete: remove
}