// import chalk from "chalk";
// import figlet from "figlet";
import inquirer from "inquirer";
import {createRandomCompany} from "./test.js"
console.log(createRandomCompany());

// import ora from "ora";

// console.log(chalk.black("Hello World"));

//-----------------------------------------------------------------------------------------------

// const text = figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// ESM
// import { faker } from '@faker-js/faker';

// CJS
// const { questions } = require('@faker-js/faker');

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });

//-----------------------------------------------------------------------------------------------
// const spinner = ora("Loading unicorns").start();

// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "Loading rainbows";
// }, 1000);
//-----------------------------------------------------------------------------------------------


//  console.log(inquirer);

//  inquirer
//  .prompt([
//    /* Pass your questions in here */
//  ])
//  .then((answers) => {
//     [ 
//         {
//                   name: "Josh",
//                   email: "josh1998@gmail.com",
//                   avatar: "link"
//         },
//         {
//                   name: "Sarah",
//                   email: "sarah@yahoo.com",
//                   avatar: "link"
//                 }
//         ]
//  })
//  .catch((error) => {
//    if (error.isTtyError) {
//      // Prompt couldn't be rendered in the current environment
//    } else {
//      // Something else went wrong
//    }
//  });

 

// import cowsay from "cowsay";
// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   })
// );

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((questions) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

