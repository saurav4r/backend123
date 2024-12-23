const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Add CORS headers manually as a fallback
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());


const candidates = [
  { id: 1, name: 'Saurav Kumar', skills: 'React, Node.js', yearsOfExperience: 5 },
  { id: 2, name: 'Gaurav Mishra', skills: 'Python, Django', yearsOfExperience: 3 },
  { id: 3, name: 'Golu Sharma', skills: 'Java, Spring Boot', yearsOfExperience: 7 },
  { id: 4, name: 'Kishan Yadav', skills: 'React, Redux', yearsOfExperience: 2 },
  { id: 5, name: 'Abhay Verma', skills: 'C++, Data Structures', yearsOfExperience: 4 },
  { id: 6, name: 'Ravi Kumar', skills: 'HTML, CSS, JavaScript', yearsOfExperience: 1 },
  { id: 7, name: 'Rahul Mehta', skills: 'Angular, TypeScript', yearsOfExperience: 6 },
  { id: 8, name: 'Pankaj Singh', skills: 'Ruby, Rails', yearsOfExperience: 3 },
  { id: 9, name: 'Vikas Gupta', skills: 'Go, Kubernetes', yearsOfExperience: 8 },
  { id: 10, name: 'Amit Sharma', skills: 'SQL, PostgreSQL', yearsOfExperience: 2 },
  { id: 11, name: 'Deepak Jain', skills: 'Swift, iOS Development', yearsOfExperience: 5 },
  { id: 12, name: 'Arun Kumar', skills: 'Kotlin, Android Development', yearsOfExperience: 3 },
  { id: 13, name: 'Kunal Thakur', skills: 'PHP, Laravel', yearsOfExperience: 4 },
  { id: 14, name: 'Rajesh Sinha', skills: 'ASP.NET, C#', yearsOfExperience: 6 },
  { id: 15, name: 'Manoj Tiwari', skills: 'Perl, Shell Scripting', yearsOfExperience: 7 },
  { id: 16, name: 'Nikhil Chauhan', skills: 'Scala, Big Data', yearsOfExperience: 2 },
  { id: 17, name: 'Prakash Jha', skills: 'Rust, Systems Programming', yearsOfExperience: 1 },
  { id: 18, name: 'Ajay Sharma', skills: 'Flutter, Dart', yearsOfExperience: 5 },
  { id: 19, name: 'Rohit Verma', skills: 'R, Statistical Analysis', yearsOfExperience: 3 },
  { id: 20, name: 'Karan Patel', skills: 'Matlab, Simulink', yearsOfExperience: 4 },
  { id: 21, name: 'Sanjeev Yadav', skills: 'Objective-C, iOS Development', yearsOfExperience: 6 },
  { id: 22, name: 'Vikram Choudhary', skills: 'F#, Functional Programming', yearsOfExperience: 7 },
  { id: 23, name: 'Umesh Pandey', skills: 'Haskell, Functional Programming', yearsOfExperience: 2 },
  { id: 24, name: 'Satish Singh', skills: 'Elixir, Phoenix Framework', yearsOfExperience: 1 },
  { id: 25, name: 'Ashish Joshi', skills: 'Blockchain, Solidity', yearsOfExperience: 5 },
  { id: 26, name: 'Vivek Das', skills: 'React Native, Mobile Development', yearsOfExperience: 3 },
  { id: 27, name: 'Akhil Jain', skills: 'Unity, Game Development', yearsOfExperience: 4 },
  { id: 28, name: 'Lokesh Singh', skills: 'Unreal Engine, Game Development', yearsOfExperience: 6 },
  { id: 29, name: 'Ankit Gupta', skills: 'C, Embedded Systems', yearsOfExperience: 7 },
  { id: 30, name: 'Siddharth Reddy', skills: 'Python, Machine Learning', yearsOfExperience: 2 }
];


app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
