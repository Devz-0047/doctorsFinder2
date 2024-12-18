import { RxCross2 } from "react-icons/rx";
function AppliedFilter() {
  return (
    <div className="flex justify-end gap-4 mt-10 mr-28 item-center font-inter">
      <div className="flex items-center justify-center px-5 py-2 rounded-full bg-secondary">
        <p>Hair Care</p>{" "}
        <button>
          <RxCross2 className="text-xl" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary">
        <p>Female</p>{" "}
        <div className="text-xl">
          <RxCross2 />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary">
        <p>Rs.0-Rs.500</p>{" "}
        <div className="text-xl">
          <RxCross2 />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary">
        <p>Hindi</p>{" "}
        <div className="text-xl">
          <RxCross2 />
        </div>
      </div>
    </div>
  );
}

export default AppliedFilter;
