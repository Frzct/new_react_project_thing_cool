// Version service
export function version() {
  try {
    return { message: `running on ver 0.0.5` };
  } catch (error) {
    throw new Error(`Failed to get version: ${error.message}`)
  }
}