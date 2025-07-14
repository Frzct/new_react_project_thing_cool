import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

import routes from './router/index.js'
import { Initialize } from './database.js'

dotenv.config() // the env is in the same path anyways

const app = express()
const PORT = process.env.PORT || 3003;
// Middleware

await Initialize()

//
const allowedOrigins = [
    'https://new-react-project-thing-cool-git-feature-2-bakudankows-projects.vercel.app',
    'https://new-react-project-thing-cool.vercel.app'
    // Add more allowed origins here if needed
];

app.use(cors({
    origin: function(origin, callback){
      if (!origin) return callback(null, true); // 
      if ( allowedOrigins.includes( origin ) ){
        return callback(null, true)
      } else {
        return callback(new Error(`failed to authorize`))
      }
  
    }
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', routes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    status: "ERROR", 
    message: "Something went wrong!" 
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    status: "ERROR", 
    message: "Route not found" 
  })
})

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app 