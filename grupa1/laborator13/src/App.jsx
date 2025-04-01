import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-dom';
import React from 'react';

const App = () => {
  const addJob = async (job) => {}
  const deleteJob = async (id) => {}
  const updateJob = async (job) => {}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} loader={jobLoader} />} />
        <Route path='/delete-job/:id' element={<DeleteJobPage deleteJobSubmit={deleteJob} loader={jobLoader} />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
