import React from 'react'
import { FaNodeJs, FaAws, FaPython } from 'react-icons/fa6'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql, SiTerraform, SiFastapi } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>

                {/* Languages */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <FaPython className='text-7xl text-[#3776AB]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiTypescript className='text-7xl text-[#3178C6]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className='p-4'>
                    <TbBrandJavascript className='text-7xl text-[#E8D44E]' />
                </motion.div>

                {/* Frontend */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className='p-4'>
                    <SiNextdotjs className='text-7xl text-white' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <RiTailwindCssFill className='text-7xl text-[#36BCF8]' />
                </motion.div>

                {/* Backend */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiFastapi className='text-7xl text-[#009688]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>

                {/* Infrastructure */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4.5)}
                    className='p-4'>
                    <FaAws className='text-7xl text-[#FF9900]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className='p-4'>
                    <SiTerraform className='text-7xl text-[#7B42BC]' />
                </motion.div>

                {/* Databases */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiMongodb className="text-7xl text-green-600" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <SiPostgresql className='text-7xl text-[#336791]' />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies