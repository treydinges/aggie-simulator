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
    id: "3", // DONT USE
    label: ``,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "",
        next: -1,
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
        text: "Continue",
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
    hours: 5,
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
    hours: 1,
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
    hours: 5,
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
    hours: 2,
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
    hours: 5,
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
    hours: 3,
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
    hours: 13,
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
    hours: 4,
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
    hours: 1,
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
    hours: 6,
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
    hours: 1,
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
    hours: 2,
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
    hours: 2,
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
    hours: 4,
    options: [
      {
        text: "Continue",
        next: 43,
      },
    ],
  },
  {
    id: "43", // junior year intro video
    label: `You have completed two years of your undergraduate degree!
    Do you choose to continue for your junior year?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 44,
      },
      {
        text: "No",
        next: -1,
      },
    ],
  },
  {
    id: "44", // welcome back video
    label: `Howdy! We're so glad you're still attending Texas A&M. You're so close to earning your Aggie Ring, and we're here to help you do just that. There's no time to waste, classes start today!
    Do you want to go to class during syllabus week?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 45,
      },
      {
        text: "No",
        next: 46,
      },
    ],
  },
  {
    id: "45", // attend syllabus week football game video
    label: `Good idea. Better start on the right foot and show your professors that you’re here to learn and take your classes seriously. The first Aggie football game of the year is this weekend! Your friends want to pull tickets and know that this is the year to get good seats. However, none of your friends can camp overnight to ensure that your group gets a good spot in line. You know that you have an exam the next day, but you're pretty confident that it won't be too hard.
    Do you camp out at Kyle Field?`,
    video_id: "",
    hours: 1,
    options: [
      {
        text: "Yes",
        next: 47,
      },
      {
        text: "No",
        next: 48,
      },
    ],
  },
  {
    id: "46", // do not attend syllabus week football game video
    label: `Not the best start to the semester, but you’ll be fine. After all, what could you have missed during the first week? The first Aggie football game of the year is this weekend! Your friends want to pull tickets and know that this is the year to get good seats. However, none of your friends can camp overnight to ensure that your group gets a good spot in line. You know that you have an exam the next day, but you’re pretty confident that it won’t be too hard.
    Do you camp out at Kyle Field?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Yes",
        next: 47,
      },
      {
        text: "No",
        next: 48,
      },
    ],
  },
  {
    id: "47", // attend football game career fair video
    label: `You camp out to pull tickets for your group and lose quite a bit of sleep. The exam proves more difficult than expected and you barely pass. You check your email and see an announcement for the engineering career fair. What a great opportunity! This is your time to showcase your knowledge and experience to many engineering companies. Getting an internship is critical to building your resume and this is where it begins.
    Do you attend the career fair?`,
    video_id: "",
    hours: 1,
    options: [
      {
        text: "Yes",
        next: 49,
      },
      {
        text: "No",
        next: 50,
      },
    ],
  },
  {
    id: "48",// do not attend football game career fair video
    label: `You decide not to camp out because being rested for your exam is more important than having the best seats in the stadium. You get an A on the exam and set yourself up for success this semester. You check your email and see an announcement for the engineering career fair. What a great opportunity! This is your time to showcase your knowledge and experience to many engineering companies. Getting an internship is critical to building your resume and this is where it begins.
    Do you attend the career fair?`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Yes",
        next: 49,
      },
      {
        text: "No",
        next: 50,
      },
    ],
  },
  {
    id: "49", // attend career fair midterm video
    label: `Great! You attend and have a few strong connections with recruiters. You apply for the internship positions, and they tell you to expect an email within the next month with a response. Midterms are quickly approaching and you have to decide how much time to spend studying for each class. Right now, you have two classes that are at risk of being C’s and two that are at risk of dropping to B’s.
    How do you study?`,
    video_id: "",
    hours: 5,
    options: [
      {
        text: "Don't Study",
        next: 51,
      },
      {
        text: "Only focus on my lowest grade classes",
        next: 52,
      },
      {
        text: "Focus on all classes equally",
        next: 53,
      },
      {
        text: "Only focus on my best classes",
        next: 54,
      },
    ],
  },
  {
    id: "50", // do not attend career fair midterm video
    label: `You missed out on a prime opportunity to put your name out there, but there are always other ways to find work experience. Midterms are quickly approaching and you have to decide how much time to spend studying for each class. Right now, you have two classes that are at risk of being C’s and two that are at risk of dropping to B’s.
    How do you study?`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Don't Study",
        next: 51,
      },
      {
        text: "Only focus on my lowest grade classes",
        next: 52,
      },
      {
        text: "Focus on all classes equally",
        next: 53,
      },
      {
        text: "Only focus on my best classes",
        next: 54,
      },
    ],
  },
  {
    id: "51", // dont study programming assignment
    label: `Bad idea. Your midterms were more difficult than you expected and you failed one of them. You’ll need to work hard for the rest of the semester to make up for this. Now that midterms have passed, you can put your focus into your programming assignment that has already taken too much of your time to understand. You work for hours on end to make barely any progress, and frustration sets in. You ask your classmates for help, but none of them respond. Ultimately, you look for help online and come across an alumni’s assignment for the same class that is posted on Github. This could save your grade and finally put an end to this painful assignment.
    Do you use the Github solution?`,
    video_id: "",
    hours: -3,
    options: [
      {
        text: "Yes",
        next: 55,
      },
      {
        text: "No",
        next: 56,
      },
    ],
  },
  {
    id: "52", // only bad classes programming assignment
    label: `Good idea; you need to pass all of your classes, so focusing on the lowest grades is smart. You do well enough to not have to worry about failing right now. Now that midterms have passed, you can put your focus into your programming assignment that has already taken too much of your time to understand. You work for hours on end to make barely any progress, and frustration sets in. You ask your classmates for help, but none of them respond. Ultimately, you look for help online and come across an alumni’s assignment for the same class that is posted on Github. This could save your grade and finally put an end to this painful assignment.
    Do you use the Github solution?`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Yes",
        next: 55,
      },
      {
        text: "No",
        next: 56,
      },
    ],
  },
  {
    id: "53", // all classes programming assignment
    label: `Great idea! Each class is important, and you understand that none of them can be ignored. You end up getting A’s on all of your midterm exams. Now that midterms have passed, you can put your focus into your programming assignment that has already taken too much of your time to understand. You work for hours on end to make barely any progress, and frustration sets in. You ask your classmates for help, but none of them respond. Ultimately, you look for help online and come across an alumni’s assignment for the same class that is posted on Github. This could save your grade and finally put an end to this painful assignment.
    Do you use the Github solution?`,
    video_id: "",
    hours: 5,
    options: [
      {
        text: "Yes",
        next: 55,
      },
      {
        text: "No",
        next: 56,
      },
    ],
  },
  {
    id: "54", // only good classes programming assignment
    label: `Ouch. Not the best approach. Your lower grades fall even more, and now you’re at risk of failing two classes. Now that midterms have passed, you can put your focus into your programming assignment that has already taken too much of your time to understand. You work for hours on end to make barely any progress, and frustration sets in. You ask your classmates for help, but none of them respond. Ultimately, you look for help online and come across an alumni’s assignment for the same class that is posted on Github. This could save your grade and finally put an end to this painful assignment.
    Do you use the Github solution?`,
    video_id: "",
    hours: 1,
    options: [
      {
        text: "Yes",
        next: 55,
      },
      {
        text: "No",
        next: 56,
      },
    ],
  },
  {
    id: "55", // cheat internship offer
    label: `You submit the Github solution after changing some comments and reformatting the code to look more like your own. However, the professor recognizes this code and knows that it is not your own work. The Honor Council gives you an F* for the course, and you have to retake it another semester. After three weeks of waiting for an email from any of the companies you spoke to at the career fair, you finally receive one! The email informs you that you have been given an offer for a summer internship. Though it is not with the company you preferred to work with, you know that this is a good opportunity. You must accept the offer within five days of the email.
    Do you accept the offer or wait to hear back from the other companies?`,
    video_id: "",
    hours: -4,
    options: [
      {
        text: "Accept",
        next: 57,
      },
      {
        text: "Wait",
        next: 58,
      },
    ],
  },
  {
    id: "56", // dont cheat internship offer
    label: `That was smart. No reason to plagiarize and risk the consequences. You get a C on the assignment which lowers your grade, but you’re on track to pass the class. After three weeks of waiting for an email from any of the companies you spoke to at the career fair, you finally receive one! The email informs you that you have been given an offer for a summer internship. Though it is not with the company you preferred to work with, you know that this is a good opportunity. You must accept the offer within five days of the email.
    Do you accept the offer or wait to hear back from the other companies?`,
    video_id: "",
    hours: 4,
    options: [
      {
        text: "Accept",
        next: 57,
      },
      {
        text: "Wait",
        next: 58,
      },
    ],
  },
  {
    id: "57", // accept internship finals
    label: `Amazing! This will give you priceless experience in the workplace that will help you get a full-time offer after graduation. Finals are two weeks away, and you know that they will be difficult. Most of your finals will be cumulative. With so much time to study, you need to decide how to alot your time for your classes. You currently have one C, two B’s, and an A.`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Don't study",
        next: 59,
      },
      {
        text: "Study only for the classes with a C",
        next: 60,
      },
      {
        text: "Study only for the classes with a C or B",
        next: 61,
      },
      {
        text: "Study only for the classes with a B or A",
        next: 62,
      },
      {
        text: "Study for all classes.",
        next: 63,
      },
    ],
  },
  {
    id: "58", // dont accept intership finals
    label: `You turn down the offer in hopes of hearing back from your preferred company. The wait continues. Finals are two weeks away, and you know that they will be difficult. Most of your finals will be cumulative. With so much time to study, you need to decide how to alot your time for your classes. You currently have one C, two B’s, and an A.`,
    video_id: "",
    hours: 0,
    options: [
      {
        text: "Don't study",
        next: 59,
      },
      {
        text: "Study only for the classes with a C",
        next: 60,
      },
      {
        text: "Study only for the classes with a C or B",
        next: 61,
      },
      {
        text: "Study only for the classes with a B or A",
        next: 62,
      },
      {
        text: "Study for all classes.",
        next: 63,
      },
    ],
  },
  {
    id: "59", // dont study ending video
    label: `Bad idea. You decided to hang out with friends rather than studying and failed two of your courses because of that. Looks like you may not be getting your ring after all.`,
    video_id: "",
    hours: -7,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
  {
    id: "60", // only C's ending video
    label: `Not too bad! You focused all of your efforts into your hardest class to ensure you didn’t fail. While your other grades took a hit, you managed to pass each class this semester.`,
    video_id: "",
    hours: 3,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
  {
    id: "61", // C's and B's ending video
    label: `Well done! Your studying proved useful! You focused on the classes that were not an A, and you did well on all of your exams.`,
    video_id: "",
    hours: 10,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
  {
    id: "62", // A's and B's ending video
    label: `While you should have studied more for the class that you had a C in, you got lucky with easy exams. Congrats on finishing your semester!`,
    video_id: "",
    hours: 6,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
  {
    id: "63", // all classes ending video
    label: ``,
    video_id: "",
    hours: 4,
    options: [
      {
        text: "Continue",
        next: -1,
      },
    ],
  },
];
