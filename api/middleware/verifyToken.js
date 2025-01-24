import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const user = req.cookies.user;

  if (!user) return res.status(401).send({ message: "Not Authenticated" });

  jwt.verify(user, process.env.JWT_SECRET, async (err, payload) => {
    if (err)
      return res.status(403).send({ message: "Token is not Valid", err });
    req.userId = payload._id;
    next();
  });
};
