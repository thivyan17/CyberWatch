# CyberWatch

CyberWatch is a modern cybersecurity Security Operations Center dashboard built with React. It allows users to upload and analyse security logs, detect suspicious activity, investigate incidents, and monitor security events through an interactive interface.

## Features

- Security operations dashboard
- CSV security-log upload
- Search and severity filtering
- Brute-force attack detection
- Incident investigation page
- Security activity chart
- Threat investigation modal
- Responsive dark-themed interface
- Multi-page navigation using React Router

## Screenshots

Screenshots will be added after the main application pages are completed.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- Chart.js
- CSS
- Git
- GitHub

## Project Structure

```text
CyberWatch
├── public
├── src
│   ├── components
│   ├── data
│   ├── layouts
│   ├── pages
│   ├── utils
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/thivyan17/CyberWatch.git
```

Move into the project folder:

```bash
cd CyberWatch
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If PowerShell blocks the npm command, use:

```powershell
npm.cmd run dev
```

Open the local address displayed in the terminal.

## How CyberWatch Works

1. The user uploads a CSV security-log file.
2. CyberWatch parses and displays the log records.
3. The application analyses failed-login events.
4. Repeated failed logins from the same IP address are identified as possible brute-force attacks.
5. Detected threats are converted into incidents for investigation.
6. The dashboard displays security statistics and activity charts.

## Sample CSV Format

```csv
timestamp,ipAddress,event,severity,status
2026-07-20 09:10:00,203.0.113.10,Failed Login,High,Blocked
2026-07-20 09:12:00,203.0.113.10,Failed Login,High,Blocked
2026-07-20 09:15:00,203.0.113.10,Failed Login,High,Blocked
2026-07-20 10:00:00,192.168.1.25,Successful Login,Low,Allowed
```

## Planned Improvements

- Express REST API
- MongoDB database
- User authentication with JWT
- Role-based access control
- Persistent security logs
- AI-generated incident summaries
- Real-time threat notifications
- Reports and analytics
- Online deployment

## Project Status

CyberWatch is currently under active development.

The React frontend, security-log analysis, threat detection, dashboard, and incident investigation features have been completed. Backend development is the next phase.

## Author

**Thivyan Thambirajah**

- GitHub: [thivyan17](https://github.com/thivyan17)