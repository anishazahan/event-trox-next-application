import { registerUser } from "@/app/Actions";

const RegistrationForm = () => {
  return (
    <form className="login-form" action={registerUser}>
      <div>
        <label htmlFor="name">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input className="bg-transparent outline-none bg-black border" required type="text" name="name" id="name" />
      </div>

      <div>
        <label htmlFor="email">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input className="bg-transparent outline-none bg-black border" required type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">
          Password <span className="text-red-600">*</span>
        </label>
        <input
          className="bg-transparent outline-none bg-black border"
          required
          type="password"
          name="password"
          id="password"
        />
      </div>

      <div>
        <label htmlFor="phone">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input className="bg-transparent outline-none bg-black border" required type="tel" name="phone" id="phone" />
      </div>

      <div>
        <label htmlFor="bio">
          Bio <span className="text-red-600">*</span>
        </label>
        <input
          className="bg-transparent outline-none bg-black border min-h-16"
          required
          type="text"
          name="bio"
          id="bio"
        />
      </div>

      <button type="submit" className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
