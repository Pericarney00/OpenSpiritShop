import PotionInfo from "@/components/potions/potion-info"
import { notFound } from "next/navigation";
import { fetchRandonTrendingPotion } from "@/lib/github";

export default async function MysteryPotion() {

  const potion = await fetchRandonTrendingPotion();

  if (!potion) {
      notFound()
  }
  
  return (
    <PotionInfo potion={potion} />
  )
}