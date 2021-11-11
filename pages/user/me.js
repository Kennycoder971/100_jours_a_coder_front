import UserProfile from "@/pagesComponents/UserProfile/UserProfile";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";

export default function Me() {
  const { user } = useContext(AuthContext);

  return <UserProfile user={user} />;
}
