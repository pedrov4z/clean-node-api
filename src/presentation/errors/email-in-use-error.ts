export class EmailInUseError extends Error {
  constructor () {
    super('Provided email is already in use')
    this.name = 'EmailInUseError'
  }
}
