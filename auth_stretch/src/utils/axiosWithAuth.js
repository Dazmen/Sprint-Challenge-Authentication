import Axios from 'axios';

const axiosWithAuth = () => {

    return Axios.create({
        baseURL: 'http://localhost:3300',
        headers: {
            authorization : localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;