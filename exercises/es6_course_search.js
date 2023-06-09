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
];

function findCourseById(courseId) {
  for (const course of courses) {
    if (course.CourseId == courseId) {
      return course;
    }
  }
}

// When does the PROG200 course start?
function courseStartDate(courseId) {
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
  let cheapCourses = [];
  for (const course of courses) {
    const courseFee = parseFloat(course.Fee);
    if (courseFee <= 50) {
      cheapCourses.push(course);
    }
  }
  return cheapCourses;
}

function cheapCourseList(courses) {
  let cheapCourses = findCheapCourses();
  console.log(`Here's a list of all ${cheapCourses.length} courses that are $50 or less:`);
  for (const course of cheapCourses) {
    console.log(`${course.CourseId} ${course.Title}: $${course.Fee}`);
  }
}

cheapCourseList(courses);
console.log();

// What classes meet in "Classroom 1"?
function findC1Courses(courseId) {
  let c1Courses = [];
  for (const course of courses) {
    if (course.Location == "Classroom 1") {
      c1Courses.push(course);
    }
  }
  return c1Courses;
}

function c1CourseList(courses) {
  let c1Courses = findC1Courses();
  console.log(`Here's a list of all ${c1Courses.length} courses that meet in Classroom 1:`);
  for (const course of c1Courses) {
    console.log(`${course.CourseId} ${course.Title}: $${course.Fee}, ${course.Location}`);
  }
}

c1CourseList(courses);
