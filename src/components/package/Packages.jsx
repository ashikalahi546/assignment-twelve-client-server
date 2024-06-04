import { useEffect, useState } from "react";
import Package from "./Package";

const Packages = () => {
  const [allData, setData] = useState([]);


  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Our Packages</h2>
        <p className="pt-5 text-gray-500 leading-6">
          House with fat bassline, huge beats & soulful male vocal. Extended
          club
          <span className="sm:block">
            remix v Piano-led deep house with fat bassline.
          </span>
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 my-10">

        {
            allData.map(data=><Package data={data} key={data.id}></Package>)
        }
      </div>
    </div>
  );
};

export default Packages;
