import axios, { CreateAxiosDefaults } from "axios"

let url = ""

if (process.env.NODE_ENV !== 'production') {
  url = "http://localhost:3000/api/"
}


const apiConfigs:CreateAxiosDefaults = {
  url,
  method: "POST",
}

const api = axios.create(apiConfigs)

export {
  url,
  api
}