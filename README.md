# Mail Genius ✉️🤖

![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.0-green.svg)
![Java](https://img.shields.io/badge/Java-21-orange.svg)
![Gemini AI](https://img.shields.io/badge/Gemini-2.0_Flash-blue.svg)
![Docker](https://img.shields.io/badge/Docker-24.0-blue.svg)

AI-powered email assistant with intelligent reply generation using Gemini AI.

## 🚀 Live Demos

- **Frontend Application**: [mailgenius.vercel.com](https://mail-genius-puce.vercel.app/)
- **Backend API**: `https://mailgenius.onrender.com` (Rate-limited)

## ✨ Features

- AI-powered email reply generation using Gemini Flash 2.0
- Multiple tone options (Formal, Friendly, Professional, etc.)
- REST API endpoints for integration
- Rate limiting (100 requests/minute)
- Spring Data JPA & Hibernate persistence
- Docker container support
- Request validation and error handling
- Cross-origin resource sharing (CORS) enabled

## 🛠️ Technologies

- **Backend**: Spring Boot 3.2.0, Java 21, Hibernate 6.4
- **AI Integration**: Google Gemini 2.0 Flash
- **Build Tools**: Maven 3.9.6, Docker 24.0
- **Hosting**: Vercel (Frontend), Render (Backend)

## 📦 Installation & Setup

### Prerequisites
- Java 21
- Maven 3.9+
- Gemini API key
- Docker (optional)

### 1. Clone Repository
```bash
git clone https://github.com/your-username/mail-genius.git
cd mail-genius
```
### 2. Configure Environment
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run with maven
```bash
mvn spring-boot:run
```

### 4. Docker build & run
```bash
docker build -t mail-genius .
docker run -p 8080:8080 mail-genius
```

## API Reference
### Base : https://mailgenius.onrender.com/api/email

# Generate Email Reply - README

## Overview

This application offers an API endpoint to generate email replies based on input parameters such as the message content and the desired tone. It is particularly helpful for automating professional or custom email responses.

## HTTP Endpoint

**Endpoint:**  
`POST /generate`

## Request Body

The request body should include the following parameters in JSON format:

- **message** *(string)*: The content or context of the email to which the reply is being generated.  
- **tone** *(string)*: The desired tone of the reply (e.g., Professional, Casual, etc.).

### Example Request

```json
{
  "message": "Request for project deadline extension",
  "tone": "Professional"
}
```
# Code Structure

## Controller Implementation

```bash
@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmail(emailRequest);
        return ResponseEntity.ok(response);
    }
}
```

