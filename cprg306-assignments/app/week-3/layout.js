// /components/page.js

import Head from 'next/head';
import ItemList from './item-list';

export default function Page (){
  return (
    <main>
      <Head>
        <title>Shopping List</title>
      </Head>
      <h1>Shopping List</h1>
      <div>
        <ItemList />
      </div>
    </main>
  );
};


