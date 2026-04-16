import React from 'react'

import Concern from "../components/concern/Concern"
import Overview from '../components/overview/Overview'
import Cards from '../components/cards/Cards'
import Spotlight from '../components/spotlight/Spotlight'
import Responsibility from '../components/responsibility/Responsibility'
import Trust from '../components/trust/Trust'
import MyJansavek from '../components/myjansavek/MyJansavek'
import Slider from '../components/slider/Slider'
import News from '../components/news/News'
import Navbar from './header/Navbar'
const Home = () => {
  return (
    <div>
<Navbar/>
<Overview/>
<Cards/>
<Spotlight/>
<Responsibility/>
<Trust/>
<MyJansavek/>
<Slider/>
<News/>
<Concern/>
    </div>
  )
}

export default Home
