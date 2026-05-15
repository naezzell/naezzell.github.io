// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications with useful links (i.e. to paper, code, talks) and brief commentary.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume-cv",
          title: "Resume/CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-abuse-of-notation-operator-overloading",
        
          title: "Abuse of notation/ Operator overloading",
        
        description: "I define the meaning of abuse of notation which is very similar to operator overloading in programming. I then collect many examples of this phenomenon to avoid confusion and serve as a hopefully helpful cheat sheet.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/abuse-of-notation/";
          
        },
      },{id: "post-operator-functions-the-product-rule-on-inner-products-and-averages-in-quantum-mechanics",
        
          title: "Operator functions: The product rule on inner products and averages in quantum mechanics...",
        
        description: "A brief exposition on product rule of inner-products and averages in quantum mechanics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/product-rule-in-quantum/";
          
        },
      },{id: "post-interaction-picture",
        
          title: "Interaction picture",
        
        description: "A brief description of the interaction picture in quantum mechanics and some references to papers that use it in the quantum computing literature",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/interaction-picture/";
          
        },
      },{id: "post-operator-functions-abuse-of-notation-matrix-gradient",
        
          title: "Operator functions/abuse of notation: Matrix gradient",
        
        description: "Uncovering ambiguous notation involving vector and matrix derivatives; a generalization of the gradient",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/matrix-gradient/";
          
        },
      },{id: "post-operator-functions-what-is-a-matrix-exponential",
        
          title: "Operator functions: What is a matrix exponential?",
        
        description: "A brief introduction to operator functions as used in quantum theory or",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/operator-functions/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%61%65%7A%7A%65%6C%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pSCN5GsAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/naezzell", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nic96", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/ezzell_nic_cv.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
