import { useContext } from "react";
import { AuthContext } from "../Contexts";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};
