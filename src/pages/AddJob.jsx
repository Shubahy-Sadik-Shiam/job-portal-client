import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
const AddJob = () => {

  const {user} = useAuth()
  const navigate = useNavigate()

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Job added successfully")
        navigate("/myPostedJobs");
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">Add a new Job</h2>
      <form
        onSubmit={handleAddJob}
        className="card-body border rounded-xl m-4 max-w-4xl mx-auto"
      >
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-bordered w-full" name="jobType">
            <option disabled selected>
              Pic a job type
            </option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job field</span>
          </label>
          <select className="select select-bordered w-full" name="category">
            <option disabled selected>
              Pic a job field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* Salary Range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select name="currency" className="select select-bordered w-full">
              <option disabled selected>
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="description"
            name="description"
            required
          ></textarea>
        </div>
        {/* Company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="company name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="put each requirement in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* Job responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="write each responsibilities in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        {/* HR name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR email</span>
          </label>
          <input
          defaultValue={user?.email}
            type="email"
            name="hr_email"
            placeholder="HR email"
            className="input input-bordered"
            required
          />
        </div>
        {/* company logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company logo</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="company logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Application deadline*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            placeholder="deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit button */}
        <div className="form-control mt-6">
          <button className="btn bg-white text-black">Add Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
