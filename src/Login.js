import React, { useState } from "react";
import './Login.css';


const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "L'email est requis.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "L'email n'est pas valide.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    console.log("Connexion réussie :", { email, password });

    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>
          Mot de passe :
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showPassword ? "👁️" : "👁️"} {/* Icône seule sans texte */}
            </button>
          </div>
        </label>
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
