import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div className="card card-compact bg-base-200 shadow-xl">
     <div className="flex items-center gap-4 p-4">
     <figure>
        <img
        className="w-16"
          src={company_logo}
          alt="Shoes"
        />
      </figure>
      <div>
        <h3 className="text-2xl">{company}</h3>
        <p className="flex items-center gap-1"><IoLocationOutline />{location}</p>
      </div>
     </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
            {
                requirements.map(skill => <p className="border rounded-full p-1 text-center hover:bg-white hover:text-black">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center mt-3">
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency} $ </p>
          <Link to={`/jobs/${_id}`}><button className="btn bg-white text-black">Apply</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
