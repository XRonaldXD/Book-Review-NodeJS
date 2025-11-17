# 📚 Book Review NodeJS

A full-stack web application for managing book reviews with Google OAuth 2.0 authentication. Built with Node.js, Express, MongoDB, and Passport.js.

## 🌐 Live Demo

**Cloud URL:** [Add your deployed URL here]

## ✨ Features

- 🔐 **Google OAuth 2.0 Authentication** - Secure login with Google accounts
- 📖 **Book Management** - Add, view, update, and delete books
- ⭐ **Review System** - Write and manage reviews for books
- 🎨 **Modern Dark Theme UI** - Sleek and responsive design
- 🔒 **Protected Routes** - Authentication-required endpoints
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## 📁 Project Structure

```
Book-Review-NodeJS/
├── config/                  # Configuration files
│   ├── database.js         # Database configuration
│   └── passport.js         # Passport OAuth strategy setup
├── controllers/            # Business logic
│   ├── authController.js   # Authentication handlers
│   ├── bookController.js   # Book CRUD operations
│   └── reviewController.js # Review CRUD operations
├── models/                 # MongoDB schemas
│   ├── Book.js            # Book schema definition
│   └── Review.js          # Review schema definition
├── routes/                 # API endpoints
│   ├── auth.js            # Authentication routes
│   ├── books.js           # Book routes
│   └── reviews.js         # Review routes
├── view/                   # Frontend HTML pages
│   ├── login.html         # Google OAuth login page
│   ├── profile.html       # User profile page
│   ├── index.html         # Home page
│   ├── book-details.html  # Book detail view
│   └── add-review.html    # Add review form
├── .env                    # Environment variables (not in repo)
├── .env.example           # Environment template
├── index.js               # Main application entry point
└── package.json           # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Passport.js with Google OAuth 2.0
- **Frontend:** HTML5, CSS3, Bootstrap 5
- **Icons:** Bootstrap Icons
- **Session Management:** Express-session

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation
- Google Cloud Console project with OAuth 2.0 credentials

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/XRonaldXD/Book-Review-NodeJS.git
cd Book-Review-NodeJS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# MongoDB Connection
URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/book-review?retryWrites=true&w=majority

# Server Configuration
PORT=3000
NODE_ENV=development

# Session Secret
SESSION_SECRET=your-super-secret-session-key-here

# Google OAuth 2.0 Credentials
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials:
   - **Application type:** Web application
   - **Authorized redirect URIs:** `http://localhost:3000/auth/google/callback`
5. Copy Client ID and Client Secret to `.env`

### 5. Start the Application

**Development mode with auto-reload:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📖 API Documentation

### Authentication Routes (`/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/auth/google` | Initiate Google OAuth |
| GET | `/auth/google/callback` | OAuth callback handler |
| GET | `/auth/logout` | Logout user |
| GET | `/auth/profile` | Get user profile |
| GET | `/auth/me` | Get current user info |
| GET | `/auth/failure` | Authentication failure |

### Book Routes (`/books`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/books` | Create new book |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get specific book |
| PUT | `/books/:id` | Update book |
| DELETE | `/books/:id` | Delete book |

### Review Routes (`/reviews`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/reviews` | Create new review |
| GET | `/reviews` | Get all reviews |
| GET | `/reviews/:id` | Get specific review |
| PUT | `/reviews/:id` | Update review |
| DELETE | `/reviews/:id` | Delete review |

## 🎯 Usage Guide

### Step 1: Login
1. Navigate to `http://localhost:3000/login`
2. Click "Continue with Google"
3. Select your Google account
4. Grant permissions

### Step 2: Manage Books
- **Add Book:** POST to `/books` with JSON body:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A classic novel...",
    "publishedDate": "1925-04-10"
  }
  ```

### Step 3: Add Reviews
- **Create Review:** POST to `/reviews` with JSON body:
  ```json
  {
    "rating": 5,
    "comment": "Excellent book!"
  }
  ```

### Step 4: View Data
- Access `/books` to see all books
- Access `/reviews` to see all reviews

## 🔐 Security Features

- ✅ Environment variables for sensitive data
- ✅ Session-based authentication
- ✅ OAuth 2.0 secure login
- ✅ Protected routes with middleware
- ✅ HTTPS ready for production

## 🌍 Deployment

### Deploy to Render/Heroku/Railway

1. Update `GOOGLE_CALLBACK_URL` to your production URL
2. Set environment variables in hosting platform
3. Ensure MongoDB Atlas whitelist includes `0.0.0.0/0`
4. Deploy from GitHub repository

### Environment Variables for Production

Make sure to set all variables from `.env` in your hosting platform's dashboard.

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**XRonaldXD**
- GitHub: [@XRonaldXD](https://github.com/XRonaldXD)
- Repository: [Book-Review-NodeJS](https://github.com/XRonaldXD/Book-Review-NodeJS)

---

⭐ If you found this project helpful, please give it a star!