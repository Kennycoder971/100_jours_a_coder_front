import SignupPage from "@/pagesComponents/SignupPage/SignupPage";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  isEmail,
  isEqual,
  hasEmptyFields,
} from "@/helpers/clientSideValidation";

export default function Signup() {
  const { register } = useContext(AuthContext);

  async function registerUser(fields, evt) {
    let error = false;
    let response;
    const { email, password, password2 } = fields;
    evt.preventDefault();
    if (hasEmptyFields(fields)) {
      error = true;
      toast.error("Veuillez renseigner tous les champs.");
      return evt.preventDefault();
    }

    if (isEmail(email)) {
      error = true;
      toast.error("L'email n'est pas valide.");
      evt.preventDefault();
    }

    if (!isEqual(password, password2)) {
      error = true;
      toast.error("Les mots de passe ne sont pas similaires");
      evt.preventDefault();
    }

    if (!error) {
      // Has success boolean
      response = await register(fields);

      if (!response.success) {
        const errorMessages = response.errors.map((e) => Object.values(e)[0]);
        errorMessages?.forEach((e) => toast.error(e));
      }
    }
    evt.preventDefault();
  }

  return (
    <>
      <ToastContainer />
      <SignupPage registerUser={registerUser} />
    </>
  );
}
