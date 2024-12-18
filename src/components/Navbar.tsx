function Navbar(): JSX.Element {
  return (
    <div className="bg-primary h-[94px] font-roboto font-medium flex items-center justify-around fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between gap-16">
        <img src="/logo.png" className="w-[259px] h-[49px]" />
        <ul className="text-xl text-[#474747] flex items-center justify-around gap-10 ">
          <li>
            <a>Home</a>
          </li>
          <li className="font-semibold cursor-pointer text-highlight">
            <a>Find Doctors</a>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-[37px] border-2 border-highlight py-[10px] text-xl rounded-lg text-highlight font-medium ">
          Login
        </button>
        <button className="px-[37px] border-2 py-[12px] text-xl bg-highlight text-white rounded-lg font-medium">
          Sign-up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
