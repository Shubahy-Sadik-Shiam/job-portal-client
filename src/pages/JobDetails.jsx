import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const {title, company, deadline, _id} = useLoaderData()

    return (
        <div className="m-10">
            <p className="text-2xl font-bold">Job details for {title}</p>
            <p className="text-lg font-semibold">Apply for {company}</p>
            <p>Deadline:{deadline}</p>
            <Link to={`/jobApply/${_id}`}><button className="btn bg-white text-black mt-4">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;