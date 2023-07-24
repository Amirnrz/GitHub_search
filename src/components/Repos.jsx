// library imports
import styled from 'styled-components'
import { useContext } from 'react'

// file imports
import { Pie3D,Bar3D, Doughnut2D, Column3D } from './charts/index'
import { GithubContext } from '../context/context'
import { device } from '../styles'

// main component
const Repos = () => {
  const { repos } = useContext(GithubContext)

  let languages = repos.reduce((total,{ language,stargazers_count })  => {
    if(!language) return total;

    if(!total[language]) {
      total[language] = {
        label:language,
        value:1,
        stars: stargazers_count
      }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count
      }
    }

    return total
  },{})

  const mostUsedlanguages = Object.values(languages)
    .sort((a,b) => b.value - a.value)
    .slice(0,5)

  const mostPopular = Object.values(languages).sort((a,b) => {
    return b.stars - a.stars
  }).map(item => {
    return  {...item, value:item.stars}
  }).slice(0,5)

  let { stars,forks } = repos.reduce((total,item) => {
    const {stargazers_count,name,forks} = item;
    total.stars[stargazers_count] = {label:name,value:stargazers_count}
    total.forks[forks] = {label:name,value:forks}
    return total
  },{
    stars:{},
    forks:{}
  })

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  const chartData = [
    {
      label:"HTML",
      value:'13'
    },
    {
      label:"CSS",
      value:'160'
    },
    {
      label:"Javascript",
      value:'80'
    },
  ]

  return (
    <RepoWrapper>
      <div>
        <Pie3D data={mostUsedlanguages}/>
      </div>
      <div>
        <Column3D data={stars} />
      </div>
      <div>
        <Doughnut2D data={mostPopular}/>
      </div>
      <div>
        <Bar3D data={forks} />
      </div>
    </RepoWrapper>
  )
}

const RepoWrapper = styled.section`
  width: 95%;
  border-radius: 10px;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }

  div {
    /* height: 330px; */
    width: auto;
    border-radius: 10px;
    overflow: auto;
    box-shadow: 0px 0px 10px rgba(0,0,0,.2);

    @media ${device.mobileL} {
      /* width: 100%; */
    }

  }

`

export default Repos
