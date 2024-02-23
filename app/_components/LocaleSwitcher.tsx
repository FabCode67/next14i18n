"use client";

import { locales } from "@/i18nconfig";
import { useLocale } from "next-intl";
import { Locale } from "../types";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});

export default function LocaleSwitcher({
  localeNames,
}: {
  localeNames: Record<Locale, string>;
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value });
  };

  return (
    <div>
      <select
        value={locale}
        onChange={switchLocale}
        className="cursor-pointer appearance-none rounded-md bg-lime-200 bg-[url('/noun-chevron-3255112.svg')] bg-no-repeat py-1 pe-7 ps-2 shadow-sm shadow-lime-950/10 ltr:bg-[101%_50%] rtl:bg-[0%_50%]"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
