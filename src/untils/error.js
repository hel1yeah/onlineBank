const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'User with this email was not found',
  INVALID_PASSWORD: 'Invalid password',
  INVALID_CUSTOM_TOKEN: 'INVALID_CUSTOM_TOKEN ',
  MISSING_CUSTOM_TOKEN: 'MISSING_CUSTOM_TOKEN',
  auth: 'Please login in system',
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error';
}
