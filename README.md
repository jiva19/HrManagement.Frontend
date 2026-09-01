# HrManagement.Frontend

Angular frontend for an HR management platform — a login-protected admin tool for managing employee records (create, search, and delete), built as the client-facing half of a full-stack portfolio project.

Pairs with the backend API: [HrManagement.Api](https://github.com/jiva19/HrManagement.Api)

## Features

- **JWT-authenticated login**, with the token stored in `sessionStorage` and automatically attached to every outgoing request via a custom HTTP interceptor
- **Route guarding** — unauthenticated users are redirected to `/login` before ever reaching protected pages
- **Employee directory** with search by name and filtering by department
- **Add Employee** via a modal form, with a fixed department dropdown to keep search and stored data consistent
- **Delete Employee** with a confirmation modal to prevent accidental, irreversible deletions
- **Logout**, clearing the stored session and returning to the login screen

## Tech Stack

- **Angular** (standalone components, no NgModules)
- **RxJS** for HTTP communication (`Observable`-based service layer)
- **Angular Router** with a functional route guard (`CanActivateFn`)
- **Functional HTTP interceptor** (`HttpInterceptorFn`) for automatic Bearer token attachment
- Plain CSS (no external UI library) for styling

## Architecture

The app follows a clear separation of concerns:

```
src/app/
├── models/          # TypeScript interfaces matching backend DTOs
├── services/         # HTTP communication (AuthService, EmployeeService)
├── interceptors/     # Automatic JWT attachment on outgoing requests
├── guards/           # Route protection based on auth state
├── login/            # Login page
├── employee-list/     # Main employee table, search, and orchestration
├── add-employee-modal/    # Standalone form modal, communicates via @Output()
└── confirm-delete-modal/  # Standalone confirmation modal, communicates via @Output()
```

Modals are built as independent components that emit events rather than directly calling services themselves — the parent (`EmployeeListComponent`) owns all actual API calls and decides how to react to success or failure.

## Running Locally

```bash
npm install
npm start
```

Requires the [HrManagement.Api](https://github.com/jiva19/HrManagement.Api) backend running locally (default: `http://localhost:5074`) for authentication and data to function.

## Roadmap

This project is the foundation for an upcoming AI-powered test automation platform — using this app as a real target to demonstrate AI-driven test execution, evidence capture, and database-state verification.
