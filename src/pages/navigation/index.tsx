import React from 'react';
import Layout from '@theme/Layout';
import NavigationPage from '@site/src/components/navigation/NavigationPage';
import navigationData from "@site/src/components/navigation/data";

export default function Navigation() {
  return (
    <Layout title="导航">
      <div className='tw'>
        <NavigationPage classifies={navigationData}/>
      </div>
    </Layout>
  );
}