import Link from "next/link";
import { MAGICAL_TYPES } from "@/utils/constants";
import { cn } from "@/lib/utils";
import { getFilterPillColor } from "@/utils";

export function PotionFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      {MAGICAL_TYPES.map(({ id, icon, label }) => (
        <Link
          href={id === "all" ? "/" : `?type=${id}`}
          key={id}
          className={cn(
            `filter-pill flex items-center gap-2 bg-gradient-to-br  to-transparent`,
            getFilterPillColor(id)
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
}
