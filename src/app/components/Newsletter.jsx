import { newsletterContent } from "../data/homeContent";

export default function Newsletter() {
  return (
    <div className='bg-white h-50 flex justify-center items-center gap-10'>
      <p className='text-4xl font-bold font-sans'>{newsletterContent.title}</p>

      {/* Input aur Button ka Relative Wrapper Container */}
      <div className='relative flex items-center w-150 h-15'>
        <input
          type='email'
          required
          placeholder={newsletterContent.placeholder}
          className='border-2 h-full w-full rounded-4xl pl-10 pr-44 outline-none border-orange-400'
        />
        <button className='absolute right-1 bg-[#071C3B] h-13 w-40 rounded-4xl text-[#6FCADD] font-bold cursor-pointer hover:bg-blue-600 transition-colors'>
          {newsletterContent.buttonText}
        </button>
      </div>
    </div>
  );
}