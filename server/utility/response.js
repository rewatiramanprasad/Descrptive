//for creating response structure
function response(result, flag, message = '', user = '') {
  let response = {
    success: false,
    data: [],
    message: 'failed',
  }
  if (flag == true) {
    response.data = result
    response.message = result.length + ' rows fetched'
    response.success = flag
    if (message.length != 0) {
      response.message = message
    }
    if (user.length != 0) {
      response['user'] = user
    }
  }
  if (message.length != 0) {
    response.message = message
  }

  return response
}
module.exports = { response }
