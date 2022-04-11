import { AppFaIconModel } from '@shared/models/fa-icon.model'

export interface NavbarAssetsModel {
  id: string
  items: {
    icon: AppFaIconModel
    label: string
  }[]
}

export const INITIAL_ASSETS_MODEL: NavbarAssetsModel = {
  id: '',
  items: []
}
