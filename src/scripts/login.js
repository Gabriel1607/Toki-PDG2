import { db, auth, app } from "./app";
import { loginUser, registerUser, addUserToDatabase, onAuthStateChanged } from "../functions/auth";
import { updateUserData, getUser } from "./getUser";
import { signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const selectedSubject = [];
const csvData = `title;url;type;image;desc;;
Diplomado en Marketing Digital;https://www.icesi.edu.co/sitios/diplomado-en-marketing-digital.php;scrum;https://www.icesi.edu.co/sitios/images/marketing-digital/banner-marketing-digital-mobile.png;El comercio electrónico B2C alcanzó en el mundo los 26,7 billones de dólares?(UNCTAD, 2021) y Colombia se posiciona como el tercer país que pasa más tiempo en Internet con un promedio de diez horas y tres minutos al día. Imagina lo que podrías vender con una potente estrategia de mercadeo digital. Con este diplomado desarrollarás tu capacidad para entender y aplicar conceptos, metodologías e instrumentos, a fin de que tu marca o empresa saquen el máximo provecho del mundo digital. ;;
Coaching personal y organizacional;https://www.icesi.edu.co/educacion_continua/cursos-virtuales/diplomado-blended-coaching-personal-y-organizacional;scrum;https://www.icesi.edu.co/educacion_continua/images/Educacion_continua/Banners/2022/banner-coaching-personal-y-organizacional.png;Este diplomado tiene una base importante e impactante en todo lo relacionado con el desarrollo de competencias para ser un mejor líder con recursos del coaching, con temáticas tales como auto conocimiento, comunicación, conversaciones, liderazgo y equipos de trabajo. Este diplomado es presentado por el Centro de liderazgo y coaching PANDORA, con un amplia trayectoria y reconocida experiencia en acompañar empresas y ejecutivos en los procesos de liderazgo, coaching y comportamiento humano en las organizaciones.;;
How to Speak with Effortless Confidence;https://www.linkedin.com/learning/how-to-speak-with-effortless-confidence;scrum;https://oit.duke.edu/sites/default/files/styles/large/public/thumbnails/image/linkedin%20learning%20logo.png?itok=O2hbD0eX;There’s a key business skill that top actors already know—how to speak with confidence and courage. Confidence comes from the habits you build–not just the traits you’re born with. Yet, many people dread interviewing or public speaking. In this audio-only course, sought-after speaker and voice coach Caroline Goyder offers practical tips for turning your voice into a source of strength.;;
Liderazgo con inteligencia emocional;https://www.linkedin.com/learning/liderazgo-con-inteligencia-emocional;scrum;https://oit.duke.edu/sites/default/files/styles/large/public/thumbnails/image/linkedin%20learning%20logo.png?itok=O2hbD0eX;Las emociones nos rodean en la oficina, y es importante que como líder entiendas cómo aprovecharlas para cultivar la productividad y las relaciones positivas. En este curso, la directora de formación y desarrollo de lynda.com, Britt Andreatta te mostrará cómo desarrollar la inteligencia emocional para liderar mejor tus equipos y trabajar con tus compañeros y superiores. Aprende qué es la inteligencia emocional y cómo afecta al trabajo, y descubre técnicas concretas para elevar tu propio coeficiente emocional (CE), como la percepción de ti mismo, el autocontrol emocional, la capacidad de recuperación y el desarrollo de la empatía. Luego aplica estas lecciones para mejorar tu conocimiento de los demás y aprende a incentivar la buena comunicación y a manejar conflictos.;;
Agile Project Managment;https://www.coursera.org/learn/agile-project-management;scrum;https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Data_Analytics2x.original.png;This course will explore the history, approach, and philosophy of Agile project management, including the Scrum framework. You will learn how to differentiate and blend Agile and other project management approaches. As you progress through the course, you will learn more about Scrum, exploring its pillars and values and comparing essential Scrum team roles. You will discover how to build, manage, and refine a product backlog, implement Agile’s value-driven delivery strategies, and define a value roadmap. You will also learn strategies to effectively organize the five important Scrum events for a Scrum team, introduce an Agile or Scrum approach to an organization, and coach an Agile team. Finally, you will learn how to search for and land opportunities in Agile roles. Current Google project managers will continue to instruct and provide you with the hands-on approaches, tools, and resources to meet your goals.;;
¿Qué es el Agile Coaching?;https://www.scrum.org/resources/blog/que-es-el-agile-coaching;scrum;https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/pexels-photo-4098369.jpeg;El Agile Coaching, también conocido como coaching ágil, es un enfoque utilizado en el desarrollo de software y en la gestión de proyectos fomentando la adopción y mejora continua de los principios y prácticas ágiles. El Agile Coach es un profesional especializado que brinda orientación y apoyo a los equipos y organizaciones que buscan implementar o mejorar sus procesos ágiles. Además, ese Agile Coach actúa como un facilitador y mentor, trabajando con los equipos para ayudarlos a comprender y aplicar los valores y principios ágiles en su trabajo diario. Esto implica enseñar y promover prácticas ágiles, como Scrum, Kanban o Lean, así como técnicas de colaboración, comunicación efectiva y toma de decisiones basada en la retroalimentación.;;
The public speaking lesson you never had;https://www.youtube.com/watch?v=xSp78RwcAS4;scrum;https://i3.ytimg.com/vi/xSp78RwcAS4/maxresdefault.jpg;Got an important presentation or pitch coming up and struggling to prepare? This will help: explore the three elements which make up a great talk plus a Jedi-mind trick that reframes those nerves once and for all. DK https://justadandak.com is a Creative Producer who 'crafts delicious learning experiences' online, in-studio or in-person. He spent nearly a decade as the TEDxWellington / TEDxWellingtonWomen licensee plus founder of the unique video podcast Creative Welly https://www.creativewelly.com and the annual Creative Leadership NZ conference https://www.creativeleadership.nz.;;
Perfectionism holding you back? 3 ways to shift the habit;https://ideas.ted.com/3-ways-to-break-the-perfectionism-habit/;scrum;https://ideas.ted.com/wp-content/uploads/sites/3/2023/04/FINAL_Perfectionsim_credit-iStock.png?resize=1000,600;"At its core, perfectionism is about anxiety — you’re afraid of failing or afraid that making a mistake means that there’s something wrong with you. “Perfectionism is more than pushing yourself to do your best to achieve a goal; it’s a reflection of an inner self mired in anxiety,” he adds. According to Greenspon, the most highly successful people are actually less likely to be perfectionistic, because perfectionism can leave you overwhelmed by doubt and indecision and make it difficult to bring any task to a conclusion";;
How to Use Gestures and Body Language to Keep Your Audience Engaged;https://www.youtube.com/watch?v=Yh9B6mHqvug;scrum;https://i3.ytimg.com/vi/Yh9B6mHqvug/maxresdefault.jpg;Have you ever seen someone give a speech or presentation, and the whole time they stood stiffly at the lectern or podium? It can be boring to watch someone give a speech or presentation when they don’t use movement to keep you engaged. The 2018 World Champion of Public Speaking, Ramona Smith, will help you plan how to effectively use appropriate body language to captivate your audience! ;;
The 2020 Scrum GuideTM;https://scrumguides.org/scrum-guide.html;scrum;https://mms.businesswire.com/media/20201118005129/en/838779/23/Scrumorg-Logo_tagline-TM_%281%29_%281%29_%282%29.jpg;The Scrum Guide contains the definition of Scrum. Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum. Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless.;;
UI Modes and Modals;https://www.youtube.com/watch?v=W6jLcFoi1mA;ui;https://i3.ytimg.com/vi/W6jLcFoi1mA/maxresdefault.jpg;Modes can be a hidden state and lead to user errors. But they can also make a user interface more efficient by allowing the same action to have different results, depending on the situation.;;
When the UI Is Too Fast;https://www.nngroup.com/articles/too-fast-ux/;ui;https://media.nngroup.com/media/articles/opengraph_images/SocialMediaPosts_20-30_jpw_09.png;"Users might overlook things that change too fast — and even when they do notice, changeable screen elements are harder to understand in a limited timeframe. Given that 99% of all usability problems related to response times are caused by user interfaces being too slow, it might be dangerous for me to write about those few cases where the computer is too fast. After all, computers are usually too slow, and
snappy response times enhance usability. Human memory decays rapidly, so people might forget some of what they were doing while waiting for a slow computer.
Further, while young users are notoriously impatient, even older users won’t linger long on a slow site.";;
25+ Best Fun & Playful Fonts in 2023;https://designshack.net/articles/inspiration/best-fun-playful-fonts/;ui;https://designshack.net/wp-content/uploads/best-fun-playful-fonts-368x246.jpg;Fonts are not just about adding text to designs. With the right font, you can also add a bit of fun and personality to your work. Today, we have a bunch of playful and fun fonts you can use to achieve that task.;;
Fitness Training App;https://dribbble.com/shots/21483136-Fitness-Training-App;ui;https://cdn.dribbble.com/userupload/7073059/file/original-7e9a26d7aa43e6bfbef8c8b2cb74a3aa.png?compress=1&resize=1200x900;Esta es una referencia de diseño que te puede servir para tus trabajos :) ;;
English Practice Design with Mascot;https://dribbble.com/shots/21482245-English-Practice-Design-with-Mascot;ui;https://cdn.dribbble.com/userupload/7070228/file/original-92aa49c34a32465360697db2bd239609.jpg?compress=1&resize=752x;Esta es una referencia de diseño que te puede servir para tus trabajos :) ;;
UI Design Patterns for Successful Software;https://www.interaction-design.org/courses/ui-design-patterns-for-successful-software;ui;https://www.interaction-design.org/certificates/course/42/sample;People are hard-wired to recognize patterns, even when there are none. It’s the same reason that we often think we know where to click when first experiencing a website—and get frustrated if things aren’t where we think they should be;;
UI design resources;https://www.figma.com/resource-library/ui-design/;ui;https://cdn.sanity.io/images/599r6htc/localized/a1dd757abcafbd6e49e75c214b74cc2adcaea714-1080x541.png?q=75&fit=max&auto=format&dpr=2;If everything looks the same, then you see nothing. Visual hierarchy can change that.;;
Mobile UI Design;https://www.interaction-design.org/courses/mobile-ui-design-course;ui;https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;People delete 3 out of 10 apps within 30 days of downloading. You must deliver an exceptional user experience to engage people with your product. Learn mobile UI design to turn design ideas into interfaces your customers will love.;;
Professional Certificate in UI Design;https://www.uxdesigninstitute.com/courses/ui-design;ui;https://www.uxdesigninstitute.com/images/professional-certificate-ui-design.png;Learn the principles, techniques and craft of designing high quality user interfaces.;;
Affordances: Designing Intuitive User Interfaces;https://www.interaction-design.org/courses/affordances-designing-intuitive-user-interfaces;ui;https://public-media.interaction-design.org/images/course/poster/topic-definition-affordances.1592398847.jpeg;Affordances are a key concept for designers. If you want to build products that are intuitive and easy to use, fully understanding the relationship between the human mind and technology is crucial. ;;
The problem with sticky menus and what to do instead;https://adamsilver.io/blog/the-problem-with-sticky-menus-and-what-to-do-instead/?ref=uxdesignweekly;ux;https://adamsilver.io/assets/images/the-problem-with-sticky-menus-and-what-to-do-instead/material-design.png;Designers use sticky menus (menus that stick to the edge of the viewport) to make them easy to access on long pages. But this fancy pattern hurts UX far more than it improves it. Here’s why;;
“That little island changes everything”;https://design.lyft.com/that-little-island-changes-everything-b89b108f45b4;ux;https://miro.medium.com/v2/resize:fit:828/format:webp/1*h7b2WE1FCqbitw2XEod47g.png;How we designed Lyft Live Activities to elevate the rider experience. Failing to deliver the right information, at the right moments can lead to poor experiences for riders & drivers alike. Fortunately, the Lyft app does a great job at delivering those critical updates. Unfortunately, we can’t actually guarantee that riders will have our app open to see them.;;
Common Region: Gestalt Principle for User Interface Design;https://www.youtube.com/watch?v=clqzTQ-nTig;ux;https://i3.ytimg.com/vi/clqzTQ-nTig/maxresdefault.jpg;Items within a boundary are perceived as a group and assumed to share some common characteristic or functionality.;;
Accessible Target Sizes Cheatsheet;https://www.smashingmagazine.com/2023/04/accessible-tap-target-sizes-rage-taps-clicks/;ux;https://files.smashing.media/articles/accessible-tap-target-sizes-rage-taps-clicks/01-rage-taps-metric-for-user-frustration.jpg;Practical guidelines to prevent rage taps and rage clicks with accessible tap targets for icons, links and buttons — on desktop and on mobile. With useful techniques and guidelines. Rage taps are annoying and frustrating. These wonderful occurrences in our interface when we need to tap twice or sometimes three times to continue our journeys. Of course, sometimes they happen because the website is too slow, but sometimes it’s the target size of interactive elements that is the culprit;;
Avoiding pitfalls in reporting user behavior changes;https://uxdesign.cc/avoiding-pitfalls-in-reporting-user-behavior-changes-fdd8175aefe9;ux;https://miro.medium.com/v2/resize:fit:828/format:webp/1*9bMgn22VghtNjy22RtmXNw.jpeg;When a product undergoes a redesign, it’s common practice to report changes in user behavior patterns as a percentage. However, such reporting assumes that users behave like robots and that any change in design will have a linear effect on their behavior. ;;
Design for a Better World with Don Norman;https://www.interaction-design.org/courses/design-for-a-better-world-with-don-norman-course;ux;https://public-media.interaction-design.org/images/course/poster/dbw-trailer-horizontal.1679010598.jpg;"Don Norman, the father of user experience, puts it bluntly when he says, “the world is a mess.” So, how do we clean up this mess? Through design. Let’s learn how to design for a better world with Don Norman. ""...professional designers have the training and the knowledge to have a major impact on the lives of people and therefore on the earth.”";;
Micromaster: Investigación de usuario;https://www.icesi.edu.co/educacion_continua/cursos-virtuales/micromaster-en-investigacion-de-usuario;ux;https://www.icesi.edu.co/educacion_continua/images/Educacion_continua/imagenes/micromaster-en-investigacion-de-usuarios/banner-investigacion-de-usuarios-2.jpg;Diseñar experiencias que fortalezcan la propuesta de valor de los usuarios es hoy una prioridad. el mundo digital ya no se rige hoy únicamente por características funcionales, la competencia es cada vez más abundante y la demanda de los profesionales capaces de conectar al negocio con sus usuarios es cada vez más elevada.  El diseño de la experiencia del usuario (UX) es el proceso que permite la creación de productos que impactan positivamente al usuario a través de experiencias significativas y relevantes. ;;
The Ultimate Guide to Visual Perception and Design;https://www.interaction-design.org/courses/the-ultimate-guide-to-visual-perception-and-design;ux;https://upload.wikimedia.org/wikipedia/commons/c/c1/Ley-14-principio-de-semejanza.png;"Human vision is an amazing ability; we are capable of interpreting our surroundings so as to interact safely and accurately with little conscious effort.";;
Maestría en Gestión de la Innovación;https://www.icesi.edu.co/facultad-ingenieria/maestria-en-gestion-de-la-innovacion;ux;https://www.icesi.edu.co/facultad-ingenieria/images/ingenierias/innovacion/ppal-maestria-gestion-innovacion-icesi-cali-posgrados-movil.jpg;Aprende a crear valor y competir mediante la diferenciación, a cómo innovar en la revolución de la información y digitalización y descubre las tendencias de las Metodologías Ágiles en procesos industriales, de innovación y de Gerencia de Proyectos.;;
Gamification - How to Create Engaging User Experiences;https://www.interaction-design.org/courses/gamification-how-to-create-engaging-user-experiences;ux;https://public-media.interaction-design.org/images/uploads/user-content/1445/nUQP5YVVLJMgorNccSDBI2lQcEcMfL3MoXSMsWJL.jpeg;Gamification, the process of adding game-like elements to real-world or productive activities, is a growing market. By making a product or service fit into the lives of users, and doing so in an engaging manner, gamification promises to create unique, competition-beating experiences that deliver immense value. In fact, TechSci Research estimates that the global gamification industry will grow to reach $40 billion by 2024.;;
Future CSS: Anchor Positioning;https://kizu.dev/anchor-positioning-experiments/?utm_source=CSS-Weekly&utm_campaign=Issue-548&utm_medium=web;develop;https://cdn.pixabay.com/photo/2016/11/17/23/29/programming-1832991_1280.png;Anchor positioning might be one of the most exciting features coming to CSS. It is currently available under an experimental flag in Chrome Canary, and after playing with it for a bit, I couldn’t stop myself from sharing what I found. In this article, I will show you some of my experiments.;;
Don’t use custom CSS scrollbars;https://ericwbailey.website/published/dont-use-custom-css-scrollbars/?utm_source=CSS-Weekly&utm_campaign=Issue-548&utm_medium=web;develop;https://ericwbailey.website/img/posts/dont-use-custom-css-scrollbars/browser-content-area.png;In the spirit of “everything old is new again,” browsers are once again supporting the ability to style the scrollbar. Much like custom CSS mouse cursors, I feel this is also a mistake. When you style things on the web. you get control over almost the entire experience. The browser’s UI is informed by the operating system it is installed on. This is important to note.;;
Iconoir: free icons;https://iconoir.com/?utm_source=CSS-Weekly&utm_campaign=Issue-548&utm_medium=web;develop;https://iconoir.com/iconoir-brand-03.png;Excelente libreria de iconos de uso gratuito que te ayudará al desarollo de tus proyectos :D;;
How JavaScript’s Asynchronous Operations Work in the Browser;https://www.freecodecamp.org/news/javascript-asynchronous-operations-in-the-browser/;develop;https://www.freecodecamp.org/news/content/images/size/w1600/2023/05/single-and-multi-threads.png;JavaScript es un lenguaje de programación popular que se utiliza para desarrollar aplicaciones web front-end interactivas, entre otras cosas. Descúbrelo en este artículo.;;
How to Write Clean Code – Tips and Best Practices (Full Handbook);https://www.freecodecamp.org/news/how-to-write-clean-code/;develop;https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-ken-tomita-389819.jpg;"En este manual vamos a hablar sobre cómo escribir código ""limpio"". Es un tema que me confundía un poco cuando me iniciaba como programador, y encuentro que tiene muchos matices y posibles interpretaciones. Entonces, en este artículo hablaremos sobre lo que significa el término ""código limpio"", por qué es importante, cómo podemos evaluar si una base de código está limpia o no. También aprenderá algunas prácticas recomendadas y convenciones que puede seguir para que su código sea más limpio.";;
React Native, v2;https://frontendmasters.com/courses/react-native-v2/;develop;https://static.frontendmasters.com/thumb/savage-a/2020/05/05/2-90.jpg;Leverage your JavaScript and React skills for mobile iOS and Android platforms using React Native. Examples in this course allow you to get started quickly and see your changes immediately in React Native using Expo, or use pure React Native standalone if you prefer. ;;
Interaction Design for Usability;https://www.interaction-design.org/courses/interaction-design-for-usability;develop;https://public-media.interaction-design.org/images/uploads/user-content/1445/0LgTxkFM0rkBZKwzSckIE1oBSMW9aibaEEgH6JmB.jpeg;This course will teach you fundamental usability concepts and methods and will tie them together with interaction and visual design. By completing the course, you will become equipped with the tools required to create products with outstanding user experience and usability. Your newly acquired knowledge will also enable you to reduce the costs, risk, and time required to design and implement such products.;;
How to Use React Server Components – A Beginner's Guide;https://www.freecodecamp.org/news/react-server-components-for-beginners/;develop;https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-panumas-nikhomkhai-1148820--2-.jpg;React Server Components have been generating significant buzz and excitement lately. They've recently been adopted as the default option in Next.js 13, so now more and more developers are using them. React Server Components seamlessly blend server-side rendering with the interactivity of client-side JavaScript. And in this tutorial, you'll learn all about what React Server Components are, the problems they solve, and the powerful capabilities they provide.;;
Learn Intermediate CSS;https://www.codecademy.com/learn/learn-intermediate-css;develop;https://images.ctfassets.net/go6kr6r0ykrq/2uzW2mf467i5qpTn76Hg0T/10aa7df78e09edab69e44a80adf0a796/le-review-mobile.gif;You’ve figured out the basics of CSS, and your web pages are full of pretty colors and evocative fonts. But you want to do more! With Intermediate CSS, you’ll learn how to recreate the dynamism and the visual effects that you see on professional sites around the web.;;
Learn Git & GitHub;https://www.codecademy.com/learn/learn-git;develop;https://images.ctfassets.net/go6kr6r0ykrq/2uzW2mf467i5qpTn76Hg0T/10aa7df78e09edab69e44a80adf0a796/le-review-mobile.gif;Git is used across the world to help developers keep track of changes while working on different parts of the same project. GitHub is a web app that can integrate with Git. Together, users can host, organize, explore, and collaborate on code with teams and the wider developer community. This course gives you an introduction to Git and GitHub — and how they work together as you build projects.;;
How do you Storyboard for Motion Graphics & Motion Design?;https://www.fable.app/blog/how-do-you-storyboard-for-motion-graphics-and-motion-design/;creative;https://cdn.sanity.io/images/1dqplxt1/production/4324c886ace7a588b7629b809873aaa37cb5b63e-3840x2160.jpg?w=1600&h=900&q=95&fit=max&auto=format&width=1600;There’s a special magic to seeing a motion graphic come together when all of the animations work seamlessly to paint a picture, tell a story, or just delight you. Turning a simple idea into a work of art takes time, skill, and experience, but the building blocks are often the same. For many motion designers, their creative ideas start to turn into something tangible at one key phase: the storyboard.;;
How To Become a 3D Artist;https://www.computercareers.org/how-to-become-a-3d-artist/;creative;https://cdn.computercareers.org/wp-content/uploads/word-image-266.png.webp;Those with an artistic edge and a passion for technology can thrive in this field where flexibility and creativity are the top signatures. Entering the realm of 3D design can be a gripping adventure should you know how to become a 3D artist. Likewise, it can be a bumpy road if you’re in the dark about where to begin.;;
How To Become a Concept Artist: Steps and Tips;https://www.indeed.com/career-advice/career-development/how-to-become-a-concept-artist;creative;https://live.staticflickr.com/7155/6853035691_d1d1fd11e3_b.jpg;Concept artists are designers who are responsible for visualizing and creating a variety of creative assets in several different settings. These artists are incredibly skilled at what they do and must have several skills to be successful. In this article, we explore what a concept artist is, what they do in their day-to-day work lives, steps you can take to become a concept artist and frequently asked questions about this career path.;;
El papel del game designer en el desarrollo de videojuegos;https://www.unir.net/ingenieria/revista/game-designer/;creative;https://www.unir.net/wp-content/uploads/2021/11/cabeceradesigner-min-e1675360138548.jpg;Son muchos los elementos que integran un videojuego: tecnología, narrativa y arte van de la mano para crear una historia que tiene sus personajes, sonidos, escenarios e interfaces. El game designer asume la labor de crear cada una de esas piezas y que estas encajen a la perfección. La evolución de la industria de los videojuegos ha sido tal que si hace un par de décadas un desarrollador de videojuegos era exclusivamente un programador, hoy el perfil de quienes se dedican al diseño y desarrollo de videojuegos no entiende de barreras. El game designer es el responsable del diseño de las piezas del juego y ya no tiene por qué ser programador. De todas maneras, siempre será un perfil más completo aquel que ofrezca la posibilidad de programar.;;
What NOT to Do as a New Animator;https://www.animationmentor.com/blog/what-not-to-do-as-a-new-animator/;creative;https://blog.animationmentor.com/wp-content/uploads/2018/03/NewAnimator.jpg;You’re right to be a little apprehensive about starting a new animation job. There are some pitfalls to watch out for. While the animation part of the job should take care of itself with hard work, there’s more to succeeding at a new studio than getting your shots approved.;;
The essential ingredients to creating stylized 3D;https://www.schoolofmotion.com/workshops/the-essential-ingredients-to-creating-stylized-3d;creative;https://assets-global.website-files.com/61406347b8db463e379e2732/61a8117a3bd445bf42698f01_Holdframe_Workshop_HowToMakeSushi_WhatsCovered.jpg;How to Make Sushi is a personal project and 3D masterpiece by Jonathan Lindgren. Determined to change the way people viewed his work, Jonathan set out to combine his love of all things 3D, character animation, and Japanese manga and anime.;;
Creating Video Games;https://ocw.mit.edu/courses/cms-611j-creating-video-games-fall-2014/;creative;https://ocw.mit.edu/courses/cms-611j-creating-video-games-fall-2014/68be269a8890549108049836924a39b2_cms-611jf14.jpg;Creating Video Games is a class that introduces students to the complexities of working in small, multidisciplinary teams to develop video games. Students will learn creative design and production methods, working together in small teams to design, develop, and thoroughly test their own original digital games;;
Code Your First Game: Arcade Classic in JavaScript on Canvas;https://www.udemy.com/course/code-your-first-game/;creative;https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png;You will learn about: Display, position, and move filled shapes for retro and prototype gameplay, move a ball around your game space such that it bounces off boundaries, handle real-time mouse input and more;;
Game Audio 101: How to Create Sounds for Games;https://www.udemy.com/course/gameaudio101/;creative;https://img-b.udemycdn.com/course/750x422/3138552_9dab_4.jpg;You will learn about: he different uses and affects of audio in games. how to create compelling sounds for a game, creating audio asset types specific to games and more.;;
Especialización en Animación 3D para Entornos Transmedia;https://www.uao.edu.co/programa/especializacion-en-animacion-3d-para-entornos-transmedia/;creative;https://www.uao.edu.co/wp-content/uploads/2020/11/Cabezotes_Esp-en-Animaci%C3%B3n-3D.png;En la especialización en Animación 3D para Entornos Transmedia de la UAO se destaca por su énfasis en entornos 3D y efectos visuales que involucra a la institución con la comunidad, pensando en el desarrollo social de la región y también por hacer hincapié en las expresiones artísticas y estéticas de los grupos sociales que interactúan en la región.;`;
const subjectToArea = {
coe1: "scrum",
logica: "scrum",
coe2: "scrum",
pi1: "scrum",
bi: "ui",
dyt: "ui",
color: "ui",
arqui: "ui",
intro: "ux",
dys: "ux",
percep: "ux",
estad: "develop",
fundaprogra: "develop",
dca: "develop",
eco: "develop",
tri: "creative",
fotografia: "creative",
sonido: "creative",
expre: "creative",
narra: "creative",
d4d: "creative",
}
const registerUserForm1 = document.getElementById("registerUserForm");
const registerUserForm2 = document.getElementById("registerUserForm2")
const loginUserForm = document.getElementById("loginUserForm");
const registerUserForm3 = document.getElementById("registerUserForm3")
const semestre =document.getElementById('semester')
const notas_semestres = document.querySelectorAll('table');

const avatars = document.querySelectorAll('.register__chooseavatar img'); //contendeor de los avatares
const selectedAvatar = document.getElementById('selected_avatar'); // Imagen "actual""
const okButton = document.getElementById('okButton');//Boton para subir el avatar y pasar al home
const storage = getStorage(app);
const helloMsg = document.getElementById("hello");
const logoutLink = document.getElementById('logoutLink');

let isLogged = false;

var coll = document.getElementsByClassName("collapsible");
var i;
var path = window.location.pathname;
console.log(path);
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//JS DE MATERIAS
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
if (path==='/subject.html') {
  async function loadNotes() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
          const userO= await getUser(uid);
          const favs = userO.favoritas;
          const subjectImages = document.querySelectorAll('img[data-subject]');

// Attach the event listener to each subject image
subjectImages.forEach(image => {
  const ele = image.getAttribute('data-subject');
  if(favs.includes(ele)){
    image.classList.remove('hidden');
  }else{
    image.classList.add('hidden');
  }
});
          const notas = userO.notas;
          console.log(notas); 
          const aprov = userO.aprobado;
          console.log(aprov); 
          const notaFuse = Object.assign({}, notas, aprov);
          const container = document.querySelector('.allSubject__container'); 
          for (const subject in notaFuse) {
            const card = document.createElement('div');
            card.classList.add('allSubject__card');
          
            const title = document.createElement('p');
            title.classList.add('allSubject__psmall');
            title.textContent = subject;
            card.appendChild(title);
          
            const grade = notaFuse[subject];
            const gradeElement = document.createElement('p');
            gradeElement.classList.add('allSubject__grade');
            
            if (typeof grade === 'boolean') {
              gradeElement.textContent = 'Aprobado';
            } else {
              gradeElement.textContent = grade.toString();
            }
            
            card.appendChild(gradeElement);
          
            container.appendChild(card);
          }
          isLogged=true;
        }
        
      }
    });
}
loadNotes();
}
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//JS DEL HOME
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
//-0-0-0-0-0-0-0-0-0-0
if (path==='/home.html') {
  async function loadRecommendations() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          if (!isLogged) {
            const uid = user.uid;
            const userObj = await getUser(uid);
           helloMsg.innerHTML='¡Hola, '+userObj.name+'!'
            const faves = userObj.favoritas;
          faves.forEach((sub,index,array) => {
            if (subjectToArea.hasOwnProperty(sub)) {
                array[index] = subjectToArea[sub];
              }
          });
          console.log(faves);
          // Split the CSV data into rows
const rows = csvData.split(';;');

// Remove the header row if present
if (rows.length > 0) {
  rows.shift();
}
const cardsToShow = 3; // Number of cards to show initially
const profiles = document.getElementsByClassName('profile__card');
for (const card of profiles) {
  // Get the education area ID from the card's ID
  const areaId = card.id;

  // Check if the card's education area matches the selected area
  if (faves.includes(areaId)) {
    // If it matches, remove the "hidden" class to make the card visible
    card.classList.remove('hidden');
  } else {
    // If it doesn't match, add the "hidden" class to hide the card
    card.classList.add('hidden');
  }
}
// Get the container element where the HTML structures will be inserted
const container = document.querySelector('.recommended__cardlist');
const seeMoreBtn = document.querySelector('#seeMoreBtn');
const cards = []; // Array to store all the cards
// Shuffle the rows array
for (let i = rows.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [rows[i], rows[j]] = [rows[j], rows[i]];
}
// Loop through each row in the CSV data
for (const row of rows) {
  // Split the row into individual values
  const [title, url, type, image, desc] = row.split(';');
if (faves.includes(type)) {
 // console.log(type);
  // Create the HTML structure based on the template
  const card = document.createElement('div');
  card.classList.add('recommended__card');

  const cardImage = document.createElement('img');
  cardImage.src = image;
  cardImage.classList.add('recommended__image');
  card.appendChild(cardImage);

  const cardTitle = document.createElement('p');
  cardTitle.classList.add('recommended__subtitle');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardDesc = document.createElement('p');
  cardDesc.classList.add('recommended__psmall');
  cardDesc.textContent = desc;
  card.appendChild(cardDesc);

  // Add the card to the container
  container.appendChild(card);
  // Add the card to the array
  cards.push(card);
}
}
// Hide the remaining cards
cards.slice(cardsToShow).forEach(card => {
  card.style.display = 'none';
});
// Toggle visibility of hidden cards when "See More" button is clicked
seeMoreBtn.addEventListener('click', () => {
  cards.slice(cardsToShow).forEach(card => {
    card.style.display = (card.style.display === 'none') ? 'block' : 'none';
  });
console.log(seeMoreBtn.textContent);
  seeMoreBtn.textContent = (seeMoreBtn.textContent === 'Ver más') ? 'Ver menos' : 'Ver más';
}); 
isLogged=true;
          }
          
        }
      });}
      loadRecommendations();
}
//Desplegable
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// Get all the subject images
const subjectImages = document.querySelectorAll('img[data-subject]');

// Attach the event listener to each subject image
subjectImages.forEach(image => {
  image.addEventListener('click', () => toggleImage(image));
});

//Imagen cambia con click

function toggleImage(image) {
  if (path!='/subject.html') {
  const subject = image.getAttribute('data-subject');
  const currentState = image.src.includes('_false');
  if(currentState){//EN EL MOMENTO DE HACER EL CLICK, ESTÁ DESACTIVADO
    image.style.display = 'none';
      image.nextElementSibling.style.display = 'inline-block';
      selectedSubject.push(subject);
      console.log(selectedSubject);
  }else if (!currentState) {//EN EL MOMENTO DE HACER EL CLICK, ESTÁ ACTIVADO
    image.style.display = 'none';
      image.previousElementSibling.style.display = 'inline-block';
      const index = selectedSubject.indexOf(subject);
    if (index !== -1) {
      selectedSubject.splice(index, 1);
      console.log(selectedSubject)
    }
  }
}
}
if (registerUserForm3) {
  registerUserForm3.addEventListener('click',  function(ev){
    ev.preventDefault();

    const studentData = {
      favoritas: selectedSubject
    };
   //Comprobar que si sean de 2 a 5 materias
    if (2<=studentData.favoritas.length&&studentData.favoritas.length<=5) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          if (!isLogged) {
            const uid = user.uid;
         await updateUserData(db, uid, studentData);
          isLogged=true;
          }
          location.href = "./register4.html";
        }
      });
    } else {
      alert('Por favor, selecciona entre 2 y 5 materias para poder continuar');
    }
    
  
  
  });
}
//Quitar Nota si hace check a Aprobado
notas_semestres.forEach(function(table) {
  table.addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('input[type="checkbox"]')) {
      console.log(location.href=='./register2.html');
      const notesInput = target.parentNode.nextElementSibling.querySelector('.nota');
      const approvedCheckbox = target.parentNode.querySelector('.check');

      if (target.checked) {
        notesInput.disabled = true;
        notesInput.value ="";
        approvedCheckbox.checked = true;
      } else {
        notesInput.disabled = false;
        approvedCheckbox.checked = false;
      }
    }
  });
});

//Subir cada nota y aprobado a Firebase
// Initialize an empty object to store the student data
if (registerUserForm2) {
  registerUserForm2.addEventListener("submit",  function(e){
    e.preventDefault();
  const studentData = { semestre:'', notas: {}, aprobado: {} };
  
  notas_semestres.forEach(table => {
    
    // Get all the rows in this table
    const rows = table.querySelectorAll('tbody tr');
  
    // Loop through each row and extract the data
    rows.forEach(row => {
      // Get the subject name from the row's first cell
      const subject = row.querySelector('.materia').textContent;
  
      // Get the grade from the row's notes input field
      const grade = parseFloat(row.querySelector('.nota').value);
  
      // Get the approved status from the row's approved checkbox
      const approved = row.querySelector('.check').checked;
  
      // Add the subject, grade, and approved status to the studentData object
      if(!isNaN(grade)){
        studentData.notas[subject] = grade;
      }
      if (approved) {
        studentData.aprobado[subject] = approved;
      }
      
    });
    studentData.semestre = semestre.value;
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
       await updateUserData(db, uid, studentData);
        isLogged=true;
        }
        location.href = "./register3.html";
      }
    });
  
  });
  });
}

//REGISTER
if(registerUserForm1 != null){
    registerUserForm1.addEventListener("submit", async(e) =>{
      e.preventDefault();
      const name = registerUserForm1.username.value;
      const repassword = registerUserForm1.repassword.value;
      const email = registerUserForm1.email.value;
      const password = registerUserForm1.password.value;
      if (password===repassword) {
        const newUser = {
            name,
            email,
            password,
          };
      
          
          
          const userRegistered = await registerUser(auth, newUser);
          await addUserToDatabase(db, userRegistered.uid, newUser);
          location.href = "./register2.html";
      }else{
            alert("Las contraseñas no coinciden");
      }
      
  
  
    });
    }
    //LOGIN
    if(loginUserForm != null){
        loginUserForm.addEventListener("submit", e =>{
          e.preventDefault();
          const email = loginUserForm.email.value;
          const password = loginUserForm.password.value;
        
          loginUser(auth, email, password);
          console.log("Entraste");
    
           //GO HOME
          onAuthStateChanged(auth, async (user) =>{
          if(user){
              location.href = "./home.html";
          }
        });
    
        });
      }

      //LOGOUT
      if(logoutLink){
        logoutLink.addEventListener("click", e =>{
          signOut(auth).then(() => {
            location.href = "./index.html"
            console.log("Salimos");
          }).catch((error) => {
            console.log(error);
          });
        });
      }

///AVATARES//
// Agregar un controlador de eventos a cada imagen de avatar
avatars.forEach(avatar => {
  avatar.addEventListener('click', () => {
    console.log('Click en la imagen');

    // Obtener la URL de la imagen seleccionada
    const avatarSrc = avatar.getAttribute('src');

    // Actualizar la imagen seleccionada
    selectedAvatar.setAttribute('src', avatarSrc);
  });
});

//Botón de listo (mandar esa info)
if(okButton){
  okButton.addEventListener('click', () => {
    console.log('Click en Listo')
    // Obtener la URL de la imagen seleccionada
    const selectedAvatarURL = selectedAvatar.getAttribute('src');
    console.log('URL obtenida')
  
    // Guardar la URL en Firestore llamando a la función
    saveImageURL(selectedAvatarURL);
    console.log('URL enviadaaa')
  });
}

//Función para la URL
function saveImageURL(avatarURL) {
  // Creando el objeto a partir de la URL de la imagen
  const studentData = {
    imageURL: avatarURL
  };
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (!isLogged) {
        const uid = user.uid;
     await updateUserData(db, uid, studentData);
      isLogged=true;
      }
      location.href = "./home.html";
    }
  });
}


//para pasar la info de los perfiles
// Obtén todos los elementos con la clase "profile__card"
const profileCards = document.querySelectorAll('.profile__card');

// Agrega un controlador de eventos a cada elemento
profileCards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Obtén el título del perfil seleccionado y para la fotico
    const profileTitle = this.querySelector('.profile__subtitle').textContent;
    const profileImageSrc = this.querySelector('.profile__image').src;


    // Redirecciona a profileInd.html y pasa el título como parámetro en la URL
    const url = new URL('./profileInd.html', window.location.href);
    url.searchParams.set('title', encodeURIComponent(profileTitle));
    url.searchParams.set('image', encodeURIComponent(profileImageSrc));
    window.location.href = url.toString();
    //window.location.href = './profileInd.html?title=' + encodeURIComponent(profileTitle);
    console.log("hola " + profileTitle);
  });
});