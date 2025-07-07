// Sample user data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'user' }
];

// Get all users
export function getAllUsers() {
  return { users };
}

// Get user by ID
export function getUserById(id) {
  const user = users.find(u => u.id === parseInt(id));
  return user ? { user } : { error: 'User not found' };
}

// Create a new user
export function createUser(userData) {
  const newUser = {
    id: users.length + 1,
    name: userData.name,
    email: userData.email,
    role: userData.role || 'user'
  };
  users.push(newUser);
  return { user: newUser };
}

// Update user
export function updateUser(id, userData) {
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return { error: 'User not found' };
  }
  
  users[userIndex] = { ...users[userIndex], ...userData };
  return { user: users[userIndex] };
}

// Delete user
export function deleteUser(id) {
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return { error: 'User not found' };
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  return { message: 'User deleted successfully', user: deletedUser };
} 