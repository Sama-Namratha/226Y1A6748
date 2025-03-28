import axios from "axios";
const API_BASE_URL="http://localhost:8080/numbers";
export const fetchNumber =async(type) => {
    try{
        const response = await axios.get('${API_BASE_URL}/${type}');
        return response.numbers;
    }catch(error){
        console.error("Error fetching numbers.",error);
        return null;
    }
};