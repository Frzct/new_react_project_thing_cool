const DevEnv = {
    'backend': '' // check vite.config.js for routes.
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