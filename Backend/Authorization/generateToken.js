import jwt  from "jsonwebtoken"
const SecretKey = "mishrajkpandaypathak";
const generateToken = (email, password) => {
  const token = jwt.sign(
    {
      email: email,
      password: password,
    },
    SecretKey,
    { expiresIn: '3d' }
  );
  return token;
};

export default generateToken