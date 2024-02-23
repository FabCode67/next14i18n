import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col w-full justify-center m-auto self-center bg-gray-200 items-center">
    <div className='flex md:flex-row flex-col w-full justify-center m-auto items-center'>
      <div className='w-fit p-4 flex m-auto'>
        <h1 className='text-sm text-blue-600'>
        {t("content")}
        </h1>
      </div>
      <div className='w-fit p-4 flex m-auto'>
        <h1 className='text-sm'>
        {t("copyright")}
        </h1>
      </div>
    </div>
    </div>
  )
}

export default Footer