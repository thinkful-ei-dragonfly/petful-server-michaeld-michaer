/* // --------------
// Items live here to
// populate Queue each
// time server starts */
const Queue = require('../queue');

const catsData = new Queue();

catsData.enqueue(
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);

catsData.enqueue(
  {
    imageURL:
      'https://placekitten.com/200/200?image=1',
    imageDescription:
      'A cute cuddly litten kitten who needs a home.',
    name: 'Stripes',
    sex: 'male',
    age: 0,
    breed: 'Tabby',
    story: 'Mom cant take care of us all :('
  }
);

catsData.enqueue(
  {
    imageURL:
      'https://placekitten.com/200/200?image=11',
    imageDescription:
      'A very nice white cat who is shy but friendly',
    name: 'Casper',
    sex: 'male',
    age: 2,
    breed: 'Turkish',
    story: 'Homeless'
  }
);

catsData.enqueue(
  {
    imageURL:
      'https://placekitten.com/200/200?image=3',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Lela',
    sex: 'Female',
    age: 2,
    breed: 'American Short-haired cat',
    story: 'Thrown on the street'
  }
);

catsData.enqueue(
  {
    imageURL:
      'https://placekitten.com/200/200?image=7',
    imageDescription:
      'A miniature cat with a smiling face :)',
    name: 'Butterbean',
    sex: 'male',
    age: 1,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);
module.exports = { catsData };
