import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const data = useLoaderData();

  const handleUpdateStatus = (e, id) => {
    
    const data = {
        status: e.target.value
    }

    fetch(`http://localhost:5000/jobApplications/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  }
  return (
    <div>
      Applications: {data.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={(e)=>handleUpdateStatus(e, application._id)} 
                  className="select select-bordered select-xs w-full max-w-xs"
                  defaultValue={application.status || "change Status"}>
                    <option disabled>
                      change Status
                    </option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
