export const DATA = [
  {
    id: "0",
    label: `Congratulations! In recognition of your academic and personal achievements, I'm pleased to inform you of your admission to Texas A&M University College Station for the Fall 2022 semester. You have been admitted to the College of Engineering with a major in General Engineering. As a member of the Fightin' Texas Aggie Class of 2026, we welcome you to the Aggie family and to our proud tradition of leadership and academic excellence! Do you accept this offer?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 1,
      },
      {
        text: "No",
        next: -1,
      },
    ],
  },
  {
    id: "1", // welcome video
    label: `Welcome to Aggieland! As a Fightin' Texas Aggie, it is important to know where your resources are and how they can be used. My name is (NPC name) and I will be your guide and advisor throughout your undergraduate career. I'm eager to show you around campus if you would like to take a tour.
    Would you like to take a tour of campus?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 2,
      },
      {
        text: "No",
        next: 5,
      },
    ],
  },
  {
    id: "2", // campus tour segway video
    label: `Campus Tour Video`,
    video_id: "",
    hours: 5,
    options: [
      {
        text: "Continue",
        next: 4,
      }
    ],
  },
  {
    id: "3", // dorm tour
    label: `Dorm Tour`,
    video_id: "",
    hours: 1,
    options: [
      {
        text: "Continue",
        next: 5,
      }
    ],
  },
  {
    id: "4", // dorm tour video? (yes on campus tour)
    label: `Welcome to Mosher! This will be your dorm for the year. Here you can find group study spaces, a dining hall in the Commons, and many students who are engineers just like you. But don’t get too distracted; your classes begin tomorrow!
    Do you set an alarm for tomorrow?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 6,
      },
      {
        text: "No",
        next: 7,
      }
    ],
  },
  {
    id: "5", // dorm tour video? (no on campus tour)
    label: `Welcome to Mosher! This will be your dorm for the year. Here you can find group study spaces, a dining hall in the Commons, and many students who are engineers just like you. But don’t get too distracted; your classes begin tomorrow!
    Do you set an alarm for tomorrow?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 7,
      },
      {
        text: "No",
        next: 8,
      }
    ],
  },
  {
    id: "6", // Gets to class early segway video
    label: `Whew! That was close. You made it to class with just one minute to spare.`,
    video_id: "",
    hours: 5,
    options: [
      {
        text: "Continue",
        next: 9,
      },
    ],
  },
  {
    id: "7", // Finds class late segway video
    label: `Shhhh, you’re late and you need to sneak in quietly. You better set your alarm next time so you don’t miss class.`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Continue",
        next: 9,
      },
    ],
  },
  {
    id: "8", // Cant find calss - gives up segway video
    label: `cant find class segway video`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 9,
      },
    ],
  },
  {
    id: "9", // Hang out with friends
    label: `Alright! You made it through syllabus week! Hour after hour of grading systems, attendance policies and FERPA have exhausted you. How about you relax this weekend, you've earned it!
    Do you stay home and watch a movie or go out with friends?`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Watch Movie",
        next: 10,
      },
      {
        text: "Go out with friends",
        next: 11,
      }
    ],
  },
  {
    id: "10", // Watch movie
    label: `Good choice. A movie is always a nice way to take a break from the busyness of college. I see you’ve chosen to watch High School Musical…homesick much?`,
    video_id: "",
    hours: 4,
    options: [
      {
        text: "Continue",
        next: 14,
      }
    ],
  },
  {
    id: "11", // Go out with friends
    label: `Awesome! You meet up with friends and they want to know what the plan is?
    Do you have any ideas?`,
    video_id: "",
    hours: 2,
    options: [
      {
        text: "Yes - Let's go out for food",
        next: 12,
      },
      {
        text: "No - Let your friends decide",
        next: 13,
      },
    ],
  },
  {
    id: "12", // go out to get food segway video
    label: `Get food segway video`,
    video_id: "",
    hours: 2,
    options: [
      {
        text: "Yes",
        next: 14,
      },
    ],
  },
  {
    id: "13", // friends get you drunk and expelled segway
    label: `friends get you drunk and expelled segway video`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
  {
    id: "14", // Midterms are approaching segway video
    label: `midterms are approaching segway video`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 15,
      },
    ],
  },
  {
    id: "15", // Study for midterms
    label: `You’re doing so well! Seven weeks in and you’re starting to get an idea of which engineering discipline you want to study. But first, you have to get through midterms. You’ve done well on all of your assignments, so you don’t really need to study but it could help.
    Do you choose to study?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 16,
      },
      {
        text: "No",
        next: 17,
      }
    ],
  },
  {
    id: "16", // Study segway video
    label: `study segway video`,
    video_id: "",
    hours: 8,
    options: [
      {
        text: "Continue",
        next: 18,
      },
    ],
  },
  {
    id: "17", // Northgate segway video
    label: `northgate segway video`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 18,
      },
    ],
  },
  {
    id: "18", // Apply for ETAM
    label: `The semester goes by fast! It's already time to apply for the ETAM.
    What major are you going to choose?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Computer Science",
        next: 19,
      },
      {
        text: "Mechanical Engineering",
        next: 20,
      },
      {
        text: "Civil Engineering",
        next: 21,
      },
      {
        text: "Industrial Engineering",
        next: 22,
      },
    ],
  },
  {
    id: "19", // Comp sci acceptance segway video
    label: `comp sci acceptance video`,
    video_id: "",
    hours: 6,
    options: [
      {
        text: "Continue",
        next: 23,
      },
    ],
  },
  {
    id: "20", // mech eng acceptance segway video
    label: `mech eng segway video`,
    video_id: "",
    hours: 5,
    options: [
      {
        text: "Continue",
        next: 23,
      },
    ],
  },
  {
    id: "21", // civ eng acceptance segway video
    label: `civ eng segway video`,
    video_id: "",
    hours: 4,
    options: [
      {
        text: "Continue",
        next: 23,
      },
    ],
  },
  {
    id: "22", // id acceptance segway video
    label: `id acceptance video`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
];
