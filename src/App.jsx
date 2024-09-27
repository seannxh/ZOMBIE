import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  const [money, setMoney] = useState(100)

  const [team, setTeam] = useState([])

  const [strength, setStrength] = useState(0)

  const [agility, setaAgility] = useState(0)

  const [price, setPrice] = useState(0)

  const handleAddFighter = (zombie) => {
    if(money >= zombie.price){
      setMoney(money - zombie.price) 
      setTeam([...team, zombie]);
      const updateZombie = zombieFighters.filter(rz => rz.name !== zombie.name)
      setZombieFighters(updateZombie)
    } else {
        window.alert("Not Enough Money!")
      }
    }

    const handleRemovefighter = (zombie) => {
      const newRemovedTeam = team.filter(rf => rf.name !== zombie.name)
      setMoney(money + zombie.price)
      setTeam(newRemovedTeam)
      setZombieFighters([...zombieFighters, zombie])
    }

    const handleTeamStrength = () => {
      let totalStrength = 0
      for(let i = 0; i < team.length; i++){
        totalStrength += team[i].strength
      }
      setStrength(totalStrength)
    }

    const handleTeamAgility = () => {
      let totalAgility = 0
      for(let i = 0; i < team.length; i++){
        totalAgility += team[i].agility
      }
      setaAgility(totalAgility)
    }

    const handleTeamPrice = () => {
      let teamPrice = 0
      for(let i = 0; i < team.length; i++){
        teamPrice += team[i].price
      }
      setPrice(teamPrice)
    }

    useEffect(() => {
      handleTeamStrength();
      handleTeamAgility();
      handleTeamPrice();
    }, [team]);

    const updateTeam = team.map((t, index) => (
      <li key={index}>
        <p>{t.name}</p>
        <p>Price: {t.price}</p>
        <p>Strength: {t.strength}</p>
        <p>Agility: {t.agility}</p>
        <img src={t.img} alt={t.name}/>
        <button onClick={() => handleRemovefighter(t)}>Refund</button>
      </li>
    ))

  return (
    <>
      <div>
        <h1>Zombie Fighters!</h1>
            <h1>Team Stats:</h1>
            <h2>Money: {money}</h2>
            <h3>Strength: {strength}</h3>
            <h3>Agility: {agility}</h3>
            <h3>Total Price: {price}</h3>
            <h1>Your Team:</h1>
            <ul>
            {team.length === 0 ? "Please Pick a Team Member" : updateTeam }
            </ul>
        <h1>Available Team Members</h1>
          <ul>
            {zombieFighters.map((zombie, index) => (
              <li key={index}>
                <p>{zombie.name}</p>
                <p>Price: {zombie.price}</p>
                <p>Strength: {zombie.strength}</p>
                <p>Agility: {zombie.agility}</p>
                <img src={zombie.img} alt={zombie.name}/>
                <button onClick={() => handleAddFighter(zombie)}>Buy</button>
              </li>  
            ))}
          </ul> 
      </div>
    </>
  )
}
export default App
