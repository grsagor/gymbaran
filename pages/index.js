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
    <div className='font-poppins px-0 lg:px-10 relative overflow-hidden'>
      <Head>
        <title>Gym baran</title>
      </Head>
      <div className='absolute'>
        <Image
          src={bg}
        />
      </div>
      <Navbar></Navbar>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
    </div>
  )
}
