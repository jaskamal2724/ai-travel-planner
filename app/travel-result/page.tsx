import { redirect } from "next/navigation";
import  TravelResult  from "./TravelResult";

export default function TravelResultPage({
  searchParams,
}: {
  searchParams: { data: string };
}) {
  if (!searchParams?.data) {
    redirect("/");
  }

  let parsedData;
  try {
    parsedData = JSON.parse(searchParams.data);
  } catch(error){
    console.log(error)
    redirect("/");
  }

  return <TravelResult {...parsedData} />;
}
