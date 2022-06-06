import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useCurrentUser = () => {
  const [user] = useAuthState(auth);
  return user;
};

export default useCurrentUser;
