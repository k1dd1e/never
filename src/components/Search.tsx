import { IoIosSearch } from "react-icons/io";


export default function Search() {
  return (
    <div>
      <div className=" rounded-full flex items-center bg-[#282828] text-[#565656]">
        <button className="absolute ml-4">
          <IoIosSearch className="w-6 h-6" />
        </button>
        <input type="text" placeholder="Search..." className="placeholder:text-[#565656] font-medium rounded-full w-full py-3 pr-6 pl-14 border-none focus:outline-none bg-transparent" />
      </div>
    </div>
  )
}