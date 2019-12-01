import axios from 'axios'
import {JPA_API_URL} from "../../Constants"

class DemoDataService {
    retrieveAllDemos(name){
        return axios.get(`${JPA_API_URL}/users/${name}/demos`)
    }

    retrieveDemo(name, id){
        return axios.get(`${JPA_API_URL}/users/${name}/demos/${id}`)
    }

    deleteDemo(name, id){
        return axios.delete(`${JPA_API_URL}/users/${name}/demos/${id}`)
    }

    updateDemo(name, id, demo){
        return axios.put(`${JPA_API_URL}/users/${name}/demos/${id}`, demo)
    }

    createDemo(name, demo){
        return axios.post(`${JPA_API_URL}/users/${name}/demos/`, demo)
    }
}

export default new DemoDataService()