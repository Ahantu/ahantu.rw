import axios from "axios"

const BACKEND_URL = "https://menya.fly.dev/api"
export const getadminBoundaryFromCoordinates  = async (coordinates) => {
    try{
        const result = await axios.post(`${BACKEND_URL}/boundaries`,  coordinates)
        return result.data
    }catch(e){
        return undefined
    }
}