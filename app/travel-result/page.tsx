"use client";

import { useSearchParams } from "next/navigation";
import { TravelResults } from "@/components/TravelResults";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const TravelResult = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("")

  useEffect(() => {
    if(result) return
    
    const fetchData = async () => {
      try {
        // Parse the JSON string from query
        const data = dataParam ? JSON.parse(dataParam) : null;

        if (!data) {
          console.log("No data provided")
          setError("no data provided")
          return;
        }

        const response = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
        }

        const resultData = await response.json();
        setResult(resultData);
      } 
      catch (err) {
        setError(err as string)
        console.log(err)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!result) {
    return(
      <div>
        <Loader/>
      </div>
    );
  }

  return <TravelResults result={result} />;
};

export default TravelResult;


