export const RESUME_DATA = {
  name: "",
  initials: "",
  location: "",
  locationLink: "",
  avatarUrl: "",
  personalWebsiteUrl: "",
  about:
    "A hardworking and dedicated person, who enjoys building upon previous knowledge and always strives to be a better version of himself.",
  summary:
    "I have strong basic knowledge of Python and many of its machine learning libraries, PowerBI and I'm a beginner in MLOps and Azure skills.",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "",
        url: "",
        icon:"",
      },
      {
        name: "",
        url: "",
        icon:"" ,
      },
      {
        name: "",
        url: "",
        icon:"" ,
      },
    ],
  },
  education: [
    {
      school: "Breda University of Applied Sciences",
      degree: "Bachelor's degree in Applied Data Science and AI",
      start: "September 2022",
      end: "ongoing",
    },
  ],
  projects: [
    {
      title: "PowerBI presentation on the future of ecofuels for air travel",
      start: "September 2022",
      end: "October 2022",
      description:
        "The project consisted of creating a dynamic PowerBI dashboard, on a topic chosen from the SDG indicators. Using data from different scholarly sources, I was able to research and make predictions on the future developments of different fuels which can be used for passenger air travel."
      ,
      link: "https://github.com/martinvladimirov220116/CV-links/blob/main/SDGIndicatorsDashboard_Martin Vladimirov.pbix"
    },
    {
      title: "Machine learning model for rating prediction based on Twitter engagement for Banijay Benelux",
      start: "November 2022",
      end: "January 2023",
      description:
        "The project consisted of creating a prediction model for the show OP1 , to see whether or not twitter engagementaffected the show's ratings. Using python to merge the data provided by the company, Twitter API to scrape twitterdata, PowerBI to make clear visualizations of the merged data and finally MS Word, to make the final report",
      link: "https://github.com/martinvladimirov220116/CV-links/blob/main/Machine%20learning%20model%20for%20rating%20prediction%20based%20on%20Twitter%20engagement.pdf"
    },
    {
      title: "Wireframe prototype with image recognition model using Keras",
      start: "February 2023",
      end: "April 2023",
      description:
        "Created a wireframe prototype for a food recognition application, creating a proof of concept interface using an online platform and creating a functional image recognition model, using the Keras library in python. The model was amulticlass CNN with 1,6 million trainable parameters and transfer learning.",
    },
    {
      title: "Traffic congestion easing project for Municipality of Breda ",
      start: "April 2023",
      end: "June 2023",
      description:
        "For this project I was part of a group, using Scrum and an agile working environment, where I got to be scrum master and divide team tasks accordingly. The project consisted of developing a proof of concept application for the municipality for bettering the city of Breda. The municipality provided us with multiple topics to choose from and we decided to delve into the congestion statistics. I was responsible for the data gathering, cleaning and exploratory data analysis, so that my other team members can have the necessary foundation to create a model which predicts congestion in the city center. Data was gathered from municipal websites as well as the municipality SQL server, which they provided",
      link: "https://github.com/martinvladimirov220116/CV-links/blob/main/ProjectProposalParkingFinal.pdf"
    },
    {
      title: "Integrating AI as a teaching instrument for the Facility Management program in BUAS ",
      start: "September 2023",
      end: "November 2023",
      description: "This was a group project where I again had the opportunity to be a scrum master and divide tasks among my team. The core of the project consisted of conducting qualitative and quantitative research from different lectors and students, using interviews and surveys. This data was later processed using R due to its statistical advantages and was made into a report using LaTeX. Each team member had to write different parts of the report as we all chose a subdiscipline in the field to research. The findings were later presented in front of an audience of lectors from the different BUAS programs as well as students and colleagues.",
      link:"https://github.com/martinvladimirov220116/CV-links/blob/main/Research_Policy.pdf"
    },
    {
      title: "Image Recognition and Robotics Pipeline for NPEC",
      start: "November 2023",
      end: "January 2024",
      description: "This was a project for NPEC, a research facility based in Utrecht which focuses on plants. The project consisted ofcreating an image recognition model using binary masks made from the plant images, to track the growth of the plant, afterwards this information would pass through a robotics simulation to find the root end, where the robot would inject the plant. ",
    },
    {
      title: "NLP model for emotion detection for Banijay Benelux",
      start: "February 2024",
      end: "April 2024",
      description: "This project is partly team oriented and partly individual. The project consists of gathering text and corresponding emotion data in order to train a model to recognize different emotions. Many different models were tested in order to find the best performing one, and the group came to the conclusion that a BERT model performed the best on multiclass emotion detection. A LaTeX report was written to document the results of this model. ",
    },
    {
      title: "Cloud deployment of AI model using Microsoft Azure and Docker",
      start: "May 2024",
      end: "June 2024",
      description: "Project consisted of deployment of an AI emotion recognition model using Microsoft Azure. During the project my team and I worked in a scrum environment. MLOps practices were used in order to accomplish our task. The project also allowed me to learn about Docker containers and how to operate with them. The team and I also published our own python package, which can be installed on Windows and Linux. ",
    },
  ],
  skills: [
    "Python",
    "R",
    "Tensorflow",
    "Torch",
    "PowerBI",
    "Microsoft Azure",
    "MLOps",
  ], 
} as const;
