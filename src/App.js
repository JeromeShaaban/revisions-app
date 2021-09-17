import { React, useEffect, useState} from "react";
import './App.css';
import Cards from "./components/card";
import axios from 'axios';
import Form from './components/Form'

const fakeList = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    personName: "Name 1",
    description: "Desc 1", 
    skills : [
      {
        name: "Skills 1 A 1",
        vote: "Vote 1 A 1"
      }
    ]
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    personName: "Name 2",
    description: "Desc 2", 
    skills : [
      {
        name: "Skills 2 A 2",
        vote: "Vote 2 A 2"
      }
    ]
  },
  {
    avatar: "https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg",
    personName: "Name 3",
    description: "Desc 3", 
    skills : [
      {
        name: "Skills 3 A 3",
        vote: "Vote 3 A 3"
      }
    ]
  },
  {
    avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    personName: "Name 4",
    description: "Desc 4", 
    skills : [
      {
        name: "Skills 4 A 4",
        vote: "Vote 4 A 4"
      }
    ]
  }
]

function App() {

  const [datas, setDatas ] = useState([])
  const [formData , setFormData] = useState({
    personName: "",
    description: "",
    avatar:"",
    skills: []
  })

  const getDatas = async () => {
    try {
      const datas = await axios.get("http://61f3-2a04-cec0-1167-55b5-c162-8ab4-c8d4-15b5.ngrok.io/api/v1/users").then(r => setDatas(r.data))
      return datas 
    } catch (error) {
      setDatas(fakeList)
    }
  }
    
  useEffect(() =>{
    getDatas()
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://61f3-2a04-cec0-1167-55b5-c162-8ab4-c8d4-15b5.ngrok.io/api/v1/users", formData).then(r => console.log(r)).catch(err => console.log(err))
  }

  

if(datas.length === 0) return <div>Loading ...</div>

  return (
    <div className="cards-container">
      {datas.map(person => {
        return <Cards 
        person= {person}    
        //avatar={person.avatar}
            //personName={person.personName}
            //description={person.description}
            //skills={person.skills}
          />
      })}

    <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
    </div>
  );
}

export default App;
