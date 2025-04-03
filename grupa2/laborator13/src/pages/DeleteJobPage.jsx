import React from 'react';

const DeleteJobPage = () => {
  return (
    <div>
      DeleteJobPage
    </div>
  )
}

const jobLoader = async ({params}) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  if(!response.ok){
    throw new Error('Erorr fetch job by ID');
  }
  const data = await response.json();
  return data;
}

export { DeleteJobPage as default, jobLoader };
