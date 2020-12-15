# TheMurdersOfWorcestershire-Sauss-TheWebsite
## This project makes a website where you can play The Murders of Worcestershire-Sauss.
#### Created by Dhruv Sharma
##### Last Edited on December 15th, 2020

## Instructions to Run the Project:

**Method 1:**

  1. Go to https://github.com/MDerv/MDerv.github.io and download the zip file of the project.
  ![Step1](images/instructions/Step1.png?raw=true "Step1")

  2. Unzip the zip file place the unzipped folder into a folder of you choice.
  ![Step2](images/instructions/Step2.png?raw=true "Step2")

  3. Withing the folder, right click on the index.html file and select the "Open With..." option. In the dropdown menu, select Google Chrome (or another browser of your choice).
  ![Step3](images/instructions/Step3.png?raw=true "Step3")

  4. The website should open in you browser. Enjoy!
  ![Step4](images/instructions/Step4.png?raw=true "Step4")
    
**Method 2:**

  1. Go to https://mderv.github.io/ and enjoy!
  ![OnlineWebsite](images/instructions/OnlineWebsite.png?raw=true "OnlineWebsite")


## File Descriptions:

  * MLH Roll for Hacking Game Plot.txt - This is the full script of the game (with logical queues to tell the reader where to go next). As of now part of this script has been implemented in the website.

  * README.md - This file: the file that directs the user on how to use this project.

  * about.html - This page displays information about the creaters of this project, the script, and the Raspberry Pi version of this project.

  * app.js - This file allows the html button logic to be implemented in the story. It allows certain pages to be accessed depending on the choices of the user. I may use this in the future to add a connection to a database to keep track of users' save checkpoints.

  * index.html - This file defines the title index.html page. It appears when the the user types in the root website url (as of now: MDerv.github.io) and allows the user to continue to the game.

  * style.css - This file sets up the formatting and styling for objects and layout in the html pages.

**'pages' folder:**

  * page0.html - This file defines page0 in the story. It appears when the the user selects the "Start Game..." option on the index or home page.

  * page0.5.html - This file defines page0.5 in the story (its numbering is out of order because it's a new page that I created after defining the script: I didn't   * think I'd originally need it). It appears when the the user selects the "Go back to sleep" option on page0. It basically redirects back to page0.

  * page1.html - This file defines page1 in the story. It appears when the the user selects the "Leave the house" option on page0 without picking up the sword or without doing anything.

  * page2.html - This file defines page2 in the story. It appears when the the user selects the "Leave the house" option on page0 when picking up the sword but without making breakfast.

  * page3.html - This file defines page3 in the story. It appears when the the user selects the "Leave the house" option on page0 after picking up the sword and making breakfast.

  * page4.html - This file defines the title index.html page. It appears when the the user types in the root website url and allows the user to continue to the game.

  * page5.html - This file defines page5 in the story. It appears when the the user selects the "Run away from the cottage" option on page4.

  * page6.html - This file defines page6 in the story. It appears when the the user selects the "Run back into the cottage" option on page4.

  * page7.html - This file defines page7 in the story. It appears when the the user selects the "Stay and fight" option on page4.

  * page8.html - This file defines page8 in the story. It appears when the the user selects the "Continue" option on page5.

  * page9.html - This file defines page9 in the story. It appears when the the user selects the "Go East (home)" option on page8.

  * page10.html - This file defines page10 in the story. It appears when the the user selects the "Run west (to the village)" option on page9.

  * page11.html - This file defines page11 in the story. It appears when the the user selects the "Duck Left" option on page10.

  * page12.html - This file defines page12 in the story. It appears when the the user selects the "Duck Right" option on page10.

  * page13.html - This file defines page13 in the story. It appears when the the user selects the "Jump" option on page10.

  * page14.html - This file defines page14 in the story. It appears when the the user selects the "Do Nothing" option on page10.

  * page16.html - This file defines page16 in the story. It appears when the the user selects the "Run East (home)" option on page9.

  * page17.html - This file defines page17 in the story. It appears when the the user selects the "Stay and Fight" option on page9.

  * pageConstruction.html - This file defines the Under Construction page in the story. It appears when the the user selects an option for which the corresponding page has yet to be completed.

**'favicon' folder:**
The images in the favicon folder are images of a bottle of Worcestershire Sauce (the images are all the same; they just are in different sizes). These images show up as the icon on each tab of the website. That way you know which tab is a 'Murders Of Worcestershire-Sauss' tab! 'site.webmanifest' defines extra attributes for the android images.

**'images' folder:**
  * I currently have many photos stored in this folder that I plan to use later as backgrounds for various pages (this is currently a low priority - something I will do as one of the final steps in the project). The pictures that I am using in my project are the following:

  * Background.png - This image is the background for all of my pages. It is a picture of a cave, which is a central setting of the plot.

  * Karen.png - This is an image of Karen Plankton from Spongebob. It is used in the About page while talking about the project's coders and writters (because Karen is a computer and gives off a tech savy vibe).

  * UnderConstruction.png - This "Under Construction" image is used on the pageConstruction, which is used when the user chooses an option that leads to a page that hasn't been created yet.
  
  Within the images folder there is an 'instructions' folder. There I have images of Steps 1-4 of running the website and a picture of the online hosted website.

**Cache and Git Management files (should be invisible on computer):**
.DS_Store
.gitattributes


All pictures in this website were from Free and Open source libraries for public use (and the original authors were unnamed). I do not take credit for any of these pictures.
