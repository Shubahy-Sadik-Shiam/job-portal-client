import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      jobId: id,
      email: user?.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/jobApplications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Job applied successful");
          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="card bg-base-200 max-w-xl shadow-2xl mx-auto">
      <h1 className="text-3xl text-center my-4 font-bold">Apply now!</h1>
      <form onSubmit={handleJobApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-outline bg-white text-black">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
