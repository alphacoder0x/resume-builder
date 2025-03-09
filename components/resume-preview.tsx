interface ResumeData {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    summary: string
  }
  experience: {
    id: number
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
  }[]
  education: {
    id: number
    degree: string
    school: string
    location: string
    startDate: string
    endDate: string
    description: string
  }[]
  skills: string
}

interface ResumePreviewProps {
  templateId: number
  resumeData: ResumeData
}

export default function ResumePreview({ templateId, resumeData }: ResumePreviewProps) {
  // Different templates would have different layouts
  switch (templateId) {
    case 1:
      return <ModernTemplate resumeData={resumeData} />
    case 2:
      return <MinimalTemplate resumeData={resumeData} />
    default:
      return <ModernTemplate resumeData={resumeData} />
  }
}

function ModernTemplate({ resumeData }: { resumeData: ResumeData }) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="p-8 font-sans text-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.name || "Your Name"}</h1>
        <div className="flex justify-center flex-wrap gap-x-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.some((exp) => exp.title || exp.company) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Experience</h2>
          {experience.map((exp) =>
            exp.title || exp.company ? (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{exp.title || "Position"}</h3>
                  <span className="text-sm">
                    {exp.startDate && exp.endDate ? `${exp.startDate} - ${exp.endDate}` : ""}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-gray-700">
                    {exp.company || "Company"}
                    {exp.location ? `, ${exp.location}` : ""}
                  </h4>
                </div>
                {exp.description && <p className="mt-1">{exp.description}</p>}
              </div>
            ) : null,
          )}
        </div>
      )}

      {/* Education */}
      {education.some((edu) => edu.degree || edu.school) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Education</h2>
          {education.map((edu) =>
            edu.degree || edu.school ? (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{edu.degree || "Degree"}</h3>
                  <span className="text-sm">
                    {edu.startDate && edu.endDate ? `${edu.startDate} - ${edu.endDate}` : ""}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-gray-700">
                    {edu.school || "School"}
                    {edu.location ? `, ${edu.location}` : ""}
                  </h4>
                </div>
                {edu.description && <p className="mt-1">{edu.description}</p>}
              </div>
            ) : null,
          )}
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div>
          <h2 className="text-lg font-bold border-b pb-1 mb-2">Skills</h2>
          <p>{skills}</p>
        </div>
      )}
    </div>
  )
}

function MinimalTemplate({ resumeData }: { resumeData: ResumeData }) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="p-8 font-sans text-sm">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.name || "Your Name"}</h1>
        <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.some((exp) => exp.title || exp.company) && (
        <div className="mb-6">
          <h2 className="uppercase text-sm font-bold tracking-wider mb-2">Experience</h2>
          {experience.map((exp) =>
            exp.title || exp.company ? (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{exp.title || "Position"}</h3>
                  <span className="text-sm">
                    {exp.startDate && exp.endDate ? `${exp.startDate} - ${exp.endDate}` : ""}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-gray-700">
                    {exp.company || "Company"}
                    {exp.location ? `, ${exp.location}` : ""}
                  </h4>
                </div>
                {exp.description && <p className="mt-1">{exp.description}</p>}
              </div>
            ) : null,
          )}
        </div>
      )}

      {/* Education */}
      {education.some((edu) => edu.degree || edu.school) && (
        <div className="mb-6">
          <h2 className="uppercase text-sm font-bold tracking-wider mb-2">Education</h2>
          {education.map((edu) =>
            edu.degree || edu.school ? (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{edu.degree || "Degree"}</h3>
                  <span className="text-sm">
                    {edu.startDate && edu.endDate ? `${edu.startDate} - ${edu.endDate}` : ""}
                  </span>
                </div>
                <h4 className="text-gray-700">
                  {edu.school || "School"}
                  {edu.location ? `, ${edu.location}` : ""}
                </h4>
                {edu.description && <p className="mt-1">{edu.description}</p>}
              </div>
            ) : null,
          )}
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div>
          <h2 className="uppercase text-sm font-bold tracking-wider mb-2">Skills</h2>
          <p>{skills}</p>
        </div>
      )}
    </div>
  )
}

