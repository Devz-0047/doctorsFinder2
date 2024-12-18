interface CardProps {
  image: string;
  name: string;
  expertise: string;
  experience: number;
  languages: string;
  fees: number;
}
import { CiChat1 } from "react-icons/ci";
import { HiOutlineLink } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
function Card({
  image,
  name,
  expertise,
  experience,
  languages,
  fees,
}: CardProps): React.JSX.Element {
  return (
    <div className="bg-primary h-[600px] w-[372px] rounded-2xl flex flex-col items-center justify-center gap-4 shadow-lg">
      <img
        src={image}
        alt="Doctor Image"
        className="w-[149px] rounded-full h-[154px]"
      />
      <h2 className="text-3xl text-[#2E2F2E] font-nunito font-semibold">{`Dr. ${name}`}</h2>
      <div className="text-[#646665] flex flex-col items-start gap-2">
        <div className="flex items-center gap-2 text-base">
          <HiOutlineLink className="text-lg" />
          <p>{expertise}</p>
        </div>
        <div className="flex items-center gap-2 text-base">
          <LuGraduationCap className="text-lg" />
          <p>{experience} 7 years of Experience</p>
        </div>
        <div className="flex items-center gap-2 text-base">
          <CiChat1 className="text-lg" />
          <p>Speaks: {languages}</p>
        </div>
      </div>
      <div className="text-base text-[#3C3C3C] flex gap-2 font-nunito ">
        <div className="w-[160px] border border-highlight py-1 px-2 font-semibold rounded-lg flex flex-col items-center justify-center pt-2">
          <p>Video Consultation</p>
          {fees}
        </div>
        <div className="w-[160px] border border-highlight py-1 px-2 font-semibold rounded-lg flex flex-col items-center justify-center">
          <p>Chat Consultation</p>
          Free
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <button className="py-3 text-lg font-semibold bg-white border rounded-2xl px-28 text-highlight font-nunito border-highlight">
          View Profile
        </button>
        <button className="px-[5.1rem] py-3 text-lg font-semibold bg-highlight border rounded-2xl text-white font-nunito ">
          Book a Consultation
        </button>
      </div>
    </div>
  );
}

export default Card;
