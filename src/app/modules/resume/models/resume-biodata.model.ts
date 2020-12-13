import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/assets/app-assets.model'

interface ResumeBiodataNameModel {
  first: string | null
  last: string | null
}

interface ResumeBiodataTechnologyModel {
  name: string | null
  icon: AppImageModel
}

interface ResumeBiodataStackModel {
  name: string | null
  technologies: ResumeBiodataTechnologyModel[]
}

interface ResumeBiodataAssetModel {
  name: ResumeBiodataNameModel
  title: string | null
  about: string | null
}

export interface ResumeBiodataModel {
  photo: AppImageModel
  asset: ResumeBiodataAssetModel
  stack: ResumeBiodataStackModel
}

const INITIAL_RESUME_BIODATA_NAME: ResumeBiodataNameModel = {
  first: null, last: null
}

const INITIAL_RESUME_BIODATA_TECHNOLOGY: ResumeBiodataTechnologyModel = {
  name: null, icon: { ...INITIAL_IMAGE_MODEL }
}

const INITIAL_RESUME_BIODATA_ASSET: ResumeBiodataAssetModel = {
  name: { ...INITIAL_RESUME_BIODATA_NAME }, about: null, title: null
}

const INITIAL_RESUME_BIODATA_STACK: ResumeBiodataStackModel = {
  name: null, technologies: [{ ...INITIAL_RESUME_BIODATA_TECHNOLOGY }]
}

export const INITIAL_RESUME_BIODATA: ResumeBiodataModel = {
  photo: { ...INITIAL_IMAGE_MODEL }, asset: { ...INITIAL_RESUME_BIODATA_ASSET }, stack: { ...INITIAL_RESUME_BIODATA_STACK }
}
