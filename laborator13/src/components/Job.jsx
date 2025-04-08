import React, { useState } from 'react';
import { Link } from "react-router";
import { FaMapMarker } from 'react-icons/fa';

const Job = ({ job }) => {
  const [showDescription, setShowDescription] = useState(false);
  let description =
    showDescription
      ? job.description
      : job.description.substring(0, 90) + '...';

  return (
    <div className='bg-white rounded-xl shadow-md realitive p-4 flex flex-col justify-between' key={job.id}>
      <div>
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600 transition">
          {showDescription ? 'Less' : 'More'}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mb-4 border-t border-gray-100 pt-4">
        <div className="text-orange-700 mb-3">
          <FaMapMarker className='inline text-lg mb-1 mr-1' />
          {job.location}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Job;
