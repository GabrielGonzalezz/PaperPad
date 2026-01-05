
import { GoogleGenAI } from "@google/genai";
// FIX: The EnhancementType is now correctly defined in the types file.
import { EnhancementType } from "../types";

const PROMPTS: Record<EnhancementType, string> = {
  [EnhancementType.SUMMARIZE]: `You are a professional summarizer. Provide a concise summary of the following text, capturing the key points. Do not add any preamble, just return the summary.`,
};

export const runEnhancement = async (type: EnhancementType, text: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const fullPrompt = `${PROMPTS[type]}\n\n---\n\nTEXT:\n\`\`\`\n${text}\n\`\`\``;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: fullPrompt,
    });
    
    if (response.text) {
        return response.text.trim();
    } else {
        throw new Error("Received an empty response from the API.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate content from Gemini API.");
  }
};