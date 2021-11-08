import Dropzone from "react-dropzone";

export default function ProfileModalFormImages() {
  return (
    <form>
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <b>Modifier la photo de profil</b>
            <p>Glissez et déposez ou cliquez pour sélectionner un fichier</p>
          </div>
        )}
      </Dropzone>

      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
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
