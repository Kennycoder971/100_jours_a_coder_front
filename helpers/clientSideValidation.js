/**
 * For client side validation
 * Returns true or false if the object has empty fields
 * @param  {object} fieldsObject
 * @returns {Boolean}
 */
export function hasEmptyFields(fieldsObject) {
  return Object.values(fieldsObject).some((field) => field === "");
}
/**
 * @param  {String | Number} fieldOne
 * @param  {String | Number} fieldTwo
 * @returns {Boolean}
 */
export function fieldValueMatch(fieldOne, fieldTwo) {
  return fieldOne === fieldTwo;
}
