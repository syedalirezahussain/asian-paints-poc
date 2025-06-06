import React, { useEffect, useRef, useState } from "react";
import FreshFinds3 from "@/assets/fresh-finds-3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useAnimation } from "framer-motion"; // eslint-disable-line

const CartPopup = ({ isVisible }) => {
  const ref = useRef(null);
  const [showChildren, setShowChildren] = useState(false);
  const controls = useAnimation();
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!shouldRender) return;

    if (isVisible) {
      setShowChildren(false);

      const frame = requestAnimationFrame(() => {
        controls.start({
          y: 100,
          width: 252,
          height: 64,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      });

      const childTimeout = setTimeout(() => {
        setShowChildren(true);
      }, 50);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(childTimeout);
      };
    } else {
      setShowChildren(false);
      setTimeout(() => {
        controls
          .start({
            width: 64,
            height: 64,
            transition: { duration: 0.2 },
          })
          .then(() => {
            controls.start({
              y: 0,
              opacity: 0,
              transition: {
                duration: 0.4,
              },
            });
          });
      }, 1000);
    }

    // eslint-disable-next-line
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <motion.div
      key={"cart-popup"}
      ref={ref}
      initial={{
        top: 0,
        width: 64,
        height: 64,
        opacity: 0,
      }}
      animate={controls}
      className="z-[100] top-0 fixed left-0 right-0 mx-auto p-3 rounded-full
         flex justify-between gap-3 items-center border border-[#E9E9E959] bg-white shadow-[0px_30px_30px_0px_rgba(46,36,54,0.05)]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        src={FreshFinds3}
        className="w-10 h-10 rounded-full bg-[#f6f6f6] overflow-hidden flex justify-center items-center"
        alt="fresh-finds-3.png"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex grow flex-col justify-center items-start"
      >
        <h3 className="text-[12px] text-[#14151799]">
          <em className="not-italic font-bold">Foresta</em> Dining Chair
        </h3>
        <p className="text-[14px] font-medium text-[#141517] uppercase">
          32,000 INR
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className=" w-10 h-10 !p-0 flex justify-center items-center !rounded-full 
              border-[2px] border-[rgba(226,203,255,0.10)] bg-gradient-to-l from-[#7445B2] to-[#8D5BCF]"
      >
        <MdKeyboardArrowRight size={10} fill="#fff" />
      </motion.button>
    </motion.div>
  );
};

export default CartPopup;
