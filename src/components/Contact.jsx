import React, { Suspense, lazy, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import use3DEnabled from "../hooks/use3DEnabled";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const ContactVisualFallback = () => (
  <div className='flex h-full min-h-[280px] items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#151030] via-[#0f172a] to-[#050816] p-8'>
    <div className='max-w-sm'>
      <p className='text-xs uppercase tracking-[0.35em] text-cyan-300'>
        Let&apos;s Build
      </p>
      <h4 className='mt-4 text-3xl font-semibold text-white'>
        Fast, responsive web apps for mobile and desktop.
      </h4>
      <p className='mt-4 text-sm leading-6 text-secondary'>
        The contact form stays fully functional even when the device switches to
        a lighter, non-3D mode.
      </p>
      <a
        href='mailto:avijr272@gmail.com'
        className='mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-400/20'
      >
        avijr272@gmail.com
      </a>
    </div>
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const enable3D = use3DEnabled();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.send(
        "service_ozu4esq",
        "template_y3r0idt",
        {
          from_name: form.name,
          to_name: "Avinash Kumar",
          from_email: form.email,
          to_email: "avijr272@gmail.com",
          message: form.message,
        },
        "QUzg8UJ26uVI973d3"
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[420px] h-[280px]'
      >
        {enable3D ? (
          <Suspense fallback={<ContactVisualFallback />}>
            <EarthCanvas />
          </Suspense>
        ) : (
          <ContactVisualFallback />
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
