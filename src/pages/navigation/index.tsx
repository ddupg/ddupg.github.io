import React from 'react';
import Layout from '@theme/Layout';
import NavigationPage from './components/NavigationPage';
import navigationData from "./data";

export default function Navigation() {
  return (
    <Layout title="导航">
      <div className='tw'>
        <NavigationPage classifies={navigationData}/>
      </div>
    </Layout>
  );
}