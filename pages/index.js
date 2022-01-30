import Link from "next/link";
import QuizCard from "../components/QuizCard";
import JsIcon from "../assets/images/js.svg";
import HTMLIcon from "../assets/images/html.svg";
import PhpIcon from "../assets/images/php.svg";
import MysqlIcon from "../assets/images/mysql.svg";
import WordpressIcon from "../assets/images/wordpress.svg";
import LaravelIcon from "../assets/images/laravel.png";
import LinuxIcon from "../assets/images/linux.png";
import BashIcon from "../assets/images/bash.svg";
import DevopsIcon from "../assets/images/devops.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Home({ quizes }) {
  const cards = [
    {
      id: 1,
      level: "Intermediate",
      title: "JavaScript Quiz",
      icon: JsIcon,
      color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      tag: "JavaScript",
      limit: 20,
    },
    {
      id: 2,
      level: "Intermediate",
      title: "HTML5 Quiz",
      icon: HTMLIcon,
      color: "bg-gradient-to-r from-green-300 to-purple-400",
      tag: "HTML",
      limit: 20,
    },
    {
      id: 3,
      level: "Intermediate",
      title: "PHP 8 Quiz",
      icon: PhpIcon,
      color: "bg-gradient-to-r from-red-500 to-red-800",
      tag: "Php",
      limit: 20,
    },
    {
      id: 4,
      level: "Intermediate",
      title: "MySql Quiz",
      icon: MysqlIcon,
      color: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
      tag: "Mysql",
      limit: 20,
    },
    {
      id: 5,
      level: "Intermediate",
      title: "Wordpress Quiz",
      icon: WordpressIcon,
      color: "bg-gradient-to-r from-sky-400 to-blue-500",
      tag: "Wordpress",
      limit: 15,
    },
    {
      id: 6,
      level: "Intermediate",
      title: "Laravel 8 Quiz",
      icon: LaravelIcon,
      color: "bg-gradient-to-r from-sky-400 to-blue-500",
      tag: "Laravel",
      limit: 10,
    },
    {
      id: 7,
      level: "Intermediate",
      title: "Linux Quiz",
      icon: LinuxIcon,
      color: "bg-gradient-to-r from-indigo-300 to-purple-400",
      tag: "Linux",
      limit: 20,
    },
    {
      id: 8,
      level: "Intermediate",
      title: "Bash Quiz",
      icon: BashIcon,
      color: "bg-gradient-to-r from-green-500 to-green-700",
      tag: "Bash",
      limit: 15,
    },
    {
      id: 9,
      level: "Intermediate",
      title: "Devops Quiz",
      icon: DevopsIcon,
      color: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
      tag: "Devops",
      limit: 20,
    },
  ];

  return (
    <div className="grid grid-cols-1 items-center p-5 gap-10 bg-[#0a1532]">
      <div className="justify-self-start align-text-start p-5">
        <h1 className="text-5xl font-black text-rose-500 uppercase">Quizo</h1>
        <small className="font-sm text-gray-100">
          Play a Quiz and Test Your Knowledge
        </small>
      </div>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 grid-flow-row">
        {cards.map((card) => (
          <QuizCard card={card} key={card.id} />
        ))}
      </div>
      <div className="grid justify-items-center text-white">
        Developed by Ank Maw Khon
      <div className="grid gap-5 mt-3 grid-cols-3 text-2xl">
          <a target="_blank" href="https://github.com/Nick4833"><AiFillGithub className="cursor-pointer hover:text-green-400" /></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=1000773736633163"><BsFacebook className="cursor-pointer hover:text-green-400"/></a>
          <a target="_blank" href="https://www.linkedin.com/in/ank-maw-khon-698309180/"><AiFillLinkedin className="cursor-pointer hover:text-green-400"/></a>
      </div>
      </div>
    </div>
  ); 
}
