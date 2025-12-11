import PotionInfo from "@/components/potions/potion-info"
import { notFound } from "next/navigation";
import { fetchRandomTrendingPotion } from "@/lib/github";
import { ORIGIN_URL } from "@/utils";

export const generateMetadata = async () => {
  const potion = await fetchRandomTrendingPotion();

  return {
    title: `Mystery Potion - ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/mystery-potion`,
    },
  };
};

export default async function MysteryPotion() {

  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
      notFound()
  }
  
  return (
    <PotionInfo potion={potion} />
  )
}