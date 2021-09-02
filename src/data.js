import featureImgOne from "./assets/illustration-features-tab-1.svg";
import featureImgTwo from "./assets/illustration-features-tab-2.svg";
import featureImgThree from "./assets/illustration-features-tab-3.svg";

import downloadImgOne from "./assets/logo-chrome.svg";
import downloadImgTwo from "./assets/logo-firefox.svg";
import downloadImgThree from "./assets/logo-opera.svg";

export const featuresData = [
  {
    id: 1,
    image: featureImgOne,
    tabTitle: "Simple Bookmarking",
    heading: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    image: featureImgTwo,
    tabTitle: "Speedy Searching",
    heading: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    image: featureImgThree,
    tabTitle: "Easy Sharing",
    heading: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export const downloadsData = [
  {
    id: 1,
    image: downloadImgOne,
    heading: "Add to Chrome",
    specs: "Minimum version 62",
  },
  {
    id: 2,
    image: downloadImgTwo,
    heading: "Add to Firefox",
    specs: "Minimum version 55",
  },
  {
    id: 3,
    image: downloadImgThree,
    heading: "Add to Opera",
    specs: "Minimum version 46",
  },
];
