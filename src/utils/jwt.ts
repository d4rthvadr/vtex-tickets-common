import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET!;

export const signJwtToken = <T extends object>(userContext: T) => {
  return jwt.sign(
    userContext,
    jwtSecret
  );
};

// export const signJwtToken = (user: Pick<UserDocument, '_id' | 'email'>) => {
//   return jwt.sign(
//     {
//       id: user?._id?.toString(),
//       email: user.email,
//     },
//     jwtSecret
//   );
// };

export const getUserContext = <T = object>(
  jwtToken: string,
): undefined | T => {
  try {
    return jwt.verify(jwtToken, jwtSecret) as T;
  } catch (e) {
    console.error(e);
  }
};
