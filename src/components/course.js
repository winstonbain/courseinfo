import React from 'react'

const Header = ({ coursename }) => <h1>{coursename}</h1>
const Part = ({ name, exercises }) => <p>{name} {exercises}</p>


const Course = ({ course }) => {
  const {parts} = course
  const {name}= course

  let initialvalue=0
  const total = parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s + p.exercises 
  }, 0)
  console.log('this is the', {total})

  //const courses = parts.map(part => <Part key={part.id} name={part.name} />)
  const  courses = parts.map(plart => <Part key= {plart.id} name={plart.name} exercises={plart.exercises}  />)
  return (
    <div>
      <Header coursename= {name}/>
      <ul>{courses}</ul>
      <ul>Total exercises: {total}</ul>
    </div>
  )
}

export default Course

/* const Header = ({ info }) =>{
  return(
    <h1>
      {info}
    </h1>
  )
}

const Part = ({ name, exercises }) =>{
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Course = ({ course }) =>{
  const {name, parts} = course
  const  courses = parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}  />)
  return(
    <div>
      <Header info={name} />
      {courses}
    </div>
  )
}*/