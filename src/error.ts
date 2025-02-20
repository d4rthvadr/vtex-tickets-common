export interface ErrorResponse {
  message: string;
  status: number;
  data: unknown;
}

/**
 * Normalizes an error message into a standardized error object.
 *
 * @param errorMsg - The error message to be normalized.
 * @param status - The HTTP status code associated with the error.
 * @param data - Additional data related to the error.
 * @returns An object containing the normalized error message, status code, and additional data.
 */
export const normalizeError = (errorMsg: string, status: number, data?: unknown) => {
  return {
    message: errorMsg,
    status,
    data
  };
};

export abstract class CustomError extends Error {
  constructor(
    public errorMessage: string,
    private code = 400,
  ) {
    super(errorMessage);
  }

  public serializeError(data?: unknown): ErrorResponse {
    return normalizeError(this.errorMessage, this.code, data);
  }

  get statusCode(): number {
    return this.code;
  }
}

export class BadRequestError extends CustomError {
  constructor(errorMessage = 'Bad request') {
    super(errorMessage, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export class NotAuthorizedError extends CustomError {
  constructor(errorMessage = 'Not authorized') {
    super(errorMessage, 401);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
}

export class NotFoundError extends CustomError {
  constructor(errorMessage = 'Not found') {
    super(errorMessage, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}