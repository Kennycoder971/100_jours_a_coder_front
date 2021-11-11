/**
 * My api return an error Object with an error key witch is an array of objects.
 * It returns only the values in an array
 * @param  {Object} response
 * @return {Array} Array of error messages
 */
export default function getErrorMsg(response) {
  return response.errors.map((e) => Object.values(e)[0]);
}
