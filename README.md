<p align="center">
  <img src="logo.png" alt="SaraBot Logo" width="240" style="border-radius: 24px; box-shadow: 0 0 35px rgba(249, 115, 22, 0.45);" />
</p>

<h1 align="center">⚡ SaraBot — AI Chatbot Application</h1>

<p align="center">
  <strong>Production-grade multi-model AI chatbot experience with intelligent routing across Gemini, OpenAI, and Python.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/REACT-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/PYTHON-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.8" />
  <img src="https://img.shields.io/badge/ROUTER-AUTO%20ROTATE-FF6B6B?style=for-the-badge" alt="Auto Router" />
  <img src="https://img.shields.io/badge/MATH%20ENGINE-0ms%20LATENCY-10B981?style=for-the-badge" alt="Math Engine" />
  <img src="https://img.shields.io/badge/STREAMING-SSE%20REALTIME-8B5CF6?style=for-the-badge" alt="SSE Streaming" />
  <img src="https://img.shields.io/badge/LICENSE-MIT-F59E0B?style=for-the-badge" alt="License MIT" />
</p>

---

## 📌 1. Project Overview & Summary

**SaraBot** is a high-performance, full-stack AI chatbot and multi-model agent. Built with **React 18** and **Flask**, SaraBot solves the single-model limitation by introducing an **Intelligent Task Router** that automatically classifies user intent in real-time and dispatches requests to the most effective engine:
- **Coding & Engineering Tasks:** Injects custom system prompts and delivers syntax-highlighted code blocks.
- **Conversational & Explanatory AI:** Real-time token streams powered by Google Gemini 2.5 Flash.
- **Instant Mathematical Computations:** Sub-millisecond arithmetic processing executed via an isolated Python AST engine without consuming external API credits.

---

## 📌 2. Key Features & Core Capabilities

- **🤖 Smart Multi-Model Routing:** Analyzes prompts for coding keywords (`function`, `react`, `debug`, `sql`, `api`, etc.) and automatically selects the optimal engine.
- **🎛️ Dynamic Model Selector:** Manual overrides allow switching instantly between **Auto Rotate**, **Gemini**, or **ChatGPT**.
- **⚖️ Side-by-Side Model Arena (`CompareModal`):** Run any prompt against two models concurrently with dual real-time streaming comparison.
- **⚡ Zero-Latency Math Calculator:** Evaluates mathematical expressions (e.g., `15% of 240`, `sqrt(144) * 12`, `2^10`) locally with zero network latency.
- **✨ Cyberpunk Dark UI/UX:** Styled with Tailwind CSS, Orbitron typography, and glowing orange accents for a sleek, distraction-free environment.
- **📦 Session Persistence & Export:** Stores complete chat history in browser `localStorage` with auto-titling, session deletion, and one-click markdown exports (`Ctrl + E`).
- **📋 One-Click Code Copy:** Formatted code blocks with language indicators and instant clipboard copy feedback.

---

## 📌 3. Architecture & Routing Logic

```mermaid
flowchart TD
    User([User Prompt Input]) --> Router{Task Classifier}
    Router -->|Math Expression| MathEngine[Python Math Engine\nZero API Latency]
    Router -->|Coding Keywords| AutoPrompt[System Prompt Injection\n+ Code Formatter]
    Router -->|General Chat| GeminiEngine[Google Gemini API\n2.5 Flash]
    AutoPrompt --> AICall[API Handler / Fallback Manager]
    AICall --> GeminiEngine
    AICall --> OpenAIEngine[OpenAI GPT API]
    MathEngine --> SSEStream[SSE Stream Generator]
    GeminiEngine --> SSEStream
    OpenAIEngine --> SSEStream
    SSEStream --> FrontendUI[React UI / Message Renderer]
```

---

## 📌 4. Folder & Project Structure

```
Ai CHAT BOT/
│
├── logo.png                       # SaraBot official AI brand emblem
├── README.md                      # Complete project documentation
├── FILE_STRUCTURE.md              # Detailed source file index
├── SETUP.md                       # Quick installation guide
├── .gitignore                     # Git ignore rules for node_modules, .env, pycache
│
├── backend/                       # Python Flask API & AI Routing Service
│   ├── app.py                     # Main Flask server, SSE streaming routes (/api/chat, /api/compare)
│   ├── router.py                  # Task classification, prompt injection, and multi-model dispatch
│   ├── math_engine.py             # Safe, local AST math evaluation engine
│   ├── test_api.py                # Backend unit tests and connection health checks
│   ├── requirements.txt           # Python dependencies (flask, flask-cors, requests, python-dotenv)
│   ├── .env                       # Environment variables (API keys - excluded from git)
│   └── .env.example               # Template for environment configuration
│
└── frontend/                      # React 18 + Vite Single Page Application
    ├── index.html                 # HTML shell with custom fonts & meta tags
    ├── vite.config.js             # Vite build & dev server config
    ├── tailwind.config.js         # Custom Tailwind theme (colors, Orbitron font family)
    ├── postcss.config.js          # PostCSS configuration
    ├── package.json               # Frontend dependencies & scripts
    │
    └── src/
        ├── main.jsx               # React DOM entry point
        ├── App.jsx                # Core application layout, SSE consumer & state coordinator
        ├── index.css              # Global styles, Tailwind directives & custom scrollbars
        │
        ├── assets/
        │   └── logo.png           # SaraBot branding assets
        │
        ├── components/            # Modular React UI Components
        │   ├── Header.jsx         # App header with logo, mobile sidebar toggle & Compare button
        │   ├── Sidebar.jsx        # Session list, new chat trigger, search & export actions
        │   ├── ChatArea.jsx       # Scrollable chat thread & welcome quick-actions
        │   ├── Message.jsx        # Message bubble, code syntax blocks & metadata badges
        │   ├── InputArea.jsx      # Auto-expanding textarea, model selector & submit button
        │   ├── CompareModal.jsx   # Side-by-side dual model comparison dialog
        │   ├── AboutModal.jsx     # System information & model details modal
        │   └── Logos.jsx          # SVG brand icons for Gemini & ChatGPT
        │
        └── utils/
            └── storage.js         # LocalStorage persistence helpers for chat sessions
```

---

## 📌 5. Technical Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 18 + Vite | Lightning-fast reactive user interface |
| **Styling** | Tailwind CSS + Lucide Icons | Responsive modern cyberpunk dark theme |
| **Backend Framework** | Python 3 + Flask + Flask-CORS | API server with Server-Sent Events (SSE) |
| **AI Providers** | Google Gemini 2.5 Flash, OpenAI GPT | Multi-model intelligence & code generation |
| **Computation Engine** | Python AST Math Engine | Sub-millisecond instant math calculations |
| **Storage** | Browser LocalStorage | Zero-database client-side privacy & persistence |

---

## 📌 6. Setup & Installation Guide

### Prerequisites
- **Node.js**: v18.x or higher
- **Python**: v3.8 or higher
- **Google Gemini API Key** ([Get free key at Google AI Studio](https://aistudio.google.com/))
- **OpenAI API Key** *(Optional)*

### Step 1: Clone Repository
```bash
git clone https://github.com/Faisal-rabani/Saga-Bot.git
cd "Ai CHAT BOT"
```

### Step 2: Backend Setup
```bash
cd backend
python -m venv venv

# On Windows:
venv\Scripts\activate
# On macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

Create `backend/.env` file:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=development
```

Start the Flask server:
```bash
python app.py
```
*Backend runs on `http://localhost:5000`*

### Step 3: Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:5175`*

---

## 📌 7. API Reference

### 1. Chat Stream Endpoint
`POST /api/chat`
```json
{
  "message": "Write a debounce function in JavaScript",
  "messages": [
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help you today?"}
  ],
  "model_override": "auto"
}
```
**Response:** `text/event-stream` delivering content chunks and metadata (model used, response time, token count).

### 2. Dual Model Comparison
`POST /api/compare`
```json
{
  "prompt": "Explain Quantum Computing in simple terms",
  "model1": "gemini",
  "model2": "openai"
}
```
**Response:** `text/event-stream` delivering concurrent streams from both models.

### 3. Service Health Check
`GET /health`
```json
{
  "status": "ok",
  "api_key_present": true
}
```

---

## 📌 8. Challenges Faced & Solutions (Problem Solving)

1. **OpenAI Quota Limits & Rate Limits (HTTP 429):**
   - *Problem:* Users on OpenAI free-tier often encounter credit limits or 429 errors.
   - *Solution:* Implemented an intelligent fallback pipeline in `router.py`. If OpenAI quota is exhausted, the engine seamlessly routes requests to Gemini 2.5 Flash while notifying the user gracefully without crashing the UI.

2. **Empty Placeholder Bubbles During SSE Streaming:**
   - *Problem:* Frontend initializations added empty assistant objects to the message list before the first token arrived, resulting in empty or duplicate bubbles.
   - *Solution:* Added strict sanitization in `backend/app.py` to filter empty message payloads and optimized `Message.jsx` to render content cleanly only when valid tokens exist.

3. **Code Formatting & Markdown Consistency:**
   - *Problem:* AI models occasionally outputted raw unformatted code instead of formatted code blocks.
   - *Solution:* Injected targeted system prompts whenever coding tasks are detected, ensuring code blocks always include language headers and formatting compatible with the custom copyable code widget.

4. **Instant Math without Consuming API Quota:**
   - *Problem:* Sending simple arithmetic calculations to cloud LLMs introduced unnecessary latency (1-2s) and consumed API quotas.
   - *Solution:* Integrated a regex-powered `math_engine.py` using Python's mathematical evaluation to deliver instant (<5ms) results.

---

## 📌 9. Keyboard Shortcuts & UX Guide

| Shortcut | Action |
|---|---|
| `Ctrl + K` / `Cmd + K` | Start a new chat session |
| `Ctrl + E` / `Cmd + E` | Export active chat session as Markdown |
| `Enter` | Send message |
| `Shift + Enter` | Insert new line in chat input |

---

## 📌 10. License & Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

Distributed under the **MIT License**. See `LICENSE` for more information.

<p align="center">
  Built with ❤️ for AI Builders & Developers
</p>
