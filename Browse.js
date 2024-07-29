import Card from "../CARD/Card";
import Navbar from "../NAVBAR/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";

const Browse = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  const handleFilter = () => {
    // Implement filtering logic here if needed
    console.log("Filter clicked:", { keyword, location });
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(keyword.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className={styles.browse_wrapper}>
      <Navbar />
      <div className={styles.browse_browsemaindiv}>
        <div>
          <h1>Browse a Job</h1>
          <span>________________</span>
        </div>
        <div>
          <p>
            Business plan draws on a wide range of knowledge from different
            business disciplines.
          </p>
          <p>Business draws on a wide range of different business.</p>
        </div>
        <div>
          <pre>Home | Browse Job</pre>
        </div>
      </div>
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
  );
};

export default Browse;
