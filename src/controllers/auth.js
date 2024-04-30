import axios from "axios";

export const login = async (req, res) => {
  const response = await axios
    .get("http://localhost:3000/users")
    .then((res) => res.data);
  return res.status(200).json(response.data);
};
