import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   setError("Les mots de passe ne correspondent pas.");
    //   return;
    // }

    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });

      setSuccess(true);
      setError(null);
      console.log("Utilisateur enregistré :", response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.detail ||
          "Une erreur est survenue lors de l'inscription."
      );
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-dark-primary">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-dark-secondary">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-dark-primary dark:text-text-primary">
        Créer un compte
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-text-secondary">
        Créez vous un compte pour continuer
        </p>
        {error && (
          <p className="text-sm text-center text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-sm text-center text-green-500">
            Inscription réussie ! Vous pouvez maintenant vous connecter.
          </p>
        )}
        {/* Form */}
        <form className="space-y-4"  onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Entrez votre username"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          {/* <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-text-secondary"
            >
             Confirmer votre Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-2 mt-1 text-sm bg-gray-50 border rounded-md shadow-sm dark:bg-dark-tertiary dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div> */}


          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-text-secondary">
              <input
                type="checkbox"
                className="w-4 h-4 border rounded dark:bg-dark-quaternary dark:border-border-darker"
              />
              <span>Se souvenir de moi</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-semibold text-white rounded-md shadow-md bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-400 dark:shadow-dark-glow"
          >
           Créer un compte
          </button>
        </form>

        {/* Footer */}
      </div>
    </div>
  );
};

export default Register;
