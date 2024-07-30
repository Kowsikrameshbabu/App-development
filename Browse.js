import Card from "../CARD/Card";
import Footer from "../../Fresh/Footer";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";

const Browse = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/jobsdata")
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  const handleFilter = () => {
    // Implement filtering logic here if needed
    console.log("Filter clicked:", { keyword, location });
  };

  const filteredJobs = jobs.filter(job => 
    job.jobTitle.toLowerCase().includes(keyword.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
    <div className="topspace"></div>
    <div className="Contacth">
                <h1>Find a Job</h1>
                <div className="line"></div>
                <p>
                    Digital platform that connects employers with job seekers, <br />{" "}
                    providing a space for posting job listings and applying for positions,
                    To get a Dream job
                </p>
            </div>
    <div className={styles.browse_wrapper}>
    
   
      <div className={styles.browse_filterdiv}>
        <div className={styles.filter_bar}>
          <input
            type="text"
            placeholder="Keyword: Name, Tag"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.filter_input}
          />
          <input
            type="text"
            placeholder="Location: City, State, Zip"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.filter_input}
          />
          <button onClick={handleFilter} className={styles.filter_button}>Filter</button>
        </div>
      </div>
      <div className={styles.browse_jobcards}>
        {filteredJobs.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Browse;