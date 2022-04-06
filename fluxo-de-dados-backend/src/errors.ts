export const Errors: { [key: string]: { status: number; message: string } } = {
  INVALID_PARAMETERS: { status: 422, message: "The price needs to be higher than 0" },
  PRODUCT_NOT_FOUND: { status: 404, message: "We did not find the product!" },
  MISSING_PARAMETERS: {
    status: 422,
    message: "We need information!.",
  },
  INVALID_PARAMETERS_TYPES: {
    status: 422,
    message: `ERROR PARAMETERS TYPE`,
  },
  INVALID_PARAMETERS_TYPE: {
    status: 422,
    message: `ERROS PARAMETERS TYPE`,
  },
  SOMETHING_WENT_WRONG: { status: 500, message: "HOLD YOUR HORSES, SOMETHING IS NOT RIGHT!" },
}