const moment = require('moment');
const mongoose = require('mongoose');
const db = require('../models');
require('dotenv').config()
console.log('mongo uri - ', process.env.MONGODB_URI, '\n \n ');

mongoose
 .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/discourse_app", {
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'))
 .catch(err => console.log('\n error = ', err, '\n'));



const posts = [
  {
    id: '1',
    title: 'This is heavy, Doc.',
    description: 'We must go back to the future, everyone.',
    timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
    author: 'MartyMcFly',
    body: "Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis. " +
      "Written by Zemeckis and Bob Gale, it stars Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, " +
      "and Thomas F. Wilson. Set in 1985, the story follows Marty McFly (Fox), a teenager accidentally sent back to 1955 " +
      "in a time-traveling DeLorean automobile built by his eccentric scientist friend Doctor Emmett " +
      "\"Doc\" Brown (Lloyd). Trapped in the past, Marty inadvertently prevents his future parents' " +
      "meeting—threatening his existence—and is forced to reconcile the pair and somehow get back to the future. " +
      "Back to the Future was conceived of in 1980 by Gale and Zemeckis. " +
      "They were desperate for a successful film after numerous collaborative failures, " +
      "but their idea was rejected over 40 times by studios because it was not considered raunchy enough " +
      "to compete with the successful comedies of the era. A development deal was secured following Zemeckis' success " +
      "directing Romancing the Stone (1984). Fox was the first choice to portray Marty, but he was unavailable; " +
      "Eric Stoltz was cast instead. Shortly after principal photography began in November 1984, " +
      "Zemeckis determined Stoltz was not right for the part and made the concessions necessary to hire Fox. " +
      "This included re-filming scenes already shot with Stoltz and adding $4 million to the budget. " +
      "Back to the Future was filmed in and around California and on sets at Universal Studios. " +
      "Filming concluded the following April. Replacing Stoltz delayed production and the film's release date but, " +
      "following highly successful test screenings, the date was brought forward to July 3, 1985, " +
      "to give Back to the Future more time in theaters. This resulted in a rushed post-production schedule, " +
      "and some incomplete special effects. Back to the Future was a critical and commercial success, " +
      "earning $381.1 million to become the highest-grossing film of 1985 worldwide. Critics praised the story, " +
      "comedy, and the cast—particularly Fox, Lloyd, Thompson, and Glover. It received multiple award nominations " +
      "and won an Academy Award, Saturn Awards, and a Hugo Award. Its theme song, \"The Power of Love\" by Huey Lewis " +
      "and the News, was a significant success globally. In the years since its release, Back to the Future " +
      "has grown in esteem and is now considered to be among the greatest films of the 1980s, " +
      "one of the best science-fiction films ever made, and one of the greatest films of all time. " +
      "In 2007, the United States Library of Congress selected the film for preservation in the National Film Registry. " +
      "The film was followed by two sequels, Back to the Future Part II (1989) and Back to the Future Part III (1990). " +
      "With its effect on popular culture and a dedicated fan following, Back to the Future launched a multimedia " +
      "franchise. This includes an animated television series, video games, comic books, board games, clothing, music, " +
      "books, food, toys, collectibles, and theme park rides. Its enduring popularity has led to numerous books " +
      "about its production, documentaries, and commercials. Back to the Future has been adapted into a 2020 stage musical.",
    comments: [],
    likes: 5,
    userId: 'Marty-1'
  }
];

const deleteData = async () => {
  try {
    await db.Post.deleteMany();
    console.log('Data deleted');
  } catch (err) {
    console.log('\n \n error deleting data = ', err, '\n \n ');
  }
}

const seedData = async () => {
  try {
    // await deleteData();
    await db.Post.create(posts);
    console.log('Data seeded...?');
    process.exit();
  } catch (err) {
    console.log('\n \n error in seedData - ', err, '\n \n');
  }
}

seedData();


