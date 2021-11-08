import InputEl from "@/components/InputEl/InputEl";

export default function ProfileModalForm({ func }) {
  return (
    <form onSubmit={func} method="POST">
      <div>
        <label htmlFor="firstname">Prénom</label>
        <InputEl inputName="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">Nom de famille</label>
        <InputEl inputName="lastname" />
      </div>
      <div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <InputEl inputName="username" />
      </div>
      <div>
        <label htmlFor="phone_number">Téléphone</label>
        <InputEl inputName="phone_number" type="tel" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <InputEl inputName="email" type="email" />
      </div>
      <div>
        <label htmlFor="intro">Titre d'utilisateur</label>
        <InputEl inputName="intro" />
      </div>
      <div>
        <label htmlFor="profile">Description</label>
        <textarea
          name="profile"
          id="profile"
          rows="3"
          className="blue-input"
        ></textarea>
      </div>
      <div>
        <label htmlFor="address">Adresse</label>
        <InputEl inputName="address" />
      </div>
      <div>
        <label htmlFor="city">Ville</label>
        <InputEl inputName="city" />
      </div>
      <div>
        <label htmlFor="postal_code">Code postal</label>
        <InputEl inputName="postal_code" />
      </div>
      <div>
        <label htmlFor="gender">Genre</label>
        <select name="gender" id="gender" className="blue-input">
          <option value="M">Homme</option>
          <option value="F">Femme</option>
        </select>
      </div>
      <div>
        <label htmlFor="birth_date">Date de naissance</label>
        <InputEl inputName="birth_date" type="date" />
      </div>
      <button type="submit" className={`btn`}>
        Envoyer
      </button>
    </form>
  );
}
