# API Modules Structure

This project uses a modular approach where `server.js` serves as the main API server and imports functionality from separate modules in the `../api/` directory.

## Structure

```
cool/
├── backend/
│   ├── server.js          # Main Express server
│   └── API_MODULES.md     # This documentation
└── api/
    ├── weather.js         # Weather-related functions
    ├── hello.js           # Hello/greeting functions
    └── users.js           # User management functions
```

## How It Works

1. **Module Files** (`api/*.js`): Export functions that contain business logic
2. **Server File** (`server.js`): Imports these functions and creates Express routes to serve them

## Adding New Modules

### Step 1: Create a new module file
Create a new file in the `api/` directory, e.g., `api/products.js`:

```javascript
// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Mouse', price: 29.99 }
];

// Get all products
export function getAllProducts() {
  return { products };
}

// Get product by ID
export function getProductById(id) {
  const product = products.find(p => p.id === parseInt(id));
  return product ? { product } : { error: 'Product not found' };
}
```

### Step 2: Import in server.js
Add the import at the top of `server.js`:

```javascript
import { getAllProducts, getProductById } from '../api/products.js';
```

### Step 3: Create routes
Add the routes in `server.js`:

```javascript
// Product endpoints
app.get('/api/products', (req, res) => {
  res.json(getAllProducts());
});

app.get('/api/products/:id', (req, res) => {
  const result = getProductById(req.params.id);
  if (result.error) {
    res.status(404).json(result);
  } else {
    res.json(result);
  }
});
```

## Available Endpoints

### Weather API
- `GET /api/weather` - Get current weather
- `GET /api/forecast` - Get 5-day forecast

### Hello API
- `GET /api/hello` - Get hello message
- `GET /api/greeting/:name?` - Get personalized greeting

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### System
- `GET /api/health` - Health check

## Benefits of This Approach

1. **Separation of Concerns**: Business logic is separated from routing
2. **Reusability**: Functions can be imported and used in multiple places
3. **Testability**: Each module can be tested independently
4. **Maintainability**: Easy to add, remove, or modify functionality
5. **Scalability**: New modules can be added without cluttering the main server file 