"use client";

import { useState, useEffect } from "react";
import { TravelResults } from "@/components/TravelResults";
import Loader from "@/components/Loader";

export interface TravelResultProps {
  destination: string;
  people: string;
  days: string;
  selectedTripType: string;
}

export const TravelResult = ({
  destination,
  people,
  days,
  selectedTripType,
}: TravelResultProps) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (result) return;

    const fetchData = async () => {
      const payload = { destination, people, days, selectedTripType };

      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
        }

        const resultData = await response.json();
        setResult(resultData);
      } catch (err) {
        console.error(err);
        setError(err as string);
      }
    };

    fetchData();
  }, [destination, people, days, selectedTripType]);

  if (error) return <div>Error: {error}</div>;
  if (!result) return <Loader />;

  return <TravelResults result={result} />;
};

