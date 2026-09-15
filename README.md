# 🎙️ Common Voice (Mozilla Clone)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![GitHub stars](https://img.shields.io/github/stars/PuneetShivaay/Common-Voice-Mozila?style=flat-square)](https://github.com/PuneetShivaay/Common-Voice-Mozila/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/PuneetShivaay/Common-Voice-Mozila?style=flat-square)](https://github.com/PuneetShivaay/Common-Voice-Mozila/network/members)

A full-stack open-source voice platform inspired by Mozilla's Common Voice initiative. Designed to facilitate crowdsourced speech collection, audio recording, sentence playback, and dataset contribution for training open speech recognition systems.

---

## 🏗️ Architecture & Project Structure

This monorepo consolidates both client and server applications:

```text
Common-Voice-Mozila/
├── frontend/             # Client-side React.js SPA
│   ├── src/
│   │   ├── components/   # Audio recorder, playback, user details & pages
│   │   └── ...
│   └── package.json
├── backend/              # Server-side Spring Boot application
│   ├── mvnw              # Maven wrapper
│   ├── pom.xml           # Dependencies and build configuration
│   └── ...
├── .gitignore            # Full-stack Git ignore rules
└── README.md             # Project documentation
```

---

## ✨ Core Features

- 🎙️ **Voice Recording:** Browser-based microphone capture using the Web Audio and MediaRecorder APIs.
- 🎧 **Listen & Validate:** Audio playback UI allowing users to review and validate recorded voice samples.
- 👤 **Contributor Profiles:** Collect demographic info (accent, age, gender) to improve acoustic model diversity.
- ⚡ **Modular Design:** Decoupled React client communicating with a Spring Boot backend API.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML5 Audio API, CSS3, JavaScript (ES6+)
- **Backend:** Java, Spring Boot, Maven
- **Build & Package:** npm (Client), Maven Wrapper (Server)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/PuneetShivaay/Common-Voice-Mozila.git
cd Common-Voice-Mozila
```

### 2. Run the Frontend (React)
```bash
cd frontend
npm install
npm start
```
The client will launch at `http://localhost:3000`.

### 3. Run the Backend (Spring Boot)
Open a new terminal window:
```bash
cd backend
./mvnw clean spring-boot:run
```
*(On Windows: `mvnw.cmd clean spring-boot:run`)*

---

## 🤝 Contributing

Contributions, feedback, and pull requests are welcome:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

⭐ **If you find this project interesting, please drop a star on GitHub!**