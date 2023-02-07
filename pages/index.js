import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import SecondSection from '@/Components/SecondSection/SecondSection'
import ThirdSection from '@/Components/ThirdSection/ThirdSection'
import FourthSection from '@/Components/FourthSection/FourthSection'
import FifthSection from '@/Components/FithSection/FifthSection'
import bg from './bg.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='block lg:hidden my-3'>
        <Navbar></Navbar>
      </div>
      <div className='font-poppins relative overflow-hidden'>
      <Head>
        <title>Gym baran</title>
      </Head>
      <div className='absolute'>
        <Image
          src={bg}
        />
      </div>
      <div className='p-0 lg:p-10'>
        <div className='hidden lg:block'>
        <Navbar></Navbar>
        </div>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
      </div>
    </div>
    </div>
  )
}
