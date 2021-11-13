import Dropzone from "react-dropzone";
import { useState, useContext } from "react";
import AuthContext from "@/store/AuthContext";

export default function ProfileModalFormImages() {
  const { user, setUser } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState(undefined);
  const [profileCover, setProfileCover] = useState(undefined);

  const formData = new FormData();

  formData.append("profile_picture", profilePic);
  formData.append("profile_cover", profileCover);
  console.log(formData);
  return (
    <form>
      <Dropzone onDrop={(acceptedFiles) => setProfilePic(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <b>Modifier la photo de profil</b>
            <p>Glissez et déposez ou cliquez pour sélectionner un fichier</p>
          </div>
        )}
      </Dropzone>

      <Dropzone onDrop={(acceptedFiles) => setProfileCover(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <b>Modifier la photo de couverture</b>
            <p>Glissez et déposez ou cliquez pour sélectionner un fichier</p>
          </div>
        )}
      </Dropzone>

      <button type="submit" className={`btn`}>
        Envoyer
      </button>
    </form>
  );
}
