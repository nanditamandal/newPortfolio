import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from "framer-motion"

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o76p8q7', 'template_wdu0spi', form.current, 'qxhQXsNpr-W5NuGOv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <section className="bg-slate-800 w-screen h-[100%]" id="contact">
  <div className=" px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mb-4">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
          {/* Contact */}
        </p>
        <h2 className="font-heading mb-4 font-bold tracking-tight text-cyan-500 dark:text-white text-3xl sm:text-5xl">
          Get in Touch
        </h2>
        {/* <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
          dictumst
        </p> */}
      </div>
    </div>

    <motion.div initial= 'hidden' whileInView='visible'
    
    transition={{duration: 5 , ease:'linear'}} 
  
    variants={{
      visible: { opacity: 1},
      hidden: { opacity: 0}
    }} className="flex justify-center">
      {/* <div className="grid md:grid-cols-1 justify-stretch"> */}
        {/* <div className=" bg-red-300">
          <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
            Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
            sagittis ante, ac tincidunt sem venenatis ut.
          </p>
          <ul className="mb-6 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                  </path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                </h3>
                <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                  </path>
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                  hours</h3>
                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
              </div>
            </li>
          </ul>
        </div> */}
        <div className="card h-fit w-[100%] max-w-6xl p-5 md:p-12" id="form">
          <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
          <form id="contactForm"  ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="user_name" className="pb-1 text-xs uppercase tracking-wider" />
                  
                  <input type="text" id="user_name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-[100%] rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="user_name" />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="user_email" className="pb-1 text-xs uppercase tracking-wider" />
                  
                  <input type="email" id="user_email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="user_email" />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider" />
                
                <textarea id="message" name="message" cols={30} rows={5} placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" defaultValue={""} />
              </div>
            </div>
            <div className="text-center">
             
              <button type="submit" className=" w-full transition-all ease-linear duration-[2000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-5 text-white font-bold py-2 px-4 hover:scale-100 rounded">
        See More
      </button>
            </div>
          </form>
        </div>
      {/* </div> */}
    </motion.div>
  </div>
</section>

    
  )
}
