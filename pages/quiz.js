import { useEffect, useRef, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function Quiz({ quizes }) {
  
  const [no, setNo] = useState(0);
  const [point, setPoint] = useState(0);
  const [ans, setAns] = useState([]);
  const [choice, setChoice] = useState(0);
  const [cAns, setCans] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [total, setTotal] = useState(0);
  const [complete, setComplete] = useState(1);
  const [reset, setReset] = useState(true);
  const sample = quizes;

  const changeSample = (index) => {
    setReset(null);
    var trueI = 0;
    cAns.map((cAns, index) => {
      if (cAns == "true") {
        trueI = index;
      }
    });

    if (index.choice == trueI) {
      console.log("true");
      point = point + 100;
      setPoint(point);
    } else {
      console.log("wrong");
    }

    no = no + 1;
    if (no < sample.length) {
      setNo(no);
      setComplete((no / quizes.length) * 100);
    } else {
      setComplete(100);
      if (point > total) {
        window.localStorage.setItem("total", point);
      }
      console.log(complete);
      setShowScore(true);
    }
  };

  useEffect(() => {
    
    
    setTotal(window.localStorage.getItem("total"));
    var ans = [];
    for (const key in sample[no].answers) {
      if (sample[no].answers.hasOwnProperty(key)) {
        ans.push(sample[no].answers[key]);
      }
    }

    var cAns = [];
    for (const key in sample[no].correct_answers) {
      if (sample[no].correct_answers.hasOwnProperty(key)) {
        cAns.push(sample[no].correct_answers[key]);
      }
    }
    setCans(cAns);
    setAns(ans);
  }, [, no, point]);

  const retryQuiz = () => {
    setNo(0);
    setShowScore(false);
    setPoint(0);
  };

  const nextQuestion = (index) => {
    setChoice(index);
    setReset(index);
  }

  return (
    <div className="bg-[#0a1532] h-screen  items-center justify-items-center p-10">
      <Link href="/">
        <span className="text-white cursor-pointer">
          <IoArrowBack className="inline mr-2" />
          Back to Menu
        </span>
      </Link>

      <ProgressBar
        className="p-5 mt-5"
        completed={Math.floor(complete)}
        customLabel=" "
        bgColor="#25c887"
      ></ProgressBar>
      {showScore === false ? (
        <>
          <div className="grid items-center h-full">
            <div className="grid w-full justify-self-start">
              <small className="text-gray-100">
                Question {no + 1} out of {quizes.length}
              </small>
              <h1 className="font-bold text-3xl text-gray-100 mt-5">
                {sample[no].question}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 justify-self-center w-full">
                {ans.map((a, index) => (
                  <div key={index}>
                    {a !== null ? (
                      <div
                        key={index}
                        className="drop-shadow-xl bg-gradient-to-r from-sky-400 to-cyan-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300 rounded-xl text-white"
                      >
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id={a}
                            value={index}
                            type="radio"
                            name="answer"
                            className="hidden"
                            onChange={()=>nextQuestion(index)}
                            checked= {reset === index}
                          />
                          <label
                            htmlFor={a}
                            className="flex justify-items-center items-center cursor-pointer text-xl w-full p-5"
                          >
                            <span className="p-3 w-3 h-3 inline mr-5 rounded-full border border-2 flex-no-shrink"></span>
                            {a}
                          </label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl font-bold text-xl text-white p-5" onClick={() => changeSample({choice})}>Next</button>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 h-full text-white items-center justify-items-center">
          <div className="grid justify-items-center gap-10">
            <h3 className="text-2xl font-bold">Your High Score</h3>
            <p className="text-9xl font-bold text-[#25c887]">{point}</p>
            {point < (quizes.length - 5) * 100
              ? "You need more pratice 😞 Try again?"
              : "Wow, you're a Pro at this 😊"}
            <div className="grid grid-cols-2 gap-5">
              <button
                className="p-3 bg-[#25c887] rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300"
                onClick={() => retryQuiz()}
              >
                Answer Again
              </button>
              <Link href="/">
                <button className="p-3 bg-rose-500 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300">
                  Back to Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const tags = query.tags;
  const limit = query.limit;
  const resp = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&limit=${limit}&tags=${tags}`
  );
  const quizes = await resp.json();

  return {
    props: {
      quizes,
    },
  };
}
