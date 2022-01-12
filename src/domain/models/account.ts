import { AddAccountModel } from '../usecases/add-account'

export interface AccountModel extends AddAccountModel {
  id: string
}
