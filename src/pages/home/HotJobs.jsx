import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>{
           setJobs(data);
        })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            {
                jobs.map(job=><HotJobCard job={job} key={job._id}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;