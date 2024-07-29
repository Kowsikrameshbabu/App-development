import Navbar from "../NAVBAR/Navbar";
import React, { useState } from "react";
import styles from "./Postjob.module.css";

// Postjob.js

const Postjob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    jobType: "",
    applicationDeadline: "",
    salaryCurrency: "",
    jobDescription: "",
    companyName: "",
    companyWebsite: "",
    companyIndustry: "",
    facebookPage: "",
    linkedinPage: "",
    twitterPage: "",
    instagramPage: "",
    companyDescription: "",
    logo: null,
    recruiterName: "",
    recruiterEmail: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Job posted successfully!");
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.postjob_maindiv}>
        <form onSubmit={handleSubmit}>
          <div className={styles.postjob_subdiv}>
            <h1>Post a job</h1>
            <span></span>
            <p>
              Business plan draws on a wide range of knowledge from different
              business disciplines. Business draws on a wide range of different
              businesses.
            </p>
            <br />
            <div className={styles.spandiv}>
              <pre>Home | Blog | Post a Job</pre>
            </div>
          </div>

          <div className={styles.postjob_jobinfo}>
            <div className={styles.postjob_jobinfosub}>
              <h1>Job Information</h1>
              <div className={styles.jobtitle}>
                <label>Job Title*</label>
                <input
                  type="text"
                  className={styles.styled}
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="ux-ui-designer">UX/UI Designer</option>
                    <option value="web-developer">Web Developer</option>
                    <option value="web-designer">Web Designer</option>
                    <option value="seo">SEO</option>
                  </select>
                </div>
                <div className={styles.innerflexrow}>
                  <label>Job Types*</label>
                  <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                  >
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="internship">Internship</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Application Deadline</label>
                  <input
                    type="date"
                    className={styles.styled}
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Salary Currency</label>
                  <select
                    name="salaryCurrency"
                    value={formData.salaryCurrency}
                    onChange={handleChange}
                    required
                  >
                    <option value="default">Default</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000-30000">20000-30000</option>
                    <option value="30000-40000">30000-40000</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="jobDescription">Job Description*</label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Enter the job description here"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <h1>Company Information</h1>
              <div className={styles.jobtitle}>
                <label>Company name</label>
                <input
                  type="text"
                  className={styles.styled}
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Company Website</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Company Industry</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="companyIndustry"
                    value={formData.companyIndustry}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Facebook Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="facebookPage"
                    value={formData.facebookPage}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>LinkedIn Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="linkedinPage"
                    value={formData.linkedinPage}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.flexrow}>
                <div className={styles.innerflexrow}>
                  <label>Twitter Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="twitterPage"
                    value={formData.twitterPage}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.innerflexrow}>
                  <label>Instagram Page(Link)</label>
                  <input
                    type="text"
                    className={styles.styled}
                    name="instagramPage"
                    value={formData.instagramPage}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="companyDescription">Company Description*</label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  placeholder="Enter the company description here"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <span>Logo(Optional)</span>
              <span>Select image:</span>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
              />
              <span>Maximum file size: 2 MB</span>
              <div>
                <h1>Recruiter Information</h1>
                <div className={styles.flexrow}>
                  <div className={styles.innerflexrow}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      className={styles.styled}
                      name="recruiterName"
                      value={formData.recruiterName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.innerflexrow}>
                    <label>Email</label>
                    <input
                      type="email"
                      className={styles.styled}
                      name="recruiterEmail"
                      value={formData.recruiterEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className={styles["submit-btn"]}>
                <button type="submit" className={styles["submit-btn"]}>
                  Post A Job
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Postjob;
