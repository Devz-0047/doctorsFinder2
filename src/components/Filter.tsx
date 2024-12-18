function Filter(): React.JSX.Element {
  return (
    <div className="bg-white h-[72px]  border-b flex items-center justify-center">
      <form className="flex items-center justify-center gap-10 font-roboto text-[#585858]">
        <select className="bg-[#F3F3F3]  pl-4 py-2 rounded-md">
          <option value="" disabled selected>
            Expertise
          </option>
          <option value="Hair care">Hair Care</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Orthopedician">Orthopedician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
        </select>
        <select className="bg-[#F3F3F3] px-5 py-2 rounded-md">
          <option value="" disabled selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <select className="bg-[#F3F3F3] pl-5 py-2 rounded-md">
          <option value="" disabled selected>
            Fees
          </option>
          <option value="0-500">0-500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-1500">1000-1500</option>
          <option value="1500-2000">1500-2000</option>
          <option value="2000+">2000+</option>
        </select>
        <select className="bg-[#F3F3F3] px-5 py-2 rounded-md">
          {" "}
          <option value="" disabled selected>
            Languages
          </option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Marthi">Marthi</option>
          <option value="Telugu">Telugu</option>
        </select>
        <select className="px-5 py-2 rounded-md bg-circleColor">
          {" "}
          <option value="" disabled selected>
            All Filters
          </option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
