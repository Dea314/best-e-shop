// categories from database
const categories = [
  {
    name: "Books",
    description:
      "Books - Looking for your new favourite book? Browse some of our top categories such as Children's Books, Fiction, Graphic Novels, Anime & Manga, Food & Drink, Crafts & Hobbies, Art & Photography, Biography, and Crime & Thriller. ",
    image: "/images/books-category.png",
    attrs: [
      {
        key: "Genre",
        value: [
          "Art",
          "Comics",
          "Crime",
          "Drama",
          "Fantasy",
          "Fiction",
          "Humor",
          "Novels",
          "Mystery",
          "Poetry",
          "Science fiction",
        ],
      },
    ],
  },
  {
    name: "eBooks",
    description:
      "eBooks - Discover the advantages of digital reading with our eBooks, eBook readers & apps. Secure top offers now! We're happy to help you find what's right for you. ",
    image: "/images/ebooks-category.png",
    attrs: [
      {
        key: "Genre",
        value: [
          "Art",
          "Comics",
          "Crime",
          "Drama",
          "Fantasy",
          "Fiction",
          "Humor",
          "Novels",
          "Mystery",
          "Poetry",
          "Science fiction",
        ],
      },
    ],
  },

  {
    name: "Cameras digital",
    description:
      "Cameras - Designed to match your passion for photography, our new cameras feature all the latest imaging innovations, thanks to our on-going, industry-leading investment in research and development.",
    image: "/images/cams-category.png",
  },
  {
    name: "Computers",
    description:
      "Computers - It is hard to imagine life nowadays without computers. In the comfort of your home, you can easily find in our online shop something for you.",
    image: "/images/computers-category.png",
    attrs: [
      {
        key: "RAM",
        value: [
          "16 GB",
          "32 GB",
          "64 GB",
          "128 GB",
          "512 GB",
          "1 TB",
          "2 TB",
          "4 TB",
        ],
      },
      { key: "color", value: ["blue", "red", "silver", "black"] },
    ],
  },

  {
    name: "Games",
    description:
      "Games - From competitive shooters to sprawling MMOs and relaxing puzzle games, here are the best PC games to play right now.",
    image: "/images/games-category.png",
  },
  {
    name: "Monitors",
    description:
      "Monitors - Computer monitors come in a variety of sizes, from 12-inch up to 65-inch panels that bridge the gap between monitors and TVs. Between the two extremes, you can find something for yourself.",
    image: "/images/monitors-category.png",
  },
  {
    name: "Tablets",
    description:
      "Tablets - The tablet is a practical mixture of a laptop and mobile phone and can be used anywhere thanks to its compactness.",
    image: "/images/tablets-category.png",
  },

  {
    name: "Toys",
    description:
      "Toys - Discover the huge selection of toys and games here in our online shop. Age-appropriate toys for babies, children, and teenagers can be found in the toy guide.",
    image: "/images/toys-category.png",
    attrs: [
      {
        key: "Type",
        value: [
          "Action figures",
          "Animals",
          "Cars",
          "Construction toys",
          "Creative toys",
          "Dolls",
          "Educational",
          "Electronic",
          "Food-related toys",
          "Games",
          "Puzzle/assembly",
          "Plush toys",
          "Sound toys",
        ],
      },
      { key: "Age", value: ["0-3 y", "3-7 y", "7-12 y"] },
    ],
  },
];

module.exports = categories;
