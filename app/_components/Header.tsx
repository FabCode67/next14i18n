import { useTranslations } from "next-intl";
import useLocaleNames from "../_hooks/useLocaleNames";
import LocaleSwitcher from "./LocaleSwitcher";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/i18nconfig";

export default function Header() {
  const t = useTranslations("Header");
  const localeNames = useLocaleNames();
  const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});

  return (
    <header className=" bg-lime-100 md:px-12 px-2 pb-2 pt-1 shadow-sm w-full shadow-lime-950/5">
      <div className="mx-auto flex w-full items-center justify-between">
        <div className="flex justify-between w-full m-auto items-center">
          <Link href="/" className="flex items-center font-semibold">
            {t("home")}
          </Link>
          <Link href="/about" className="flex items-center font-semibold">
            {t("about")}
          </Link>
        <div>
          <LocaleSwitcher localeNames={localeNames} />
        </div>
        </div>
      </div>
    </header>
  );
}
