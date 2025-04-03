import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router';
import React from 'react';
//Pages
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import DeleteJobPage, {jobLoader} from './pages/DeleteJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFoundPage from './pages/NotFoundPage';
//Layouts
import MainLayout from './layouts/MainLayout';

const App = () => {
  const addJob = async (job) => {}
  const deleteJob = async (id) => {}
  const updateJob = async (job) => {}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route 
          index 
          element={<HomePage />} 
        />
        <Route 
          path='/jobs' 
          element={<JobsPage />} 
        />
        <Route 
          path='/add-job' 
          element={<AddJobPage addJobSubmit={addJob} />} 
        />
        <Route 
          path='/edit-job/:id' 
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader} 
        />
        <Route 
          path='/jobs/:id' 
          element={<DeleteJobPage deleteJobSubmit={deleteJob} />}
          loader={jobLoader} 
        />
        <Route 
          path='*' 
          element={<NotFoundPage/>} 
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
