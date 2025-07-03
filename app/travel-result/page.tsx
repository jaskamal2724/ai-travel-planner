import { redirect } from "next/navigation";
import TravelResult from "./TravelResult";

export default async function TravelResultPage({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  if (!resolvedSearchParams?.data) {
    redirect("/");
  }

  let parsedData;
  try {
    parsedData = JSON.parse(resolvedSearchParams.data);
  } catch (error) {
    console.log(error);
    redirect("/");
  }

  return <TravelResult {...parsedData} />;
}