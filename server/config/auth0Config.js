import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-vm1kdud1hai5k3u4.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck