class Contact {
  id: number
  avatar: string
  name: string
  number: string
  email: string
  favorited: boolean

  constructor(
    id: number,
    avatar: string,
    name: string,
    number: string,
    email: string,
    favorited: boolean
  ) {
    this.id = id
    this.avatar = avatar
    this.name = name
    this.number = number
    this.email = email
    this.favorited = favorited
  }
}

export default Contact
