import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row title={'Popular'} fetchURL={requests.requestPopular}/>
        <Row title={'Up Coming'} fetchURL={requests.requestUpcoming}/>
        <Row title={'Latest'} fetchURL={requests.requestLatest}/>
        <Row title={'Top Rated'} fetchURL={requests.requestTopRated}/>

    </>
  )
}

export default Home