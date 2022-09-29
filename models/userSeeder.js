import bcrypt from 'bcrypt'

export const users = [
  {
    name: 'Pavle Milosavljevic',
    email: 'jugometal@gmail.com',
    password: bcrypt.hashSync('jugometaL35210Divine', 10),
  },
]
