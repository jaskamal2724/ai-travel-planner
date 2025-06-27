import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const example = {
  destination: "Manali, Himachal Pradesh",
  days: 5,
  budget: 50000,
  tripType: "adventure",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Local Exploration",
      budget: 8000,
      activities: [
        "Check-in at hotel",
        "Visit Hadimba Temple",
        "Explore Mall Road"
      ]
    },
    {
      day: 2,
      title: "Solang Valley Adventure",
      budget: 12000,
      activities: [
        "Drive to Solang Valley",
        "Paragliding & Ziplining",
        "Visit Anjani Mahadev"
      ]
    },
    {
      day: 3,
      title: "Rohtang Pass Excursion",
      budget: 11000,
      activities: [
        "Early morning trip to Rohtang Pass",
        "Snow activities & photography",
        "Back to hotel & relax"
      ]
    },
    {
      day: 4,
      title: "Cultural & Scenic Sights",
      budget: 9000,
      activities: [
        "Naggar Castle visit",
        "River rafting in Beas River",
        "Try local Himachali cuisine"
      ]
    },
    {
      day: 5,
      title: "Departure",
      budget: 1000,
      activities: [
        "Check-out from hotel",
        "Last-minute shopping",
        "Drive back to Chandigarh"
      ]
    }
  ],
  alternatives: [
    {
      city: "Kasol",
      reason: "Perfect for nature lovers and peaceful getaways"
    },
    {
      city: "Dharamshala",
      reason: "Great blend of Tibetan culture and scenic views"
    },
    {
      city: "Rishikesh",
      reason: "Adventure-packed and spiritually enriching"
    }
  ]
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { destination, people, days, selectedTripType } = body;

 const system_prompt = `
  You are a strict JSON generator for a travel planning application.

  Only respond with a **valid, clean JSON object** — no markdown, no backticks, no explanation. Your JSON must exactly follow this schema:

  {
    "destination": string,
    "people":string,
    "days": number,
    "budget": number,
    "tripType": string,
    "best_time_to_visit_destination":string,
    "best_time_to_book_flights":string
    "itinerary": [
      {
        "day": number,
        "title": string,
        "budget": number,
        "activities": string[]
      }
    ],
    "alternatives": [
      {
        "city": string,
        "reason": string,
      }
    ],
    "instagram_worthy_spots":[
        {
          "name":string,
          "description":string,
          "best_time":string (eg '6:00 PM - 7:30 PM'),
          "difficulty":string (enum :easy, medium, hard),
          "tags":string,
          "likes":string,
          "category":string,
        }
    ]
  }

  Rules:
  - Calculate total budget in INR according to the person count , it should be minimun budget which atleast this much is required 
  - images url must be reachable , they should not show 404 error when visited
  - Also remember trip type while generating travel plan
  - Every day in "itinerary" **must include** a "budget".
  - Every "alternative" **must include** a "city" and "reason".
  - Use plain JSON. Do **not** include backticks, markdown, or any extra explanation.

  User Input:
  destination = "${destination}"
  person count:${people}
  days = ${days}
  tripType = "${selectedTripType}"

  Generate a travel plan now.
  `;

  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: system_prompt }],
  });

  const content = completion.choices[0].message.content || "";
  const jsonString = content.replace(/```json|```/g, "").trim();

  // const response = await ai.models.generateContent({
  //   model: "gemini-2.5-flash",
  //   contents: system_prompt,
  //   config: {
  //     thinkingConfig: {
  //       thinkingBudget: 0,
  //     },
  //   }
  // });

  try {
    const parsed = JSON.parse(jsonString);
    return NextResponse.json(parsed, { status: 200 });
  } catch (e) {
    console.error("Failed to parse JSON", e);
    return NextResponse.json({ error: "Invalid JSON format from OpenAI" }, { status: 500 });
  }
}
