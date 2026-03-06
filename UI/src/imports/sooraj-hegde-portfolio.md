Portfolio Specification: Sooraj Hegde

This document provides a comprehensive overview of Sooraj Hegde's technical skills, projects, and professional focus, derived from an exhaustive analysis of his public GitHub repositories. The aim is to create a detailed specification that can be used by an AI agent to construct a complete and accurate portfolio website.

1. Personal Information

Name: Sooraj Hegde

Title: Engineering Student (CSE–IT @ REVA University)

Focus Areas: AI & Web Development Enthusiast, Data Structures and Algorithms (DSA) & Competitive Programming (CP) Grinder

Location: REVA University

Goal: To become a full-stack + AI engineer with strong problem-solving skills.

Key Achievements: Sooraj has demonstrated strong foundational and competitive programming skills by successfully solving over 400 Data Structures and Algorithms problems and achieving a CodeChef ★★ rating.

2. Technical Skills

Sooraj possesses a diverse and robust technical skill set, encompassing multiple programming languages, frameworks, tools, and specialized areas in AI and data. This broad expertise enables him to tackle complex challenges across various domains.

2.1. Languages

Sooraj is proficient in several programming languages essential for modern software development and AI applications.

Language
Proficiency
C++
Proficient
Python
Expert
JavaScript
Proficient
TypeScript
Proficient




2.2. Frameworks & Tools

His expertise includes a wide array of frameworks and tools for frontend, backend, AI orchestration, automation, and general development.

Category
Technologies
Frontend
React 18, Vite, Next.js, Tailwind CSS, Zustand, React Query, D3.js, Monaco Editor
Backend/API
FastAPI, Flask, async SQLAlchemy 2.0, Pydantic v2, Alembic
AI Orchestration
LangChain, LangGraph, n8n
Automation
Playwright
Data/Machine Learning
scikit-learn, pandas, NumPy
Databases
PostgreSQL (Neon DB), SQLite, Redis 7
DevOps/Deployment
Docker, Docker Compose, Nginx, Render, Vercel
Authentication
JWT, bcrypt, FastAPI-Users
Version Control
Git/GitHub




2.3. AI & Data Ecosystem

Sooraj's specialized knowledge in AI and data is evident through his use of advanced models and libraries.

Category
Technologies
AI Models
Google Gemini AI (2.5 Flash, 2.5 Pro)
ML/DL Concepts
Machine Learning, Deep Learning, Generative AI
Databases
SQLite, Neon (PostgreSQL)
Data Science
scikit-learn, pandas, NumPy




3. Public Projects

Sooraj's GitHub profile showcases a diverse portfolio of projects, each demonstrating his practical application of technical skills and innovative problem-solving abilities. The following provides a detailed breakdown of each public repository.

3.1. CP-GPT 


Description: CP-GPT is an AI-powered competitive programming coach designed to transform the Codeforces problem database into guided, progressive learning paths. It allows users to chat with an intelligent agent, receive Socratic hints, and track their improvement in competitive programming.

Key Features:

•
AI Chat Coach: An autonomous agent powered by Google Gemini that provides personalized recommendations, searches problems, and analyzes user profiles via function calling.

•
Practice Paths: Generates structured sequences of Codeforces problems, ordered by difficulty and filtered by topic and mode (Learning / Revision / Challenge).

•
Socratic Coaching: Offers a 5-level hint ladder that progressively guides users towards solutions without revealing them directly.

•
Codeforces Integration: Automatically synchronizes with over 10,000 Codeforces problems, including tags, ratings, and user submission history.

•
Skill Estimation: Provides per-topic skill estimation using 75th-percentile analysis of solved problem ratings, adjusted for volume and consistency.

•
Dashboard & Analytics: Features a comprehensive dashboard to track total solves, identify topic strengths and weaknesses, analyze rating distribution, and monitor progress on practice paths.

Tech Stack: FastAPI, React 18, TypeScript, PostgreSQL (Neon DB compatible), Redis 7, Google Gemini (gemini-2.5-flash), Docker Compose, Nginx, JWT, bcrypt, FastAPI-Users, Alembic.

3.2. NeurOS 2.0 


Description: NeurOS 2.0 is a Metacognitive Learning & Retention System, a personal knowledge system that captures thinking patterns, tracks memory decay, and optimizes long-term retention through spaced repetition. It emphasizes understanding how one learns and ensuring long-term recall.

Key Features:

•
Spaced Repetition System (SRS): Implements the SuperMemo-2 algorithm for optimal review scheduling, with quality-based ratings dynamically adjusting intervals.

•
Decay Tracking: Visualizes the Ebbinghaus forgetting curve and provides critical alerts when retention drops below a set threshold. Includes a practice heatmap and strength tracking across knowledge items.

•
Knowledge Graph: A D3.js-powered visualization of interconnected concepts, techniques, patterns, and algorithms, with node sizes indicating mastery levels.

•
Flash Coding: Integrates the Monaco Editor for code practice, offering pattern templates with hidden solutions and self-rating for quality.

•
Daily Intelligence: Provides a morning standup with personalized recommendations, prioritizing urgent reviews, decaying items, and new material.

•
Mandatory Reflection: Every entry requires reflection across five fields:
What I learned, What was confusing, What to explore next, Confidence level, and Key pattern.

Tech Stack: FastAPI, React 18, TypeScript, PostgreSQL, SQLAlchemy 2.0, D3.js, Monaco Editor, Tailwind CSS, Celery, Redis, JWT.

3.3. AI Maintenance Reporter 


Description: An intelligent maintenance ticket system that leverages Google Gemini AI and LangGraph to automatically detect and classify broken equipment from photos. It streamlines the process of reporting and managing maintenance issues.

Key Features:

•
Secure Authentication: Implements a robust authentication system, restricting access to @reva.edu.in email addresses only.

•
Photo Upload & AI Detection: Allows users to upload photos of damaged equipment, which are then analyzed by Google Gemini 2.5 Pro for issue detection and identification.

•
Smart Classification: Utilizes a LangGraph workflow to accurately classify issue types and assign appropriate priorities based on AI analysis.

•
Automatic Ticketing: Generates comprehensive maintenance tickets with detailed descriptions, facilitating efficient issue resolution.

•
Real-time Dashboard: Provides a dynamic dashboard for viewing and managing all tickets, including their current status and priority levels.

•
JWT Authentication: Ensures secure, token-based authentication for all user interactions within the system.

Tech Stack: FastAPI, LangGraph, Google Gemini AI, SQLite/Neon (PostgreSQL), React 18, Vite, Tailwind CSS.

3.4. NeuroAgent - Multi-Tool Chatbot 


Description: An intelligent AI chatbot powered by Google Gemini 2.5 Flash, LangChain, and LangGraph, integrating over 12 tools to provide a versatile conversational agent capable of a wide range of tasks.

Key Features:

•
Web Search: Integrates with the Google Serper API for real-time internet search capabilities, allowing the chatbot to access up-to-date information.

•
Python Code Executor: Enables safe execution of Python code snippets directly within the chat environment, useful for calculations or data processing.

•
Mathematical Calculator: Performs advanced mathematical calculations, including trigonometry, logarithms, and more.

•
Browser Automation: Utilizes Playwright to programmatically navigate webpages, click elements, extract links, and capture screenshots, enabling web-based interactions.

•
AI Vision: Employs Google Gemini 2.5 Pro for advanced image analysis, visual understanding, and problem recognition from uploaded images.

•
Persistent Memory: Maintains thread-based conversation history, ensuring continuous context across interactions.

•
Auto-naming: Intelligently names chat sessions for better organization and user experience.

Tech Stack: Google Gemini 2.5 Flash/Pro, LangChain, LangGraph, Streamlit, Playwright, Serper API, Python 3.9+.

3.5. MovieDude - Movie Recommendation System 


Description: An advanced content-based filtering movie recommendation system featuring both a command-line interface (CLI) and a modern web interface. It provides personalized movie suggestions and allows users to find similar movies based on titles.

Key Features:

•
Web Interface: A responsive Flask-based web application with a Netflix-inspired user interface, offering an intuitive and engaging user experience.

•
Dual Recommendation Modes: Offers personalized recommendations based on user viewing history and a search function to find similar movies by title.

•
Optimized Performance: Achieves 10-30x faster results through vectorized Jaccard similarity calculations, ensuring quick recommendations.

•
Advanced Filtering: Includes options to hide watched movies and display only highly-rated films, enhancing recommendation relevance.

•
Extensive Database: Built upon a comprehensive database of over 6000 movies with detailed metadata, providing a rich source for recommendations.

Tech Stack: Python 3.12, Flask, SQLite, pandas, NumPy, scikit-learn.

3.6. next-js 


Description: A foundational Next.js project bootstrapped with create-next-app, primarily used for practicing and exploring Next.js features and deployment workflows. It serves as a learning and development sandbox for modern web applications.

Tech Stack: Next.js, TypeScript, Tailwind CSS.

3.7. Question-Management-Sheet / question_management_sheet 


Description: A React-based application designed for managing questions, featuring a dark mode and optimized for deployment on platforms like Vercel. This project showcases basic React app development principles.

Key Features:

•
Basic React App: A fundamental React application structure.

•
Vite Integration: Utilizes Vite for fast development and hot module replacement (HMR).

•
ESLint Integration: Includes ESLint for maintaining code quality and consistency.

•
Dark Mode: Provides a user-friendly dark mode interface.

Tech Stack: React, Vite, JavaScript, CSS, Vercel.

3.8. Generate_Challenges 


Description: A tool developed for generating coding challenges. This project likely supports educational or competitive programming platforms by creating diverse and engaging problems for users to solve.

Tech Stack: JavaScript, CSS, Python.

3.9. agent-chat-ui (Forked) 


Description: A web application for interacting with any LangGraph agent via a chat interface. This project is a fork, indicating contributions or adaptations to an existing LangGraph UI.

Tech Stack: TypeScript, LangGraph.

3.10. docs (Forked) 


Description: Documentation for LangChain projects. This is a forked repository, suggesting involvement in contributing to or customizing LangChain documentation.

Tech Stack: MDX.

3.11. react-notes (Forked) 


Description: A collection of concise, hands-on notes derived from the Namaste React course, providing insights into React development. This fork serves as a personal learning resource or a base for further contributions.

Tech Stack: JavaScript.

4. Current Focus

Sooraj is actively engaged in enhancing his skills and exploring advanced topics to further his expertise:

•
Data Structures & Algorithms: Concentrating on strengthening his understanding and application of advanced topics such as Recursion, Dynamic Programming (DP), Trees, and Graphs.

•
Advanced AI/Web Development: Actively mastering FastAPI, LangChain, LangGraph, and n8n to build sophisticated AI-powered backend systems and automation workflows.

5. References

[1] CP-GPT Repository:
[2] NeurOS Repository:
[3] AI-Maintainance-Reporter Repository:
[4] NeuroAgent Repository:
[5] Movie-Recommendation-System Repository:
[6] next-js Repository:
[7] Question-Management-Sheet Repository:
[8] Generate_Challenges Repository:
[9] agent-chat-ui Repository:
[10] docs Repository:
[11] react-notes Repository:
