import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/jobApplications?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApplications(data);
    //   });

    axios.get(`http://localhost:5000/jobApplications?email=${user?.email}`, {withCredentials: true})
    .then(res=>{
      setApplications(res.data);
    })
  }, [user.email]);
  return (
    <div>
      <p className="text-3xl">My Application: {applications.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
            applications.map(job=> <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                </td>
              </tr>)
          }
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
