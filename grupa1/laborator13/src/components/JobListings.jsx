import React, {useState, useEffect} from 'react';
import Job from './Job';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchJobs = async () => {
      const URL = isHome ? `/api/jobs` : `/api/jobs`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(`Eroare la extragerea datelor: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [] );

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          { isHome ? "Joburi recente" : "Toate joburile" }
        </h2>
        { loading ? (
          <Spinner loading={loading} />
        ): (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=> (<Job job={job} key={job.id} />) )}
          </div>
        )}
      </div>
    </section>
  )
}

export default JobListings;
