# Deploying to Vercel

This guide explains how to deploy your modular API to Vercel.

## Prerequisites

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Make sure you have a Vercel account at [vercel.com](https://vercel.com)

## Deployment Steps

### Option 1: Deploy Backend as Separate Project (Recommended)

1. **Navigate to the backend directory:**
   ```bash
   cd cool/backend
   ```

2. **Login to Vercel (if not already logged in):**
   ```bash
   vercel login
   ```

3. **Deploy the API:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `cool-api` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings: `N`

5. **Your API will be deployed to:**
   ```
   https://your-project-name.vercel.app
   ```

### Option 2: Deploy from Root Directory

If you want to deploy both frontend and backend together:

1. **Navigate to the root directory:**
   ```bash
   cd cool
   ```

2. **Update the root vercel.json to handle both frontend and API:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "backend/server.js",
         "use": "@vercel/node"
       },
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist"
         }
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/backend/server.js"
       },
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

## Environment Variables

If you need environment variables:

1. **Set them in Vercel dashboard:**
   - Go to your project in Vercel dashboard
   - Settings → Environment Variables
   - Add your variables (e.g., `PORT`, `DATABASE_URL`, etc.)

2. **Or use Vercel CLI:**
   ```bash
   vercel env add PORT
   vercel env add DATABASE_URL
   ```

## Testing Your Deployed API

Once deployed, test your endpoints:

```bash
# Test weather API
curl https://your-project-name.vercel.app/api/weather

# Test hello API
curl https://your-project-name.vercel.app/api/hello

# Test users API
curl https://your-project-name.vercel.app/api/users

# Test health check
curl https://your-project-name.vercel.app/api/health
```

## Available Endpoints

- `GET /api/weather` - Get current weather
- `GET /api/forecast` - Get weather forecast
- `GET /api/hello` - Get hello message
- `GET /api/greeting/:name?` - Get personalized greeting
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/health` - Health check

## Troubleshooting

### Common Issues:

1. **Module not found errors:**
   - Make sure all dependencies are in `package.json`
   - Check that import paths are correct

2. **CORS issues:**
   - The server already has CORS configured
   - If issues persist, check your frontend's request URL

3. **Environment variables:**
   - Make sure they're set in Vercel dashboard
   - Use `process.env.VARIABLE_NAME` in your code

### Useful Commands:

```bash
# View deployment logs
vercel logs

# Redeploy
vercel --prod

# Remove deployment
vercel remove
``` 