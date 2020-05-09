const express = require("express");
const router = express.Router();

router.get("/api/profile/:id", (req, res) => {
  // Middleware: Validate user
  if (req.params.id != 1) {
    res.status(400).send("Bad request. No valid user");
  }

  // call to db
  const user = {
    id: 1,
    name: "Jessica Nailea Buenfil Solis",
    description:
      "Mechatronic engineer graduated from the Yucatan Autonomous University with 2 years of professional experience as a programmer and JS/full stack developer. I recently began a career as a cybersecurity advisor and consultant.",
    contacInfo: {
      email: "jessibuenfilsolis@gmail.com",
      linkedin: "https://www.linkedin.com/in/jessica-buenfil-solis-823912159/",
      github: "https://github.com/jessicaNailea/",
    },
  };

  res.status(200).send(user);
});

router.get("/api/education/:id", (req, res) => {
  const education = {
    schools: [
      {
        schoolName: "Universidad Autónoma de Yucatán",
        period: "2012-2018",
        degree: "Mechatronics Engineering",
      },
    ],
  };

  res.status(200).send(education);
});

router.get("/api/work-experience/:id", (req, res) => {
  const expereience = {
    works: [
      {
        companyName: "Pulpomatic",
        period: "2018-2019",
        role: [{ name: "BackEnd developer", details: "Node Js Developer" }],
      },
      {
        companyName: "The Ksquare Group",
        period: "2019-PRESENT",
        role: [
          {
            name: "Front-End Developer",
            details: "React JS Developer for Reliable PArts",
          },
          { name: "Cyber Security consultant", details: "OSCP trainning" },
        ],
      },
    ],
  };

  res.status(200).send(expereience);
});

router.get("/api/projects/:id", (req, res) => {
  const projects = {
    data: [
      {
        technology: "react",
        projectName: "Tic Tac Toe",
        link: "https://jessicanailea.github.io/gato/",
      },
    ],
  };

  res.status(200).send(projects);
});

module.exports = router;
