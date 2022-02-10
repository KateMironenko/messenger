// [1, 2, 3, 4] => 1

export function validate(name: string, value: string): undefined | boolean {
  if (name === "login") {
    return /(?!^\d+$)^[A-Za-z0-9]{3,20}$/.test(value);
  }
  if (name === "password" || name === "second_password" || name === "oldPassword") {
    return /^(?=.*\d)(?=.*[A-Z]).{8,40}$/.test(value);
  }
  if (name === "first_name" || name === "second_name") {
    return /[A-Za-zА-Яа-я]+$/.test(value);
  }
  if (name === "phone") {
    return /^\+?\d{10,15}$/.test(value);
  }
  if (name === "email") {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(
      value
    );
  }

  return true
}
