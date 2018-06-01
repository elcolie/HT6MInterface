export function validate(values) {
  const errors = {};
  if (!values.big_radius) {
    errors.big_radius = "Enter a big radius";
  }
  
  if (!values.small_radius) {
    errors.small_radius = "Enter a small radius";
  }
  return errors;
}