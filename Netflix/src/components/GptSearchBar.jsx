import { useSelector } from "react-redux"
import lang from "../utils/languageConstant"

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
         <form className='w-1/2 shadow-black grid grid-cols-12 rounded-lg'>
            <input type="text"
             className='p-4 m-2 rounded-lg col-span-9 bg-white'
             placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='col-span-3 py-2 m-2 px-4 bg-red-700 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
         </form>
    </div>
  )
}

export default GptSearchBar