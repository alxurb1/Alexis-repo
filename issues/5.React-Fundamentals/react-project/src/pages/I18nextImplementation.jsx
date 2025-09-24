import { useTranslation } from "react-i18next";

export default function I18nImpl() {
	const { t, i18n } = useTranslation();

	return (
		<div className='flex flex-col items-center gap-3'>
			<h1 className='text-3xl font-bold text-gray-800 mb-4 text-center'>
				{t("bio_title")}
			</h1>
			<p className='text-lg text-gray-600 leading-relaxed max-w-2xl text-center mb-4'>
				{t("bio_description")}
			</p>

			<button
				onClick={() => i18n.changeLanguage("es")}
				className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition active:bg-blue-700 active:scale-95 '
			>
				ES
			</button>
			<button
				onClick={() => i18n.changeLanguage("en")}
				className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition active:bg-red-700 active:scale-95 '
			>
				EN
			</button>
		</div>
	);
}
