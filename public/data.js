const data = [
    {
        key: "a01" ,
        name:' C++ ',
        price: '100$' ,
        title: 'Learn C++ Within 30 Days', 
        date: 'November 15, 2016',
        introdction: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language .',
        img: ' https://www.startertutorials.com/blog/wp-content/uploads/2016/09/C_Plus_Plus_Progrramming_Language.jpg ',
        description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms. C++ was designed with an orientation toward systems programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.[11] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[11] including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes).'
    },
    {
        key: "b11" ,
        name:' Javascript ',
        price: '100$' ,
        title: 'Learn Javascript Within 30 Days', 
        date: 'July 15, 2018',
        introdction: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries',
        img: 'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        description: 'JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] Over 97% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users.JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[14] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O'
    },
    {
        key: "c21" ,
        name:' Java ',
        price: '100$' ,
        title: 'Learn Java Within 30 Days', 
        date: 'August 15, 2018',
        introdction: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible',
        img: 'https://abac.software/wp-content/uploads/2021/09/og-social-java-logo.gif',
        description: 'ava is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client–server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems and released in May 1995 as a core component of Sun Microsystems Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions'
    },
    {
        key: "d31",
        name:' C#',
        price: '100$' ,
        title: 'Learn C# Within 30 Days', 
        date: 'January 15, 2020',
        introdction: 'C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
        img: 'https://i1.wp.com/yeisonpx.com/wp-content/uploads/2020/10/csharp_api.jpg?fit=668%2C376&ssl=1',
        description: 'C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.  C# was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Microsoft introduced C# along with .NET Framework and Visual Studio, both of which were closed-source. At the time, Microsoft had no open-source products. Four years later, in 2004, a free and open-source project called Mono began, providing a cross-platform compiler and runtime environment for the C# programming language.  A decade later, Microsoft released Visual Studio Code (code editor), Roslyn (compiler), and the unified .NET platform (software framework), all of which support C# and are free, open-source, and cross-platform. Mono also joined Microsoft but was not merged into'
    },
    {
        key: "e41" ,
        name:' HTML',
        price: '100$' ,
        title: 'Learn HTML Within 30 Days', 
        date: 'January 30, 2020',
        introdction: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5kve8uJvA1JcDmKbSh1a_JFvLt5tUI8n2A&usqp=CAU',

        description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScriptWeb browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags , written using angle brackets. Tags such as <img /> and <input /> directly introduce content into the page. Other tags such as <p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags but use them to interpret the content of '
    },
    {
        key: "f51" ,
        name:' CSS',
        price: '100$' ,
        title: 'Learn CSS Within 30 Days', 
        date: 'January 30, 2020',
        introdction: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript',
        img: 'https://ecodians.com/media/picture/CSS-3.png',

        description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable'
    },
    {
        key: "g61" ,
        name:' Bootstrap',
        price: '100$' ,
        title: 'Learn Bootstrap  Within 30 Days', 
        date: 'July 30, 2020',
        introdction: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components',
        img: 'https://www.pragimtech.com/wp-content/uploads/2019/04/bootstrap.jpg',

        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components As of August 2021, Bootstrap is the tenth most starred project on GitHub, with over 152,000 stars, behind freeCodeCamp (over 328,000 stars), Vue.js framework, React library, TensorFlow and others.'
    },
    {
        key: "h71" ,
        name:'Tailwind',
        price: '100$' ,
        title: 'Learn Tailwind  Within 30 Days', 
        date: 'July 30, 2020',
        introdction: 'Tailwind is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components',
        img: 'https://jefrydco.id/_nuxt/img/how-tailwind-css-help-reduce-workload-by-jefrydco.833f9b8.jpg',

        description: 'Tailwind is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components As of August 2021, Bootstrap is the tenth most starred project on GitHub, with over 152,000 stars, behind freeCodeCamp (over 328,000 stars), Vue.js framework, React library, TensorFlow and others.'
    },
    {
        key: "i81" ,
        name:'Material UI',
        price: '100$' ,
        title: 'Learn Material UI  Within 30 Days', 
        date: 'June 30, 2020',
        introdction: 'Material UI is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components',
        img: 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png',

        description: 'Material UI is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components As of August 2021, Bootstrap is the tenth most starred project on GitHub, with over 152,000 stars, behind freeCodeCamp (over 328,000 stars), Vue.js framework, React library, TensorFlow and others.'
    } ,
    {
        key: "j91 ",
        name:'React',
        price: '100$' ,
        title: 'Learn React Within 30 Days', 
        date: 'February 11, 2020',
        introdction: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
        img: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',

        description: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.'
    },
    {
        key: "k101" ,
        name:'Angular',
        price: '100$' ,
        title: 'Learn Angular Within 30 Days', 
        date: 'February 25, 2020',
        introdction: 'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS',
        img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',

        description: 'Angular (commonly referred to as "Angular 2+" or "Angular CLI")[4][5] is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS  Angular is used as the frontend of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular itself (or AngularJS), and Node.js server runtime environment'
    },
    {
        key: "l111 ",
        name:'Vue Js',
        price: '100$' ,
        title: 'Learn Vue Js Within 30 Days', 
        date: 'February 20, 2020',
        introdction: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
        img: 'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',

        description: 'Angular (commonly referred to as "Angular 2+" or "Angular CLI")[4][5] is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS  Angular is used as the frontend of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular itself (or AngularJS), and Node.js server runtime environment'
    },
    {
        key: "m121 ",
        name:'Python',
        price: '100$' ,
        title: 'Learn Python Within 30 Days', 
        date: 'February 20, 2020',
        introdction: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects',
        img: 'http://www.invensis.net/blog/wp-content/uploads/2015/05/Benefits-of-Python-over-other-programming-languages-invensis.jpg',

        description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library .  Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely backward-compatible with earlier versions. Python 2 was discontinued with version 2.7.18 in 2020.'
    },
    {
        key: "n131" ,
        name:'Php',
        price: '100$' ,
        title: 'Learn Php Within 30 Days', 
        date: 'February 10, 2020',
        introdction: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Groupv',
        img: 'https://www.solucionex.com/sites/default/files/posts/imagen/phplogo.png',

        description: 'PHP is a general-purpose scripting language geared towards web development.[7] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[8] The PHP reference implementation is now produced by The PHP Group.[9] PHP originally stood for Personal Home Page,[8] but it now stands for the recursive initialism PHP: Hypertext Preprocessor. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist which can be employed to orchestrate or facilitate the generation of that response. Additionally, PHP can be used for many programming tasks outside the web context, such as standalone graphical applications[11] and robotic drone control.[12] PHP code can also be directly executed from the command line. The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on a variety of operating systems and platforms. '
    },
    {
        key: "o141" ,
        name:'Laravel',
        price: '100$' ,
        title: 'Learn Laravel Within 30 Days', 
        date: 'February 10, 2020',
        introdction: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
        img: 'https://laravelnews.imgix.net/images/laravel-featured.png?ixlib=php-3.3.1',

        description: 'Laravel is a free, open-source[3] PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar '
    }
]