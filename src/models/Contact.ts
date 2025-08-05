class Contact {
  avatar: string
  name: string
  number: string
  email: string
  favorited: boolean

  constructor(
    avatar: string,
    name: string,
    number: string,
    email: string,
    favorited: boolean
  ) {
    this.avatar = avatar
    this.name = name
    this.number = number
    this.email = email
    this.favorited = favorited
  }
}

export default Contact
