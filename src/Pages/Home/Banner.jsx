import { motion } from "motion/react"
import t1 from '../../assets/img/team1.jpg'
import t2 from '../../assets/img/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200">

    <div className="hero-content flex-col lg:flex-row-reverse gap-20 w-10/12 mx-auto">

       <div className='flex-1'>

        <motion.img animate={{y: [50,80,50]}} transition={{duration: 5, repeat: Infinity}}
      src={t1}
      className="max-w-sm rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-blue-700 border-l-8 border-b-8 h-[250px]"/>


        <motion.img animate={{x: [150,200,150]}}
        transition={{duration: 10 ,repeat: Infinity}}
      src={t2}
      className="max-w-80 rounded-lg shadow-2xl rounded-t-4xl rounded-br-4xl border-blue-700 border-l-4 border-b-4 h-44 w-64"/>

        </div>

    <div className='flex-1'>
      {/* <motion.h1 animate={{ rotate: 360 }} className="text-5xl font-bold">The Easiest Way */}
{/* to Get Your New Job</motion.h1> */}
      <p className="py-6">
        Each month, more than 3 million job seekers turn to
website in their search for work, making over 140,000
applications every single day
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;