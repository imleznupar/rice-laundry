# Laundry@Rice

A web application designed to provide Rice students real-time access to the availability of laundry rooms on campus.

## Requirements

The following are required:
* [Create React App](https://github.com/facebook/create-react-app)

## Usage

1. In the project directory, run: `npm start`
2. Open http://localhost:3000 to view it in your browser.

## How it works
#### Frontend
The frontend was created using React JS that interacts with Firebase as the database.
#### Database
In the database, two collections are stored, machine and log. Each machine will have its own unique id, the college it belongs to, whether its a washer or a dryer, and that status, which can be available, in use, or broken. And for log, information about the college, time, and from which machine moved to which machine is recorded.

## To-do List
- [ ] Implement timers
- [ ] Implement user logins to better track your clothes
- [ ] Automatically update machine status
- [ ] Use data for AI that can predict when laundry room will be busiest


## Key Learnings
* React Apps
* Routing
* Firebase

## Acknowledgements
* This project was made for [HackRice 13](https://devpost.com/software/laundry-rice)

For further inquiries, please contact jasminelu23@gmail.com
