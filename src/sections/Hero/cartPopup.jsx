import React, { useEffect, useRef, useState } from "react";
import FreshFinds3 from "@/assets/fresh-finds-3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion, useAnimation } from "framer-motion"; // eslint-disable-line

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
      console.log("Animating in...");

      const frame = requestAnimationFrame(() => {
        controls.start({
          y: 100,
          width: 477,
          height: 104,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      });

      const childTimeout = setTimeout(() => {
        setShowChildren(true);
      }, 400);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(childTimeout);
      };
    } else {
      // STEP 1: fade out opacity
      console.log("Animating out...");

      setShowChildren(false);
      setTimeout(() => {
        controls
          .start({
            width: 100,
            height: 100,
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
            //   setShouldRender(false);
          });
      }, 1000);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <motion.div
      key={"cart-popup"}
      ref={ref}
      initial={{
        top: 0,
        width: 100,
        height: 100,
        opacity: 0,
      }}
      animate={controls}
      className="z-[100] scale-[60%] top-0 fixed left-0 right-0 mx-auto px-[55px] py-5 rounded-full
         flex justify-between items-center bg-white shadow-[0px_24px_36px_-20px_rgba(0,0,0,0.12)]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        src={FreshFinds3}
        className="w-16 h-16 rounded-[13px] overflow-hidden flex justify-center items-center"
        alt="fresh-finds-3.png"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex flex-col justify-center items-start"
      >
        <h3 className="text-[18px] text-[#141517]">
          <em className="not-italic font-bold">Foresta</em> Dining Chair
        </h3>
        <p className="text-[20px] font-medium text-[#14151799] uppercase">
          32,000 INR
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showChildren ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="w-[85px] h-[64px] flex justify-center items-center !rounded-full 
              border-[2px] border-[rgba(226,203,255,0.10)] bg-gradient-to-l from-[#7445B2] to-[#8D5BCF]"
      >
        <MdKeyboardArrowRight size={10} fill="#fff" />
      </motion.button>
    </motion.div>
  );
};

export default CartPopup;
