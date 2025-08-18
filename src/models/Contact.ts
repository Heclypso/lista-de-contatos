class Contact {
  id: number
  avatar: string
  name: string
  number: string
  email: string
  favorited: boolean
  lastCall: number

  constructor(
    id: number,
    avatar: string,
    name: string,
    number: string,
    email: string,
    favorited: boolean,
    lastCall: number
  ) {
    this.id = id
    this.avatar = avatar
    this.name = name
    this.number = number
    this.email = email
    this.favorited = favorited
    this.lastCall = lastCall
  }
}

export default Contact
