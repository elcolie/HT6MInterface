export function validate(values) {
  const errors = {};
  
  // Validate the inputs from 'values'
  if (!values.userid) {
    errors.userid = "Enter a user ID!";
  }
  
  if (!values.password) {
    errors.password = "Enter your password";
  }
  
  return errors;
}
