import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../links";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom'

const HomePage = ({countries, setCountries}) => {
    const navigate = useNavigate()
    const [filteredCounties, setFilteredCounties] = useState([])
    
    const handleSearch = (search, sortBy) => {
        let data = [...countries]
        if(sortBy) {
            data = data.filter(c => c.region.includes(sortBy))
        }
        if(search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCounties(data)
    }
    
    useEffect(() => {
        if(!countries.length) {
            axios.get(ALL_COUNTRIES)
            .then(({data}) => setCountries(data))
            .catch((e) => console.log(e))
        }
    }, [])

    useEffect(() => {
        setFilteredCounties(countries)
    }, [countries])
    
  return (
    <>
        <Controls onSearch={handleSearch}/>
        <List>
          {
            filteredCounties.map(c => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population', 
                    discription: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region', 
                    discription: c.region,
                  },
                  {
                    title: 'Capital', 
                    discription: c.capital,
                  },
                ]
              }
              return <Card onClick={() => navigate(`/country/${c.name}`)} key={c.name} {...countryInfo}/>
            })
          }
        </List>
    </>
  )
}

export default HomePage
