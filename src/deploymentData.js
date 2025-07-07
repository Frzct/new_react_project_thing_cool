
const DevEnv = {
    'backend': '' // check vercel.json for routes. this leads to /api/weather
}

const ProdEnv = {
    'backend': 'https://backend-api-five-umber.vercel.app'
}

export default function(){
    if (window.location.href.split('/').includes('localhost:5173')){
        return DevEnv
    } else {
        return ProdEnv
    }
}