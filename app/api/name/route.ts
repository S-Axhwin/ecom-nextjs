import { redirect } from "next/navigation";

export  async function POST(
  req: Request,
  res: Response
) {
  const data = await req.json()
  console.log(data);
  return new Response("Done")
}
