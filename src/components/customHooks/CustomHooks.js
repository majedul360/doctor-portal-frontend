import { useNavigate } from "react-router-dom";

const { useState, useEffect } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.accessToken;
          setToken(token);
          localStorage.setItem("accessToken", token);
        })
        .catch((error) => console.log(error?.message));
    }
  }, [user]);
  return [token];
};

export default useToken;
