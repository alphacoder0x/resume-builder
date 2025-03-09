"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, FileText, User, Settings, LogOut } from "lucide-react"

export default function DashboardPage() {
  const [resumes, setResumes] = useState([
    { id: 1, name: "Software Engineer Resume", template: "Professional", lastUpdated: "2 days ago" },
    { id: 2, name: "Product Manager Resume", template: "Modern", lastUpdated: "1 week ago" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="ResumeAI Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">ResumeAI</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Link href="/resume/new">
            <Button className="gap-1">
              <PlusCircle className="h-4 w-4" />
              New Resume
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="resumes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="resumes">My Resumes</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="resumes" className="space-y-4">
            {resumes.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resumes.map((resume) => (
                  <Link href={`/resume/edit/${resume.id}`} key={resume.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={`/placeholder.svg?height=400&width=300&text=${resume.name}`}
                          alt={resume.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{resume.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {resume.template} • {resume.lastUpdated}
                            </p>
                          </div>
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
                <Link href="/resume/new">
                  <Card className="overflow-hidden border-dashed hover:shadow-md transition-shadow h-full">
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="font-medium">Create New Resume</h3>
                      <p className="text-sm text-muted-foreground mt-1">Choose a template to get started</p>
                    </div>
                  </Card>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No resumes yet</h3>
                <p className="text-muted-foreground mt-1 mb-4">Create your first resume to get started</p>
                <Link href="/resume/new">
                  <Button>Create Resume</Button>
                </Link>
              </div>
            )}
          </TabsContent>
          <TabsContent value="templates" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Link href={`/resume/new?template=${i}`} key={i}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={`/placeholder.svg?height=400&width=300&text=Template%20${i}`}
                        alt={`Resume Template ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Template {i}</h3>
                          <p className="text-sm text-muted-foreground">Professional • Modern</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

