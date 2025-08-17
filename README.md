Birthay gift for a parent or someone who told you stories & Slideshow Web Page

1. This project (created as a gift for my mother’s birthday) is a customizable interactive website that combines interactive storytelling, visual slideshows, images, videos, and sound effects into a playful experience. 
The concept is inspired by childhood stories told by my mother, with raccoons, a snail, and a snake as recurring characters.
Designed to celebrate her favorite colors (pastel) , love of rainbows, and the beauty of the sky. Every element (from colors to videos) was chosen to evoke joy, nostalgia, and a sense of wonder.
Originally built in Slovenian. Any leftover Slovenian words you find are just bonus features.
Sample pictures are from my Pixabay account Mojpe.

2. Project Structure

project-root/
├── index.html
├── choose.html
├── story1.html
├── story2.html
├── story3.html
├── warning.html
├── album.html
├── assets/
│   ├── sky.jpg
│   ├── cake.png
│   ├── sample-images(from1-4).jpg
│   └── buttons (3psc)-images
├── audio/
│   ├── alarm_sound.mp3
│   ├── happy_birthday.mp3
├── videos/
│   ├── sample-video1.mp4
│   ├── sample-video2.mp4
│   └──  sample-video3.mp4
├── css/
│   ├── style.css
│   ├── warning.css
│   ├── album.css
│   └── choose.css
└── js/
    ├── script.js
    ├── warning.js
    ├── album.js
    └── choose.js


3. Index Page (index.html)
Displays a cake image, text, warning and choose a story button, by clicking on cake picture Happy Birthday starts to play.
Almost everything on a page is changeable.
From here you can go to Warning (warning.html) or Choose a story (choose.html).

4. Warning (warning.html)
Clicking the warning button takes you to warning.htlm
Clicking again triggers an alarm sound (alarm_sound.mp3).
After the alarm, you’re redirected to the personal album page (album.html).

5. Album Page (album.html)
Displays a personal photo & video album.
Includes images, videos, and text. Can be expanded with your own content.
All assets are replaceable.
All picture are from my Pixabay account: https://pixabay.com/users/mojpe-885231/

6. Choose a story (choose.html)
From index page by clicking on Choose a story button you land here.
Contains 3 buttons, each leading to a different story.
The stories were inspired by bedtime tales told by my mother.
Each is unique and fully customizable.
Button pictures are replasable.
If clicked to story 1 (Racoon story) redirected to story1.html
If cliked 5 times to Longs snake(story2) redirect to story2.html or 5 times Glass snail (story3) redirect to story3.html 

7. Story 1 (story1.html)
Text story with images
Images are wrapped with text left and right. 
Center images also.
Everything is changable and you can add as many text or images as like. Also can make different sequence.

8. Story 2 (story2.html)
Text-based story with interactive confirmation.
You need to click a button five times to “really confirm” you want to hear the story.

9. Story 3 (story3.html)
Story presented as a video (sample-video1.mp4).
Same “five-click confirmation” mechanism before entering.

10. Customization
Everything in this project is made to be changed and add personal touch.
Replace images in assets/ with your own.
Replace audio (happy_birthday.mp3, alarm_sound.mp3) with personal sounds.
Replace videos in videos/.
Edit CSS files to change the look and feel.
Add or modify stories in their respective .html files.

11. How to run
Clone the repository.
Open index.html in your browser.
Explore and enjoy the interactive stories and album.

12. License
This project is open-source. Feel free to modify, expand, and personalize it.