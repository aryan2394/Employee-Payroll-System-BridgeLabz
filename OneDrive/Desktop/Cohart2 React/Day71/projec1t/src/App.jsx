import React from 'react'
import Card from "./components/Card.jsx"
const App = () => {
  const users = [
  {
    username: "shriji_01",
    name: "Shri Ji",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    description: "Frontend developer & UI enthusiast",
    posts: 120,
    followers: 2450,
    following: 180,
  },
  {
    username: "anmol_dev",
    name: "Anmol Kumar",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    description: "React & Tailwind CSS learner",
    posts: 89,
    followers: 1320,
    following: 210,
  },
  {
    username: "code_with_riya",
    name: "Riya Sharma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Full-stack developer | JavaScript",
    posts: 200,
    followers: 5420,
    following: 300,
  },
  {
    username: "rohit.codes",
    name: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description: "Backend engineer | Node.js",
    posts: 156,
    followers: 2980,
    following: 190,
  },
  {
    username: "design_by_neha",
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "UI/UX designer | Figma lover",
    posts: 98,
    followers: 4120,
    following: 275,
  },
  {
    username: "aman.tech",
    name: "Aman Singh",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Software engineer | Problem solver",
    posts: 134,
    followers: 1870,
    following: 160,
  },
  {
    username: "kavya_creates",
    name: "Kavya Mehta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Content creator | Tech reels",
    posts: 320,
    followers: 10400,
    following: 540,
  },
  {
    username: "dev_arjun",
    name: "Arjun Patel",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    description: "MERN stack developer",
    posts: 178,
    followers: 3560,
    following: 220,
  },
  {
    username: "priya.codes",
    name: "Priya Malhotra",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    description: "Java & DSA enthusiast",
    posts: 145,
    followers: 2710,
    following: 195,
  },
  {
    username: "rahul_ui",
    name: "Rahul Khanna",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description: "Frontend UI specialist",
    posts: 210,
    followers: 4890,
    following: 310,
  },
];
  return (
    <>
    <div className="flex gap-[80px] flex-wrap  bg-blue-200">
    {users.map((obj,index)=>
    {
      return <Card key={index} object={obj}/>
    })}
    </div>
    </>
  )
}

export default App 
