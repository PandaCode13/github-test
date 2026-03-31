import { Link } from "react-router-dom";

function Inscription() {
  return (
    <main>
      <h1>Inscription</h1>
      <p>Créez votre compte en remplissant le formulaire ci-dessous.</p>

      <form>
        <div>
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" />
        </div>

        <div>
          <label htmlFor="prenom">Prenom</label>
          <input id="prenom" name="prenom" type="text" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </div>

        <div>
          <label htmlFor="telephone">Telephone</label>
          <input id="telephone" name="telephone" type="tel" />
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      <Link to="/connexion">Déjà un compte ? Connectez-vous</Link>
    </main>
  );
}

export default Inscription;
