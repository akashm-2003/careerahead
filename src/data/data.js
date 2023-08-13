export const sidebarItems = [
    [
      { id: "0", title: "Dashboard", notifications: false  , endpoint:'/'},
      { id: "1", title: "Professor", notifications: false  , endpoint:'/professor'},
      { id: "2", title: "Research Paper", notifications: 1  , endpoint:'/researchpaper'},
      { id: "3", title: "Summarizer", notifications: false , endpoint:'/summarizer' },
      { id: "4", title: "Scholarship", notifications: false , endpoint:'/scholarship' },
      { id: "5", title: "About", notifications: false  , endpoint:'/about'},
      // { id: "6", title: "Settings", notifications: false },
    ],
    [
      // { id: "6", title: "Settings", notifications: false },
    ],
  ];

  export const employeeData = [
    {
      id: 1,
      name: "Esther Howard",
      position: "Sale's manager USA",
      transactions: 3490,
      rise: true,
      tasksCompleted: 3,
      imgId: 0,
    },
  
    {
      id: 2,
      name: "Eleanor Pena",
      position: "Sale's manager Europe",
      transactions: 590,
      rise: false,
      tasksCompleted: 5,
      imgId: 2,
    },
  
    {
      id: 3,
      name: "Robert Fox",
      position: "Sale's manager Asia",
      transactions: 2600,
      rise: true,
      tasksCompleted: 1,
      imgId: 3,
    },
  ];