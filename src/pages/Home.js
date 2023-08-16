import React from 'react';
import Feed from '../components/Feed';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <div className='flex'>
        <Layout className='flex-1'/>
        <Feed className='flex-3'/>
      </div>


    </>
  );
};

export default Home;