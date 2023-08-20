import {auth} from '../Services/firebase';
import React from 'react'

function Home({ userData, updateUserData }) {
  return (
    <div className='row'>
      <div className='card mx-auto mt-2 p-2' style={{ width: '50rem' }}>
        <div className='col-2'>
          <div className='rounded-circle' style={{ overflow: 'hidden' }}>
            <img
              src={userData.photo}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
        <div className='col'>
          <h1 className='display-4'>{userData.name}</h1>
          <h2 className='display-6'>{userData.email}</h2>
          <button
            className='btn btn-danger border-0 shadow'
            onClick={() => {
              auth.signOut().then(() => {
                updateUserData({});
              });
            }}
          >
            <img
              src='https://static-00.iconduck.com/assets.00/logout-icon-2048x2046-yqonjwjv.png'
              className='mx-2'
              style={{ height: '50px', width: '50px' }}
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home