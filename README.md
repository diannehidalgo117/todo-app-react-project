# Todo App

A responsive task management application built with React and Tailwind CSS. This is a **practice project** created to learn and demonstrate modern front-end development techniques. It features an intuitive interface with task creation, calendar integration, and progress statistics.

![Screenshot of Todo App](screenshot.png)

## About This Project

This Todo App was built as a learning exercise to practice:

- React component architecture and state management
- TypeScript type safety and interfaces
- Tailwind CSS for responsive styling
- Modern UI/UX design principles

While fully functional, this project is primarily for educational purposes rather than production use.

## Features

- ✅ Create, edit, and delete tasks
- 📅 Calendar integration for date-based task filtering
- 📊 Task statistics dashboard
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies

   ```bash
   yarn
   ```

3. Start the development server

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```text
src/
  ├── assets/        # Static assets like images
  ├── components/    # React components
  │   ├── AppLayout.tsx
  │   ├── CalendarView.tsx
  │   ├── Headers.tsx
  │   ├── TaskForm.tsx
  │   ├── TaskItem.tsx
  │   └── TaskList.tsx
  ├── styles/        # CSS and styling files
  └── App.tsx        # Main application component
```

## Technologies Used

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Frontend build tool
- [React Calendar](https://www.npmjs.com/package/react-calendar) - Calendar component

## Future Enhancements

- Dark/light mode toggle
- Task categories and tags
- Data persistence with backend integration
- Notifications and reminders
