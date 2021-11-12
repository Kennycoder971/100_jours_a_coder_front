import LoginPage from "@/pagesComponents/LoginPage/LoginPage";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { hasEmptyFields } from "@/helpers/clientSideValidation";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  async function loginUser(fields, evt) {
    let error = false;

    if (hasEmptyFields(fields)) {
      error = true;
      toast.error("Veuillez renseigner tous les champs.");
      return;
    }

    // Has success boolean
    const response = await login(fields);

    if (!response.success) {
      error = true;
      toast.error(response.errorMessage);
    }

    if (!error) {
      router.push("/user/me");
    }
  }

  return (
    <>
      <ToastContainer />
      <LoginPage loginUser={loginUser} />;
    </>
  );
}
