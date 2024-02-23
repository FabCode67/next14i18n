'use client';

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Home");
  return (
    <div className="flex w-full flex-grow justify-center items-center m-auto">
      <h1 className="md:text-4xl text-xl md:px-12 px-3">
        {t("name")}
      </h1>
    </div>
  )
}

export default Page