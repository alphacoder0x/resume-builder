import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req) {
  try {
    const { content, type } = await req.json()

    if (!content || !type) {
      return NextResponse.json({ error: "Content and type are required" }, { status: 400 })
    }

    let prompt = ""
    let systemPrompt = ""

    switch (type) {
      case "summary":
        systemPrompt =
          "You are a professional resume writer. Enhance the following professional summary to be concise, impactful, and highlight key strengths."
        prompt = `Enhance this professional summary for a resume: "${content}"`
        break
      case "experience":
        systemPrompt =
          "You are a professional resume writer. Enhance the following job description to be achievement-oriented, using strong action verbs and quantifiable results where possible."
        prompt = `Enhance this job description for a resume: "${content}"`
        break
      case "skills":
        systemPrompt =
          "You are a professional resume writer. Organize and enhance the following skills list to be relevant and impactful."
        prompt = `Enhance and organize this skills list for a resume: "${content}"`
        break
      case "import":
        systemPrompt =
          "You are a professional resume parser. Extract structured information from the following resume text."
        prompt = `Parse the following resume text into structured data: "${content}"`
        break
      default:
        return NextResponse.json({ error: "Invalid enhancement type" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: prompt,
    })

    return NextResponse.json({ enhancedContent: text })
  } catch (error) {
    console.error("AI enhancement error:", error)
    return NextResponse.json({ error: "Failed to enhance content" }, { status: 500 })
  }
}

