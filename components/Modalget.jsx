import React, { useState, useRef, useEffect } from "react";

function Modalget({ setModel, Model }) {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);
  const [isopen ,setIsopen] = useState(Model)

  useEffect(() => {
    if (isopen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isopen]);

  useEffect(() => {
    if (inputRefs.current[activeInput]) {
      inputRefs.current[activeInput].focus();
    }
  }, [activeInput]);

  useEffect(() => {
    if (otpDigits[5] !== "") {
      handleSubmit();
    }
  }, [otpDigits[5]]);

  const handleInputChange = (index, value) => {
    const updatedDigits = [...otpDigits];
    updatedDigits[index] = value;
    setOtpDigits(updatedDigits);

    if (value !== "" && index < 5) {
      setActiveInput(index + 1);
    }
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otpDigits[index] === "") {
      setActiveInput(index - 1);
    }
  };

  const handleInputFocus = (index) => {
    setActiveInput(index);
  };

  const handleSubmit = () => {
    const otp = otpDigits.join("");
    console.log("Submitted OTP:", otp);

    // Add your submission logic here
  };

  return (
    <>
      <div className="w-full h-screen fixed  top-0 z-30 ">
        <div className=" w-full fixed top-0 h-screen bg-black z-40 opacity-70" />
        <div className="fixed top-0 w-full h-full z-50 flex items-center justify-center">
          <div className="sm:w-[476px] w-full mx-[20px] sm:mx-0  h-[416px]  bg-white rounded-[20px] flex flex-col  items-center">
          <div className="w-full pr-[20px] pt-[20px] flex justify-end items-center">
              <div className=" w-[30px] h-[30px]  rounded-[50%] flex items-center justify-center bg-gray-700">
                <button
                  onClick={() => {
                    setModel(!Model);
                  }}
                  className="w-[20px] h-[20px] flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className=" w-full h-full mt-[40px] px-[10px]  sm:px-[4rem]">
              <div className="flex  flex-col items-center">
                <div>
                  <svg
                    width={44}
                    height={44}
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 19.375V18.125C19.5 17.8125 19.1875 17.5 18.875 17.5H13.125C12.7344 17.5 12.5 17.8125 12.5 18.125V19.375C12.5 19.7656 12.7344 20 13.125 20H18.875C19.1875 20 19.5 19.7656 19.5 19.375ZM13.125 15H26.875C27.1875 15 27.5 14.7656 27.5 14.375V13.125C27.5 12.8125 27.1875 12.5 26.875 12.5H13.125C12.7344 12.5 12.5 12.8125 12.5 13.125V14.375C12.5 14.7656 12.7344 15 13.125 15ZM38.5938 12.8906C38.4375 12.7344 36.875 11.4844 35 9.92188V7.5C35 6.17188 33.8281 5 32.5 5H28.8281C28.5156 4.76562 28.2031 4.53125 28.0469 4.375C26.3281 3.04688 23.3594 0 20 0C16.5625 0 13.6719 2.96875 11.875 4.375C11.7188 4.53125 11.4062 4.76562 11.0938 5H7.5C6.09375 5 5 6.17188 5 7.5V9.92188C3.04688 11.4844 1.48438 12.7344 1.32812 12.8906C0.46875 13.5938 0 14.6094 0 15.7812V36.25C0 38.3594 1.64062 40 3.75 40H36.25C38.2812 40 40 38.3594 40 36.25V15.7812C40 14.6875 39.4531 13.5938 38.5938 12.8906ZM20 2.5C21.6406 2.5 23.4375 3.82812 24.9219 5H15C16.4844 3.82812 18.2812 2.5 20 2.5ZM7.5 7.5H32.5V21.0938C29.9219 23.125 27.3438 25.1562 25.7031 26.4844C24.375 27.5781 21.7969 30.0781 20 30C18.125 30.0781 15.5469 27.5781 14.2188 26.4844C12.5781 25.1562 10 23.125 7.5 21.0938V7.5ZM2.5 15.7812C2.5 15.3906 2.65625 15.0781 2.89062 14.8438C3.04688 14.7656 3.82812 14.0625 5 13.2031V19.0625C4.0625 18.3594 3.20312 17.6562 2.5 17.0312V15.7812ZM37.5 36.25C37.5 36.9531 36.875 37.5 36.25 37.5H3.75C3.04688 37.5 2.5 36.9531 2.5 36.25V20.2344C5.78125 22.9688 10.2344 26.4844 12.6562 28.4375C14.2969 29.7656 17.1094 32.5781 20 32.5C22.8125 32.5781 25.625 29.7656 27.2656 28.4375C29.6875 26.4844 34.1406 22.9688 37.5 20.2344V36.25ZM37.5 17.0312C36.7188 17.6562 35.8594 18.3594 35 19.0625V13.2031C36.0938 14.0625 36.875 14.7656 37.0312 14.8438C37.2656 15.0781 37.5 15.3906 37.5 15.7812V17.0312Z"
                      fill="rgb(104, 81, 255)"
                      fillOpacity={1}
                    />
                  </svg>
                </div>
                <div className="mt-[15px] font-Inter font-[400] text-black text-[20px]">
                  <p>Please enter the code sent to</p>
                  <p className="mt-[5px] font-[500] font-Inter text-center  text-black text-[20px]">
                    example@gmail.com
                  </p>
                </div>

                <div className=" max-w-[480px]  mt-[40px] mx-auto flex justify-center w-full ">
                  {otpDigits.map((digit, index) => (
                    <div
                      key={index}
                      className={`w-[40px] h-[48px] border-[1px] border-[#e2e0e6] ${
                        index === 2 ? "mr-[22px]" : "mr-[12px]"
                      } rounded-[10px]`}
                    >
                      <input
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onFocus={() => handleInputFocus(index)}
                        onKeyDown={(e) => handleInputKeyDown(index, e)}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                        className=" w-full h-full bg-transparent rounded-[10px] text-center text-[20px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modalget;
