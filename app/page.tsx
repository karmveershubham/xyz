import Head from 'next/head';
import Header from '../components/header';
import Form from '../components/form'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start" style={{ backgroundColor: '#F5F5F5' }}>
    <Header/>
    <Form/>
    </div>
  );
}
