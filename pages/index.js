import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

import code from "../public/code.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jonathan Manzano Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              DEVELOPEDBYED
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1mwqT_LesInXMSpbu8FloFIQP9GvxDl4z/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume | CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jonathan Manzano
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front End Developer.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              FrontEnd Junior currently searching job. <br /> Join me down below
              and get on contact with me.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/jdiaz_dev">
              <AiFillTwitterCircle className="dark:bg-white  rounded-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-manzano-diaz-78504a183/">
              <AiFillLinkedin className="dark:bg-white  rounded-3xl" />
            </a>
            <a href="https://www.youtube.com/channel/UCk97cu6rXY9A-yBxVVX78hg">
              <AiFillYoutube className="dark:bg-white  rounded-3xl" />
            </a>
            <a href="https://github.com/JonathanManzanoDiaz">
              <AiFillGithub className="dark:bg-white rounded-3xl" />
            </a>
          </div>

         
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 flex justify-center dark:text-white my-5">
              Presentación | Presentation
            </h3>
            <div className="flex justify-center gap-16">
              <details>
                <summary className="text-xl py-2 leading-8 text-gray-800 dark:text-white">
                  Español
                </summary>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Desde el año 2022 Abril he estado aprendiendo a programar,
                  desde pequeño ya he tenido una habilidad y amor por los
                  ordenadores hice curso de microsistemas informáticos, pero no
                  me apasionó.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Al vivir con mi familia, no tengo cargas y me dediqué durante
                  todo el 2022 a estudiar programación, empecé con python y
                  estudié lo básico, solo por gusto, luego me di cuenta que la
                  gente estaba buscando trabajos para la programación, así que
                  me puse a investigar y lo que más me gustó fue el Front End.{" "}
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Me dediqué casi 1 mes y medio aprendiendo HTML5 y CSS3, la
                  estructura de HTML5, SEO y las mejores formas de darle
                  estructura a las webs, después de eso, empecé en CSS3 y me
                  dediqué unicamente a CSS, no estudie nada más, ni librerias
                  como BootStrap ni nada excepto el preprocesador SASS, me
                  encantó ver como cambiaba la web.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Así que pasé los primeros 2 meses dedicándole unas 8 a 10
                  horas diarias dependiendo el día.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Al llegar a JavaScript, me parecía todo mucho más complicado,
                  al punto de que había días en que solo me detailsertía
                  haciendo webs con HTML y CSS.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Me daba estres al principio de aprender JavaScript por que
                  empecé con tutoriales de youtube y caí en un ciclo de
                  “Tutorial Hell”. Vamos, que no conseguía que entraran las
                  cosas en la cabeza, no lo entendía porque yo había aprendido
                  lo básico de Python muy fácil, pero después de darme cuenta de
                  que viendo videos, apuntando lo que aprendes sin pasar a la
                  acción y aprendiendo de fallos, no ganabas nada, era
                  completamente diferente de HTML Y CSS, en fin, estuve como 2
                  semanas con ese sin vivir de tutorial hell, hasta que encontré
                  mi camino a seguir.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Habían pasado casi 3 meses desde que empecé por lo que decidí
                  buscar formas que me podrían ayudar. La verdad en España no
                  encontré ningún video que me podría ayudar, así que me fui a
                  buscar tutorials en Inglés, ahí encontré FreeCodeCamp y Odin
                  Project, la verdad, me salvo el dolor de cabeza que tuve con
                  JavaScript, y todo me era como la seda. Aprendí básicamente
                  todo lo básico en 1 semana.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Llegandó casi a la segunda semana del 3 mes, entendí lo
                  básico, pero no entendía mucho la lógica de programación, así
                  que busqué en internet y encontré codewars, y leetcode es una
                  página web de retos de programación, donde hacía retos de
                  JavaScript.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Entendiendo esto y aprendiendo me di cuenta que no me hacía
                  tanto falta aprender todo de JavaScript, si no React y
                  frameworks de JavaScript como jQuery aprendí la forma fácil de
                  JavaScript:
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  jQuery: Sencillamente es un caramelo dulce de JavaScript, no
                  tuve problemas en aprenderlo.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  React: Me resultaba más fácil esto que JavaScript, ya que con
                  JSX y React era bastante sencillo hacer componentes, para
                  seguir veía formas más rápidas de usar React.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Vi que me había saltado las librerias de CSS como BootStrap y
                  TailwindCSS, por lo que me dediqué a aprender lo básico, pero
                  no me gustaron mucho, por lo que sigo con CSS, React…
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Viendo todo esto, habían pasado 5 a 6 meses sin darm e cuenta,
                  y dije sin pensar ¡VOY A PRESENTARME A TRABAJOS!
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  ERROR! Para mi decepción ni siquiera hacen entrevist as,
                  descartan tu curriculum y apenas los ven, ahí me di cuenta que
                  mucha gente estaba hacienda lo mismo que yo, aprendiendo a
                  programar en 2022. Por lo que decidí mientras me presento a
                  trabajos, reforzar mis conocimientos durante unos meses.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Al cabo de un tiempo, al fin tuve una entrevista.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Al hacermela, en España te piden experiencia minimo 1 año, o
                  haber hecho algún FP relacionado, solo tengo microsistemas,
                  asi que no contaba, el hombre de la entrevista me explicó que
                  debería hacer algo relacionado con esto, como un FP o algo…
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  En fin, espero que una empresa me de una oportunidad!
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Atentamente. Jonathan Manzano
                </p>
              </details>
              <details>
                <summary className="text-xl py-2 leading-8 text-gray-800 dark:text-white">
                  English
                </summary>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Since April 2022 I have been learning to program, since I was
                  little I have already had an ability and love for computers I
                  took a course on computer microsystems, but I was not
                  passionate about it.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Living with my family, I don´t have burdens and I dedicated
                  myself throughout 2022 to studying programming, I started with
                  python and studied the basics, just for fun, then I realized
                  that people were looking for programming jobs, so I started to
                  investigate and what I liked the most was the Front End.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  I spent almost 1 month and a half learning HTML5 and CSS3, the
                  structure of HTML5, SEO and the best ways to give structure to
                  websites, after that, I started in CSS3 and I only dedicated
                  myself to CSS, I didn´t study anything else, not even
                  libraries like BootStrap or anything except the SASS
                  preprocessor, I loved watching the web change.{" "}
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  So I spent the first 2 months dedicating 8 to 10 hours a day
                  to it depending on the day.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  When it came to JavaScript, everything seemed much more
                  complicated to me, to the point that there were days when I
                  just had fun making websites with HTML and CSS.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  It gave me stress at the beginning of learning JavaScript
                  because I started with YouTube tutorials and fell into a cycle
                  of "Tutorial Hell". Come on, I couldn´t get things into my
                  head, I didn´t understand it because I had learned the basics
                  of Python very easily, but after realizing that watching
                  videos, writing down what you learn without taking action and
                  learning from mistakes, you didn´t gain anything, it was
                  completely different from HTML AND CSS, in short, I spent like
                  2 weeks with that hell tutorial without living, until I found
                  my way to follow.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  It had been almost 3 months since I started so I decided to
                  look for ways that could help me.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  The truth is that in Spain I did not find any video that could
                  help me, so I went looking for tutorials in English, there I
                  found FreeCodeCamp and Odin Project, the truth is, it saved me
                  from the headache I had with JavaScript, and everything was
                  like silk. I learned basically all the basics in 1 week.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  It´s almost the second week of 3 months. I understood the
                  basics, but I didn´t understand programming logic much, so I
                  searched the internet and found codewars, and leetcode is a
                  programming challenge website, where I did JavaScript
                  challenges.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Understanding this and learning, I realized that I didn´t need
                  to learn everything about JavaScript so much, but React and
                  JavaScript frameworks like jQuery. I learned the easy way to
                  JavaScript:
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  JQuery: It´s just sweet JavaScript candy. I had no problem
                  learning it.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  React: This was easier for me than JavaScript, since with JSX
                  and React it was quite easy to make components, to continue I
                  saw faster ways to use React.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  I saw that I had skipped CSS libraries like BootStrap and
                  TailwindCSS, so I dedicated myself to learning the basics, but
                  I didn´t like them very much, so I continue with CSS, React...
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Seeing all this, 5 to 6 months had passed without realizing
                  it, and I said without thinking is...
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  I´M GOING TO REPORT TO JOBS!
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  ERROR! To my disappointment, they don´t even do interviews,
                  they discard your resume and hardly see them, that´s when I
                  realized that many people were doing the same as me, learning
                  to program in 2022.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  So I decided while applying for jobs, strengthen my knowledge
                  for a few months.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  After a while, I finally had an interview.
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  When doing it, in Spain they ask you for a minimum of 1 year
                  experience, or to have done a related FP, I only have
                  microsystems, so it didn´t count, the man from the interview
                  explained to me that I should do something related to this,
                  like a FP or something...
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Anyway, I hope that a company gives me an opportunity!
                </p>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white">
                  Sincerely. Jonathan Manzano
                </p>
              </details>
            </div>
            <div className="lg:flex gap-10 justify-center">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                  alt={"Design Image"}
                />
                <h3 className="text-xl font-medium pt-8 pb-2">Front End</h3>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Here is the Front End tools I Learned
                </p>
                <h4 className="font-bold py-4 text-teal-600 text-lg">
                  Basic Stack
                </h4>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  HTML5
                </p>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  CSS3
                </p>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  JavaScript
                </p>
                <h4 className="font-bold py-4 text-teal-600 text-lg">
                  Pre-Processor
                </h4>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  SASS
                </p>
                <h4 className="flex items-center justify-center font-bold py-4 text-teal-600 text-lg">
                  Libraries
                </h4>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  BootStrap
                </p>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  TailWindCSS
                </p>
                <h4 className="font-bold py-4 text-teal-600 text-lg">
                  FrameWorks
                </h4>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  jQuery
                </p>
                <p className="flex items-center justify-center text-lg font-semibold text-gray-800 py-1">
                  React
                </p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                  alt={"Design Image"}
                />
                <h3 className="text-xl font-medium pt-8 pb-2">Back End</h3>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Here is the Back End tools I Learned
                </p>
                <h4 className="font-bold py-4 text-teal-600 text-lg">
                  Basic Stack
                </h4>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  NodeJS
                </p>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Python (Basic)
                </p>

                <h4 className="font-bold py-4 text-teal-600 text-lg">OS</h4>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Windows
                </p>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Linux
                </p>
                <p className="text-lg font-semibold text-gray-800 py-1">Unix</p>
                <h4 className="font-bold py-4 text-teal-600 text-lg">
                  Libraries
                </h4>
                <p className="text-lg font-semibold text-gray-800 py-1">EJS</p>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  ExpressJS
                </p>
                <p className="text-lg font-semibold text-gray-800 py-1">
                  Body-Parser
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
