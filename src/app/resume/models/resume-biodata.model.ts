import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/assets/app-assets.model'

interface ResumeBiodataNameModel {
  first: string | null
  last: string | null
}

export interface ResumeBiodataModel {
  photo: AppImageModel,
  name: ResumeBiodataNameModel
  title: string | null
  about: string | null
}

export interface ResumeBiodataAssetsModel { }

const INITIAL_NAME_MODEL: ResumeBiodataNameModel = {
  first: null, last: null
}

export const INITIAL_BIODATA_MODEL: ResumeBiodataModel = {
  photo: { ...INITIAL_IMAGE_MODEL }, name: { ...INITIAL_NAME_MODEL }, title: null, about: null
}

export const INITIAL_BIODATA_ASSETS_MODEL: ResumeBiodataAssetsModel = {}
