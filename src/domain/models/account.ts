import { AddAccountModel } from '@/domain/usecases/add-account'

export interface AccountModel extends AddAccountModel {
  id: string
}
