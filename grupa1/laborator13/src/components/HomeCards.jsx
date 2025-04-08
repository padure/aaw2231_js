import React from 'react';
import {Link} from 'react-router';
//Components
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 className='text-2xl font-bold'>Pentru dezvoltatori</h2>
          <p className="mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <Link
            to="/jobs"
            className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
          >
              Browse Jobs        
          </Link>
        </Card>
        <Card bg="bg-indigo-100">
          <h2 className='text-2xl font-bold'>Pentru angajatori</h2>
          <p className="mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <Link
            to="/add-job"
            className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
          >
              Add Job        
          </Link>
        </Card>
      </div>
    </section>
  )
}

export default HomeCards;
