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
    id: "2", // campus tour video
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
    id: "6", // Gets to class early video
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
    id: "7", // Finds class late video
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
    id: "8", // Cant find calss - gives up video
    label: `cant find class video`,
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
    id: "12", // go out to get food video
    label: `Get food video`,
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
    id: "13", // friends get you drunk and expelled
    label: `friends get you drunk and expelled video`,
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
    id: "14", // Midterms are approaching video
    label: `midterms are approaching video`,
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
    id: "16", // Study video
    label: `study video`,
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
    id: "17", // Northgate video
    label: `northgate video`,
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
    id: "19", // Comp sci acceptance video
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
    id: "20", // mech eng acceptance video
    label: `mech eng video`,
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
    id: "21", // civ eng acceptance video
    label: `civ eng video`,
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
    id: "22", // id acceptance video
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
  {
    id: "23", // sophomore year intro video
    label: `Howdy! It is time for sophomore year!
    Do you choose to come back for this year?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 24,
      },
      {
        text: "No",
        next: -1,
      }
    ],
  },
  {
    id: "24", // Howdy Week
    label: `Now that you are coming back for sophomore year, do you give yourself some time to move in before Howdy Week and prep for the fall semester?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Move in early",
        next: 25,
      },
      {
        text: "Move in right before school starts",
        next: 26,
      }
    ],
  },
  {
    id: "25", // move in early video
    label: `Congrats! You moved into your new apartment and were able to get all your groceries and school supplies!`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 27,
      },
    ],
  },
  {
    id: "26", // move in late video
    label: `Oh no! Everyone's parents came into town and bought everything from all the stores! Let's hope someone in class has a pencil you can borrow.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 27,
      },
    ],
  },
  {
    id: "27", // syllabus week
    label: `It is now syllabus week. Now that you are a sophomore year, you know a lot more about college.
    Do you attend the syllabus week of classes?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 28,
      },
      {
        text: "No",
        next: 29,
      },
    ],
  },
  {
    id: "28", // get ahead on work video
    label: `Nice! You are ahead on your work, so you have a lot more time to hang out with your friends. Since you are ahead of schedule for your assignments, you have some time to go to a football game.
    Will you be part of the 12th man this Saturday?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Go to game",
        next: 30,
      },
      {
        text: "Study alone",
        next: 31,
      },
    ],
  },
  {
    id: "29", // northgate video
    label: `Looks like you know what you're doing for school and when out to Northgate.
    Now that you've had some fun, are you going to your next class?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 32,
      },
      {
        text: "No",
        next: -1,
      },
    ],
  },
  {
    id: "30", // bama football game video
    label: `What a game! A&M beat the hell out of Bama, and everyone stormed the field.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 33,
      },
    ],
  },
  {
    id: "31", // study video
    label: `I mean... I guess thats cool too.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 33,
      },
    ],
  },
  {
    id: "32", // test video
    label: `Good thing you went to class! You had a test. Good luck!`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 39,
      },
    ],
  },
  {
    id: "33", // career fair
    label: `Now that you have taken a few classes and gained some skills during your freshman year, it’s time to try to get an internship at the SEC Career Fair -
    do you decide to attend?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 34,
      },
      {
        text: "No",
        next: 35,
      },
    ],
  },
  {
    id: "34", // good internship video
    label: `Congrats on locking in such a great internship!`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 36,
      },
    ],
  },
  {
    id: "35", // bad internship video
    label: `You took another route and decided to apply online instead of going to the career fair. Turns out there weren't many good opportunities left.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 36,
      },
    ],
  },
  {
    id: "36", // midterm video
    label: `The semester is halfway through, and those projects and midterms are coming up quickly. Your exam is tomorrow.
    Do you choose to study for the exam that is worth 30% of your grade?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 37,
      },
      {
        text: "No",
        next: 38,
      },
    ],
  },
  {
    id: "37", // studying with friends video
    label: `Good choice! You are sure to get an A on this exam. Your exam is tomorrow at 8am. Are you going to stay up late, or
    will you make sure you get a good night's sleep?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Get a full 8 hours",
        next: 39,
      },
      {
        text: "Stay up late",
        next: -1,
      },
    ],
  },
  {
    id: "38", // netflix video
    label: `Looks like your going to watch Netlfix. Your exam is tomorrow at 8am. Are you going to stay up late, or
    will you make sure you get a good night's sleep?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Get a full 8 hours",
        next: 39,
      },
      {
        text: "Stay up late",
        next: -1,
      },
    ],
  },
  {
    id: "39", // good grade video
    label: `Nice! You aced this test. Looks like you're on track for that 4.0.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 40,
      },
    ],
  },
  {
    id: "40", // jedfest video
    label: `You pass Jedfest on your way to class, and it looks like there's quite the crowd.
    Do you skip class to go see Brother Jed and Sister Cindy in Academic Plaza?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 41,
      },
      {
        text: "No",
        next: 42,
      },
    ],
  },
  {
    id: "41", // brother jed bingo video
    label: `That was quite the afternoon! You missed the professor's attendance bonus and didn't make the Dean's List, but you still made it to junior year!`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 43,
      },
    ],
  },
  {
    id: "42", // deans list video
    label: `That last class you attended gave you perfect attendance, which your professor rewarded with an attendance bonus! What an end to sophomore year by making the Dean's List! Onward to junior year `,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Continue",
        next: 43,
      },
    ],
  },
  {
    id: "43", // junior year intro video
    label: `Junior Year Intro`,
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
