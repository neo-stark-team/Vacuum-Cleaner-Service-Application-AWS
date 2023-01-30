import { isJwtExpired } from 'jwt-check-expiration';
const base_url = "http://54.89.228.114:8080";
const axios = require('axios').default;
import { Link, useNavigate} from "react-router-dom";

// axois object
const axiosObject = axios.create({
        baseURL: base_url,
        //timeout: 1500,
});



// Add a request interceptor
axiosObject.interceptors.request.use(function (config) {

        const navigate = useNavigate();

        // set token
        var token = localStorage.getItem('jwtToken');
        
        
        if (token) {
                token = token.replace(/^"(.*)"$/, '$1');
                config.headers.Authorization = `Bearer ${token}`;
                if(isJwtExpired(token)){
                        alert('Session Expired');
                        localStorage.clear();
                        navigate("/login");
                }
        }else{
                alert('Something went wrong!')
                localStorage.clear();
                navigate("/login");
        }
        return config;
}, function (error) {
        return Promise.reject(error);
});

export default axiosObject;