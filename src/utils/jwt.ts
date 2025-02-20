import jwt from "jsonwebtoken";

/**
 * Signs a JWT token with the provided user context.
 *
 * @template T - The type of the user context object.
 * @param {T} userContext - The user context object to be signed into the JWT token.
 * @returns {string} The signed JWT token.
 */
export const signJwtToken = <T extends object>(
  userContext: T,
  jwtSecret: string
) => {
  return jwt.sign(userContext, jwtSecret);
};

/**
 * Decodes a JWT token and returns the user context.
 *
 * @template T - The type of the user context object. Defaults to `object`.
 * @param {string} jwtToken - The JWT token to decode.
 * @returns {undefined | T} - The decoded user context object, or `undefined` if the token is invalid.
 */
export const getUserContext = <T = object>(
  jwtToken: string,
  jwtSecret: string
): undefined | T => {
  try {
    return jwt.verify(jwtToken, jwtSecret) as T;
  } catch (e) {
    console.error(e);
  }
};
