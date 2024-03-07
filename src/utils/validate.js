export const validate = (email, password) => {
  const emailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const passwordValidate =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );

  if (!emailValidate) return "Email Not Valid";

  if (!passwordValidate) return "Password Not Valid";

  return null;
};

// lavavishwa928@gmail.com
