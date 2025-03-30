"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Wand2, Save, Eye } from "lucide-react"
import ResumePreview from "@/components/resume-preview"

export default function EditResumePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const isNew = params.id === "new"
  const templateId = searchParams.get("template") || "1"

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [
      {
        id: 1,
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: "",
  })

  const enhanceWithAI = (field, content) => {
    // In a real app, this would call the Gemini API
    console.log(`Enhancing ${field} with AI: ${content}`)

    // Simulate AI enhancement
    if (field === "summary") {
      const enhancedContent =
        "Experienced software engineer with a passion for building scalable web applications. Proficient in JavaScript, TypeScript, React, and Node.js. Strong problem-solving skills and a track record of delivering high-quality code on time."

      setResumeData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          summary: enhancedContent,
        },
      }))
    }
  }

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }))
  }

  const handleExperienceChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }))
  }

  const handleEducationChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    }))
  }

  const addExperience = () => {
    const newId = Math.max(0, ...resumeData.experience.map((e) => e.id)) + 1
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: newId,
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const addEducation = () => {
    const newId = Math.max(0, ...resumeData.education.map((e) => e.id)) + 1
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: newId,
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const handleImportResume = () => {
    const sampleResume = `
    John Doe
    Software Engineer
    john.doe@example.com
    (123) 456-7890
    San Francisco, CA

    EXPERIENCE
    Senior Software Engineer
    ABC Tech, San Francisco, CA
    January 2020 - Present
    Led development of a React-based web application with over 100,000 monthly active users.

    Software Engineer
    XYZ Corp, San Francisco, CA
    June 2017 - December 2019
    Developed and maintained RESTful APIs using Node.js and Express.

    EDUCATION
    Master of Computer Science
    Stanford University
    2015 - 2017

    Bachelor of Science in Computer Engineering
    University of California, Berkeley
    2011 - 2015

    SKILLS
    JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL, Git, AWS
    `

    // In a real app, this would parse the resume text and extract structured data
    // For this example, we'll just set some sample data
    setResumeData({
      personalInfo: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(123) 456-7890",
        location: "San Francisco, CA",
        summary: "Experienced software engineer with a passion for building scalable web applications.",
      },
      experience: [
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "ABC Tech",
          location: "San Francisco, CA",
          startDate: "January 2020",
          endDate: "Present",
          description: "Led development of a React-based web application with over 100,000 monthly active users.",
        },
        {
          id: 2,
          title: "Software Engineer",
          company: "XYZ Corp",
          location: "San Francisco, CA",
          startDate: "June 2017",
          endDate: "December 2019",
          description: "Developed and maintained RESTful APIs using Node.js and Express.",
        },
      ],
      education: [
        {
          id: 1,
          degree: "Master of Computer Science",
          school: "Stanford University",
          location: "Stanford, CA",
          startDate: "2015",
          endDate: "2017",
          description: "",
        },
        {
          id: 2,
          degree: "Bachelor of Science in Computer Engineering",
          school: "University of California, Berkeley",
          location: "Berkeley, CA",
          startDate: "2011",
          endDate: "2015",
          description: "",
        },
      ],
      skills: "JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL, Git, AWS",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{isNew ? "Create New Resume" : "Edit Resume"}</h1>
              <Button variant="outline" onClick={handleImportResume} className="gap-1">
                Import Resume
              </Button>
            </div>

            <Tabs defaultValue="personal" className="space-y-4">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={resumeData.personalInfo.name}
                      onChange={handlePersonalInfoChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={resumeData.personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={resumeData.personalInfo.location}
                      onChange={handlePersonalInfoChange}
                      placeholder="City, State"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1 text-xs"
                        onClick={() => enhanceWithAI("summary", resumeData.personalInfo.summary)}
                      >
                        <Wand2 className="h-3 w-3" />
                        Enhance with AI
                      </Button>
                    </div>
                    <Textarea
                      id="summary"
                      name="summary"
                      value={resumeData.personalInfo.summary}
                      onChange={handlePersonalInfoChange}
                      placeholder="Write a brief summary of your professional background and goals"
                      rows={4}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <Card key={exp.id}>
                    <CardContent className="pt-6">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`job-title-${exp.id}`}>Job Title</Label>
                          <Input
                            id={`job-title-${exp.id}`}
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(exp.id, "title", e.target.value)}
                            placeholder="Software Engineer"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`company-${exp.id}`}>Company</Label>
                          <Input
                            id={`company-${exp.id}`}
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`job-location-${exp.id}`}>Location</Label>
                          <Input
                            id={`job-location-${exp.id}`}
                            value={exp.location}
                            onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                            placeholder="City, State"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                            <Input
                              id={`start-date-${exp.id}`}
                              value={exp.startDate}
                              onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                              placeholder="Jan 2020"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`end-date-${exp.id}`}>End Date</Label>
                            <Input
                              id={`end-date-${exp.id}`}
                              value={exp.endDate}
                              onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                              placeholder="Present"
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor={`job-description-${exp.id}`}>Description</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 gap-1 text-xs"
                              onClick={() => enhanceWithAI(`experience-${exp.id}`, exp.description)}
                            >
                              <Wand2 className="h-3 w-3" />
                              Enhance with AI
                            </Button>
                          </div>
                          <Textarea
                            id={`job-description-${exp.id}`}
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                            placeholder="Describe your responsibilities and achievements"
                            rows={4}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" onClick={addExperience} className="w-full">
                  Add Another Experience
                </Button>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                {resumeData.education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="pt-6">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                          <Input
                            id={`degree-${edu.id}`}
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                            placeholder="Bachelor of Science in Computer Science"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`school-${edu.id}`}>School</Label>
                          <Input
                            id={`school-${edu.id}`}
                            value={edu.school}
                            onChange={(e) => handleEducationChange(edu.id, "school", e.target.value)}
                            placeholder="University Name"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`edu-location-${edu.id}`}>Location</Label>
                          <Input
                            id={`edu-location-${edu.id}`}
                            value={edu.location}
                            onChange={(e) => handleEducationChange(edu.id, "location", e.target.value)}
                            placeholder="City, State"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor={`edu-start-date-${edu.id}`}>Start Date</Label>
                            <Input
                              id={`edu-start-date-${edu.id}`}
                              value={edu.startDate}
                              onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                              placeholder="2016"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor={`edu-end-date-${edu.id}`}>End Date</Label>
                            <Input
                              id={`edu-end-date-${edu.id}`}
                              value={edu.endDate}
                              onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                              placeholder="2020"
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`edu-description-${edu.id}`}>Description (Optional)</Label>
                          <Textarea
                            id={`edu-description-${edu.id}`}
                            value={edu.description}
                            onChange={(e) => handleEducationChange(edu.id, "description", e.target.value)}
                            placeholder="Relevant coursework, honors, etc."
                            rows={3}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" onClick={addEducation} className="w-full">
                  Add Another Education
                </Button>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="skills">Skills</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 text-xs"
                      onClick={() => enhanceWithAI("skills", resumeData.skills)}
                    >
                      <Wand2 className="h-3 w-3" />
                      Enhance with AI
                    </Button>
                  </div>
                  <Textarea
                    id="skills"
                    value={resumeData.skills}
                    onChange={(e) => setResumeData((prev) => ({ ...prev, skills: e.target.value }))}
                    placeholder="List your skills, separated by commas (e.g., JavaScript, React, Node.js)"
                    rows={6}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4">Preview</h2>
              <div className="border rounded-lg overflow-hidden bg-white">
                <ResumePreview templateId={Number.parseInt(templateId)} resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

