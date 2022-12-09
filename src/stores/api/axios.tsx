import axios from "axios"
import TToken from "../../types/TToken"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
})
let refreshing = false
async function refreshToken(refreshToken: string) {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/access-tokens`, {
        params: { refreshToken },
    })
    const newToken = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expires: response.data.expires,
    }
    refreshing = false
    localStorage.setItem("token", JSON.stringify(newToken))
    localStorage.setItem("_id", response.data.user._id)
}

let refreshTokenRequest: any = null

axiosClient.interceptors.request.use(async (config: any) => {
    const localStorageToken: any = localStorage.getItem("token")

    try {
        const token = JSON.parse(localStorageToken) as TToken
        const isExpired = token && (Date.now() - 5000 > token.expires ? true : false)
        if (isExpired && !refreshing) {
            refreshing = true
            refreshToken(token.refreshToken).then()
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token.accessToken}`
        }
    } catch {}
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }

        return response
    },
    (error) => {
        throw error?.response?.data || error
    }
)

export default axiosClient
