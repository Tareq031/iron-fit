💪 iron-fit — Workout Library

Train with intent. Log every set.

iron-fit is a dark-themed workout library built with Next.js, TypeScript, and Tailwind CSS. It helps users explore workouts, view exercise details, create a daily workout plan, and save exercises for later.

✨ Features

- 🏋️ Workout Library: Browse exercises fetched from a REST API.
- 📋 Workout Details: View exercise images, descriptions, muscle groups, equipment, difficulty, sets, reps, duration, calories, ratings, and instructions.
- ➕ Today's Plan: Add exercises to a daily workout plan.
- 🔖 Save for Later: Save exercises for quick access later.
- 🔔 Toast Notifications: Get feedback when adding, saving, or removing exercises.
- 🔢 Navbar Counters: Display the number of planned and saved exercises.
- 🚫 Duplicate Prevention: Prevent duplicate exercises in the same list.
- 💾 Local Storage: Preserve workout selections across page reloads.
- 📱 Responsive Design: Adapt the interface to mobile, tablet, and desktop screens.
- 🌙 Dark UI: Enjoy a clean, modern interface with a bright accent color.

🛠️ Technologies Used

- Next.js — React framework and application routing
- React.js — Reusable UI components
- TypeScript — Type-safe development
- Tailwind CSS — Responsive styling
- REST API — Workout data integration
- React Context API — Shared workout state management
- localStorage — Client-side data persistence
- React Toastify — Toast notifications
- Git & GitHub — Version control






📁 Main Project Structure

src/
└── app/
    ├── component/
    │   ├── button/
    │   │   ├── ReadButton.tsx
    │   │   └── SaveButton.tsx
    │   ├── Banner.tsx
    │   ├── ExerciseCard.tsx
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── context/
    │   └── ExerciseContext.tsx
    ├── MyPlan/
    │   └── page.tsx
    ├── Workouts/
    │   ├── page.tsx
    │   └── [id]/
    │       └── page.tsx
    ├── type/
    │   └── ironstype.ts
    ├── layout.tsx
    ├── page.tsx
    

🎯 Project Goals

iron-fit was developed to practice building a modern web application using Next.js, reusable components, API integration, shared state management, responsive design, and client-side data persistence.

👨‍💻 Author

Tarequl Islam

CSE Student | Full Stack Developer

---


