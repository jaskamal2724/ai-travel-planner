import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { source, destination } = await req.json();

    if (!source || !destination) {
      return NextResponse.json(
        { error: "Missing source or destination in request body." },
        { status: 400 }
      );
    }

    const prompt = `Generate three realistic flight option from ${source} to ${destination}.
Include the airline name, departure time, duration, and estimated price in INR.

Only respond with a valid, clean JSON object — no markdown, no backticks, no explanation. Your JSON must exactly follow this schema:

{
  "Airline": "All Nippon Airways",
  "Departure Time": "23:00",
  "Duration": "9h 10m",
  "Estimated Price in INR": "50,000"
}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const result = response.choices[0].message.content;

    if (!result) {
      return NextResponse.json(
        { error: "OpenAI did not return a result." },
        { status: 500 }
      );
    }

    let parsed;
    try {
      parsed = JSON.parse(result);
    } 
    catch (err) {
      console.log(err)
      return NextResponse.json(
        { error: "Failed to parse OpenAI response as JSON.", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected server error", details:error },
      { status: 500 }
    );
  }
}
