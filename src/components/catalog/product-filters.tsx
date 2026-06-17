"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFiltersProps {
  category: string;
  priceRange: number[];
  sort: string;
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: number[]) => void;
  onSortChange: (value: string) => void;
}

const categories = [
  { id: "all", key: "all" },
  { id: "homme", key: "homme" },
  { id: "femme", key: "femme" },
  { id: "niche", key: "niche" },
  { id: "coffrets", key: "coffrets" },
] as const;

const sortOptions = [
  { value: "popularity", key: "popularity" },
  { value: "price_asc", key: "price_asc" },
  { value: "price_desc", key: "price_desc" },
  { value: "name", key: "name" },
] as const;

export default function ProductFilters({
  category,
  priceRange,
  sort,
  onCategoryChange,
  onPriceChange,
  onSortChange,
}: ProductFiltersProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <Tabs
        value={category}
        onValueChange={onCategoryChange}
        className="w-full"
      >
        <TabsList className="w-full flex-wrap justify-start gap-1 bg-muted/50 p-1">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="data-[state=active]:bg-gold data-[state=active]:text-white"
            >
              {t(`catalog.filters.${cat.key}`)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-64">
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
            {t("catalog.filters.price_max")} €{priceRange[0]}
          </label>
          <Slider
            value={priceRange}
            onValueChange={onPriceChange}
            min={20}
            max={300}
            step={10}
          />
        </div>

        <div className="w-full sm:w-48">
          <Select value={sort} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder={t("catalog.filters.sort.popularity")} />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {t(`catalog.filters.sort.${opt.key}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
