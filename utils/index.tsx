import { MAGICAL_TYPES } from "./costants"
import { PotionType } from "@/types/github"


export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type)=> magicalType === type.id)[0].icon
}