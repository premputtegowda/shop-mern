

class CustomAPIError extends Error {
    constructor(message, statusCode){
    super(message)
    this.statusCode = statusCode
    
    }
}

const createCustomError = (msg, statusCode) => {
    console.log('error Status', statusCode)
 
    return new CustomAPIError(msg, statusCode)
}

export { CustomAPIError, createCustomError}