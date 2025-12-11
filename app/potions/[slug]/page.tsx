import { fetchPotion } from "@/lib/github"
import { notFound } from "next/navigation"
import PotionInfo from "@/components/potions/potion-info"
import { ORIGIN_URL } from "@/utils";

type MetadataParams = {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({params}:MetadataParams) => {
  const { slug } = await params;

  const [owner, repo] = await slug.split("__");

  const potion = await fetchPotion(owner, repo);

  return {
    title: `${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/potions/${owner}__${repo} `,
    },
  };
};


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
