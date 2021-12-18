export default function validate(values) {
  const errors = {};

  // for name
  if (!values.fullName) {
    errors.fullName = 'Name is required';
  } else if (!new RegExp(/^(?![\s.]+$)[a-zA-Z\s.]*$/).test(values.fullName)) {
    errors.fullName = 'Name must be 4-12 character w/o special character';
  }

  // for address
  if (!values.address) {
    errors.address = 'Address is required';
  } else if (!new RegExp(/^[a-zA-Z0-9]{3,20}$/).test(values.address)) {
    errors.address = 'Address must be 3-20 character w/o special character';
  }

  // for address
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ).test(values.email)
  ) {
    errors.email = 'Invalid email(example@abc.com)';
  }

  // for contact
  if (!values.contact) {
    errors.contact = 'Contact is required';
  } else if (!new RegExp(/^\d(?:[- ]*\d){6,9}$/).test(values.contact)) {
    errors.contact = 'Contact must be between 7-10 numeric value';
  }

  // for photo
  if (!values.photo) {
    errors.photo = 'Please upload photo first';
  } else if (!new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(values.photo)) {
    errors.photo = 'Invalid Photo Format';
  }

  // for cv
  if (!values.cv) {
    errors.cv = 'Please upload cv first';
  } else if (!new RegExp(/^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/i).test(values.cv)) {
    errors.cv = 'Invalid document format';
  }
  return errors;
}
