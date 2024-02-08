import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const User = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const tokenData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken) {
          setData(decodedToken);
        } else {
          navigate("/");
          console.log("Decoded token is null or undefined");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    tokenData();
  }, []);

  return (
    <div>
      <h2>User</h2>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          {data && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>User: {data.user}</h1>
              <p>sub: {data.sub}</p>
              <p>iat: {data.iat}</p>

              {/* <select
                value={selectedOption}
                onChange={(e) => handleClickOption(e)}
                name=""
                id=""
              >
                {Object.values(indexOutlet).map((val) => {
                  return (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
