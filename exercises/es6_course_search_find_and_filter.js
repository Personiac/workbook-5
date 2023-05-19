"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
  {
    CourseId: "VAMP100",
    Title: "Introduction to Vampirism",
    Location: "Classroom 3",
    StartDate: "10/01/23",
    Fee: "25.00",
  },
  {
    CourseId: "CHEF100",
    Title: "Introduction to Cooking",
    Location: "Classroom 1",
    StartDate: "07/05/23",
    Fee: "60.00",
  },
];

function findCourseById(courseId) {
  let course = courses.find(function (course) {
    if (course.CourseId == courseId) {
      return true;
    } else {
      return false;
    }
  });
  return course;
}

// When does the PROG200 course start?
function courseStartDate(courseId) {
  // let course = findCourseById(courseId);
  let course = findCourseById(courseId);
  console.log(`${course.CourseId} starts on ${course.StartDate}.`);
}

courseStartDate("PROG200");
console.log();

// What is the title of the PROJ500 course?
function courseTitle(courseId) {
  let course = findCourseById(courseId);
  console.log(`${course.CourseId} is called ${course.Title}.`);
}

courseTitle("PROJ500");
console.log();

// What are the titles of the courses that cost $50 or less?
function findCheapCourses() {
  let cheapCourses = courses.filter(function (course) {
    const courseFee = parseFloat(course.Fee);
    return courseFee <= 50; // Same function as line 76 through line 80.
    //   if (courseFee <= 50) {
    //     return true;
    //   } else {
    //     return false;
    //   }
  });
  return cheapCourses;
}

function cheapCourseList(courses) {
  let cheapCourses = findCheapCourses();
  console.log(`Here's a list of all the courses that are $50 or less:`);
  for (const course of cheapCourses) {
    console.log(`${course.CourseId} ${course.Title}: $${course.Fee}`);
  }
}

cheapCourseList(courses);
console.log();

function findC1Courses(courseId) {
  let c1Courses = courses.filter(function (course) {
    return course.Location == "Classroom 1";
  });
  return c1Courses;
}

function c1CourseList(courses) {
  let c1Courses = findC1Courses();
  console.log(`Here's a list of all ${c1Courses.length} courses that meet in Classroom 1:`);
  for (const course of c1Courses) {
    console.log(`${course.CourseId} ${course.Title}: (${course.Location}), $${course.Fee}, ${course.StartDate}`);
  }
}

c1CourseList(courses);
console.log();

//Find all courses that end with 100 in their ID
function findId100Courses(courseId) {
  let id100Courses = courses.filter(function (course) {
    return course.CourseId.endsWith("100");
  });
  return id100Courses;
}

function id100CourseList(courses) {
  let id100Courses = findId100Courses();
  console.log(`Here's a list of all ${id100Courses.length} courses that have the ID of 100:`);
  for (const course of id100Courses) {
    console.log(`${course.CourseId} ${course.Title}`);
  }
}

id100CourseList(courses);
console.log();

//Find more info on vampire class
function findVampCourse(courseId) {
    return courses.find(function (course) {
        return course.CourseId.startsWith("VAMP");
    });
}

function vampInfo() {
    let vampCourse = findVampCourse("VAMP");
    console.log(`You found the special ${vampCourse.CourseId} course! Here's more info on it:`);
    console.log(vampCourse);
}

vampInfo();

