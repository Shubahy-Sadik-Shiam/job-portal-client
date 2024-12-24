import { motion } from "motion/react"
import team1 from "../../assets/Team/team1.jpg"
import team2 from "../../assets/Team/team2.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
          src={team1}
          animate={{y: [50, 80, 50 ]}}
          transition={{duration: 7, repeat: Infinity, ease: "linear"}}
          className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-4 border-b-4 shadow-2xl"
        />
        <motion.img
          src={team2}
          animate={{x: [100, 150, 100 ]}}
          transition={{duration: 7, repeat: Infinity, ease: "linear"}}
          className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-4 border-b-4 shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1
          className="text-5xl font-bold">Latest <motion.span
          animate={{color: ['#ecff33','#33ffe3', '#ff6133']}}
          transition={{duration: 1.5, repeat: Infinity,}}>
            Jobs
            </motion.span> For You</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
