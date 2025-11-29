import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres "OceanAI", un experto amigable y científico en el consumo de agua de mar (talasoterapia).
Tu tono debe ser refrescante, puro, confiable y alentador.
Responde preguntas sobre:
1. Diferencias entre agua isotónica (diluida) e hipertónica (pura).
2. Beneficios minerales (magnesio, calcio, potasio).
3. Cómo beberla de forma segura.
4. Recetas simples (ej. limonada con agua de mar).

Si te preguntan algo fuera de este tema, redirige suavemente la conversación al bienestar y el mar.
Mantén las respuestas concisas (máximo 3 párrafos cortos) y usa emojis marinos ocasionalmente 🌊.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!apiKey) {
    return "Lo siento, la conexión con el océano (API Key) no está configurada actualmente.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Lo siento, hubo un murmullo en las olas y no pude entenderte.";
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return "Hubo un error temporal conectando con nuestra base de conocimiento marino.";
  }
};