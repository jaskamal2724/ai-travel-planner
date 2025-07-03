
import { redirect } from "next/navigation";
import { TravelResult } from "./TravelResult";

interface PageProps {
  searchParams: {
    data?: string;
  };
}

export default function TravelResultPage({ searchParams }: PageProps) {
  if (!searchParams.data) {
    redirect("/");
  }

  let parsedData;
  try {
    parsedData = JSON.parse(searchParams.data);
  } catch (err) {
    console.log(err)
    redirect("/"); // Handle invalid JSON by redirecting
  }

  return <TravelResult {...parsedData} />;
}
