"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function NewResumePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preSelectedTemplate = searchParams.get("template")
  const [selectedTemplate, setSelectedTemplate] = useState(
    preSelectedTemplate ? Number.parseInt(preSelectedTemplate) : null,
  )

  const handleContinue = () => {
    if (selectedTemplate) {
      router.push(`/resume/edit/new?template=${selectedTemplate}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Choose a Template</h1>
          <p className="text-muted-foreground mb-8">
            Select a template to start building your resume. You can change the template later.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className={`overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === i ? "ring-2 ring-primary" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedTemplate(i)}
              >
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
            ))}
          </div>

          <div className="flex justify-end">
            <Button onClick={handleContinue} disabled={!selectedTemplate} size="lg">
              Continue with Selected Template
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

