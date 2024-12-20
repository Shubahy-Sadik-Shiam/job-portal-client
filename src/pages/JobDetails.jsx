import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const {title, company, deadline} = useLoaderData()

    return (
        <div className="m-10">
            <p className="text-2xl font-bold">Job details for {title}</p>
            <p className="text-lg font-semibold">Apply for {company}</p>
            <p>Deadline:{deadline}</p>
            <button className="btn bg-white text-black mt-4">Apply Now</button>
        </div>
    );
};

export default JobDetails;