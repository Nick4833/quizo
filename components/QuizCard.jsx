import Link from "next/link";
import { SiJavascript } from "react-icons/si";
import { AiOutlinePlayCircle, AiFillQuestionCircle } from "react-icons/ai";
import Image from "next/image";

const QuizCard = ({ card: { level, title, icon, color, tag, limit } }) => {
  return (
    <Link href={`/quiz?tags=${tag}&limit=${limit}`} passHref>
      <div className= {`${color} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300 justify-self-center drop-shadow-lg rounded-2xl w-full grid grid-cols-1 cursor-pointer p-10 w-full max-w-2xl`}>
        <div className="grid grid-cols-2">
          {/* <AiOutlinePlayCircle className="text-2xl text-white mb-5 justify-self-start self-center" /> */}
          <span></span>
          <div className="grid justify-items-end" >
          <Image src={icon} className=""/>
          </div>
        </div>
        <div className="text-white font-semibold grid grid-cols-1">
          <small>{level}</small>
          <h4 className="text-2xl">{title}</h4>
          <small className="mt-2"><AiFillQuestionCircle className="inline mr-2" />{limit} Questions</small>
          
        </div>
      </div>
    </Link>
    
  );
};

export default QuizCard;
