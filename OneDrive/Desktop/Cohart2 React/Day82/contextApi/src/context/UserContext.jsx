// import React from 'react'
// import { createContext } from 'react'
// export let UserDataContext= createContext()
// // sabse main yahi hai isse ne wo rights diye ki hum data globally manage kar paaye 
// const UserContext = ({children}) => {
//     const user="shri ji"
//   return (
//     <>
//     {/* matlab ab yaha se jo bhi data aap sabhi ko pahunchana chahte ho pahuncha do */}
//     <UserDataContext.Provider value={user}>
//         {children}
//     </UserDataContext.Provider>
//     </>
//   )
// }

// export default UserContext

// Working with big data array of 5 objects to see the context api usage
import React, { createContext } from 'react'
export const UserPostContext=createContext()
const posts = [
  {
    postId: 1,
    userId: 101,
    username: "john_doe",
    title: "My first post",
    content: "Hello everyone! This is my first post here.",
    likes: 12,
    comments: 3,
    createdAt: "2026-01-09T08:30:00Z"
  },
  {
    postId: 2,
    userId: 102,
    username: "sarah_98",
    title: "Travel Diaries",
    content: "Just returned from Bali and it was amazing!",
    likes: 45,
    comments: 10,
    createdAt: "2026-01-09T09:10:00Z"
  },
  {
    postId: 3,
    userId: 103,
    username: "coderboy",
    title: "Why I love JavaScript",
    content: "JS gives you superpowers on the web. Let me explain…",
    likes: 120,
    comments: 25,
    createdAt: "2026-01-09T09:45:00Z"
  },
  {
    postId: 4,
    userId: 104,
    username: "fitness_guru",
    title: "Morning Workout Routine",
    content: "Here’s my full guide to staying active every morning.",
    likes: 60,
    comments: 8,
    createdAt: "2026-01-09T10:05:00Z"
  },
  {
    postId: 5,
    userId: 105,
    username: "foodielife",
    title: "Best Pasta Recipe",
    content: "Sharing"
  }
]
const UserContext = ({children}) => {
  return (
    <>
    <UserPostContext.Provider value={posts}>
      {children}
    </UserPostContext.Provider>
    </>
  )
}

export default UserContext
