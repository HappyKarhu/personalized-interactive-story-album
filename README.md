# Birthday Gift: Interactive Story & Slideshow Web Page

This project was created as a birthday gift for my mother. It is a customizable interactive website that combines storytelling, visual slideshows, images, videos, and sound effects into a playful experience.  

The concept is inspired by childhood stories told by my mother, featuring recurring characters like raccoons, a snail, and a snake. The design celebrates her favorite pastel colors, love of rainbows, and the beauty of the sky. Every element—from colors to videos—was chosen to evoke joy, nostalgia, and a sense of wonder.  

Originally built in Slovenian; any leftover Slovenian words are just bonus features.  
Sample pictures are from my Pixabay account [Mojpe](https://pixabay.com/users/mojpe-885231/).

---

## Project Structure

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


## Pages Overview

### 1. Index Page (`index.html`)
- Displays a cake image, text, warning, and "Choose a story" button.  
- Clicking the cake plays "Happy Birthday".  
- Navigate to Warning (`warning.html`) or Choose a Story (`choose.html`).  
- Almost everything is customizable.

### 2. Warning (`warning.html`)
- Clicking the warning button triggers an alarm sound (`alarm_sound.mp3`).  
- After the alarm, redirects to the personal album page (`album.html`).

### 3. Album Page (`album.html`)
- Displays a personal photo & video album.  
- Includes images, videos, and text, all replaceable.  
- Images sourced from [Pixabay/Mojpe](https://pixabay.com/users/mojpe-885231/).  

### 4. Choose a Story (`choose.html`)
- Accessed from the index page via "Choose a story" button.  
- Contains 3 buttons, each leading to a different story.  
- Inspired by bedtime tales told by my mother.  
- Button images are replaceable.  
- Story redirects:  
  - Story 1 (Raccoon) → `story1.html`  
  - Story 2 (Long Snake) → `story2.html` (after 5 clicks)  
  - Story 3 (Glass Snail) → `story3.html` (after 5 clicks)

### 5. Story 1 (`story1.html`)
- Text story with images.  
- Images can be left, right, or center aligned.  
- Fully customizable, add as much text or images as desired.

### 6. Story 2 (`story2.html`)
- Text-based story with interactive confirmation.  
- Must click a button five times to confirm viewing the story.

### 7. Story 3 (`story3.html`)
- Story presented as a video (`sample-video1.mp4`).  
- Same five-click confirmation mechanism before entry.

------- 

## Customization
- Replace images in `assets/` with your own.  
- Replace audio (`happy_birthday.mp3`, `alarm_sound.mp3`) with personal sounds.  
- Replace videos in `videos/`.  
- Edit CSS files to change look and feel.  
- Add or modify stories in their respective `.html` files.  

## How to Run
1. Clone the repository.  
2. Open `index.html` in your browser.  
3. Explore and enjoy the interactive stories and album.

## License
This project is open-source. Feel free to modify, expand, and personalize it.