'use client';
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
    <div className="flex md:px-10 w-full h-screen justify-center items-center m-auto">
      <h1 className="lg:text-lg md:text-base text-sm font-semibold">
        {t("content")}
      </h1>
    </div>
  )
}

export default About