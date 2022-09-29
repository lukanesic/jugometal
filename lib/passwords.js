import { compare } from 'bcrypt'

export const comparePasswords = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword)
  return isValid
}
