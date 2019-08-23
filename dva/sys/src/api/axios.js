import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from 'qs'

const httppost = async (url, obj) => {
    return (await axios({
        method: 'post',
        url: url,
        data: qs.stringify(obj)
    }))
}

const httpget = async (url, obj) => {
    return (await axios(url, { params: obj }))
}

module.exports = { httpget, httppost }