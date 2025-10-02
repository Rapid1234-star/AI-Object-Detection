# AI Object Detection

## 📌 Introduction

**AI Object Detection** is a web-based application built with Next.js that performs real-time object detection in images or video streams using the pre-trained COCO-SSD model. This project demonstrates how to integrate AI-powered vision models directly into a modern web app, making it accessible through a simple browser interface.

---

## 🌐 Live Demo

Try it here: [https://ai-objecy-detector.vercel.app/](https://ai-objecy-detector.vercel.app/)

## 📂 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## ✨ Features

- 🚀 Built with Next.js (React) for modern web development
- 🎯 Uses COCO-SSD pre-trained AI model for object detection
- 📷 Supports real-time detection via webcam or uploaded images
- ⚡ Optimized rendering of detection boxes & labels
- 🌐 Runs entirely in the browser — no backend server required

---

## ⚙️ Installation

1. **Clone the repository**
    ```bash
    git clone [link]
    cd AI-Object-Detection
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the development server**
    ```bash
    npm run dev
    ```

4. **Open your browser**
    - Visit [http://localhost:3000](http://localhost:3000)

---

## ▶️ Usage

- Enable your webcam.
- The app will automatically run the COCO-SSD model on the input.
- Detected objects will be highlighted with bounding boxes and labels.

---

## 📂 Project Structure

```
AI-Object-Detection/
├── app/                  # Next.js app directory
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/           # Core React components
│   ├── object-detection.js
│   └── utils/
│       └── render-prediction.js
├── public/               # Static assets
├── package.json          # Dependencies & scripts
└── next.config.mjs       # Next.js configuration
```

---

## 📦 Dependencies

- **Next.js** – React framework
- **React** – UI library
- **COCO-SSD** – Pre-trained object detection model
- **ESLint, PostCSS** – Development tools

---

## 🔧 Configuration

No special configuration required.
Optional environment variables may be added if extending functionality (e.g., custom model URLs).

---

## 🖼️ Examples

**Object Detection in Action:**

- Person, car, dog, etc. detected in real-time.
- (Screenshots or GIFs can be added here.)

---

## 🛠️ Troubleshooting

- Ensure Node.js ≥ 16 is installed.
- If detection is slow, check browser GPU acceleration.
- Webcam not working? → Verify browser permissions.

---

## 👥 Contributors

- Don't have any yet 🥲

---

## 📜 License

This project is licensed under the MIT License.
