export interface PortfolioResumeModel {
  profile: {
    photo?: {
      path: string
    },
    description?: {
      statements: string[]
    },
    contacts: {
      icon?: {
        prefix: string,
        name: string,
        size?: string,
        rotate?: string
      },
      detail: {
        attributeTitle?: string,
        clickAction?: string,
        content: string
      }
    }[]
  },
  biodata: {
    fullName: {
      firstName: string,
      middleName?: string,
      lastName: string
    } | string,
    designation: string
  },
  workExperience: {
    projects: {
      tenure: {
        from: Date,
        to: Date,
        duration?: Date
      },
      description: {
        title: string,
        role: string,
        overviews: string[],
        responsibilities?: string[],
        skills?: string[]
      }
    }[]
  },
  expertise: {
    skillset: {
      type?: string,
      name: string,
      rating: number
    }[],
    certifications: {
      name: string,
      level?: number | string,
      certificationDate: Date,
      expiryDate?: Date | number,
      score: number | string
    }[]
  }
}