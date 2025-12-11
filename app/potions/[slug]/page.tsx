import { fetchPotion } from "@/lib/github"
import { notFound } from "next/navigation"
import PotionInfo from "@/components/potions/potion-info"

export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "typescript/TypeScript",
  ]
  return popularRepos.map((repo) => ({
    slug: repo.replace("/", "__"), 
  }))
}



export default async function PotionPage({
  params,
}: {
  params: Promise<{slug:string}>
  }) {
  const { slug } = await params
  
  const [owner, repo] = await slug.split("__")
  
  if (!owner || !repo) {
  notFound()
  }
  
  const potion = await fetchPotion(owner, repo)

  if (!potion) {
    notFound()
  }

  return <PotionInfo potion={potion} />
}
