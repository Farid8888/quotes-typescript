import React from 'react'
import Layout from './components/Layout/Layout'
import {Routes,Route,Navigate} from 'react-router'
import QuotesPage from './components/pages/QuotesPage'
import NewQuotePage from './components/pages/NewQuotePage'
import QuotesDetailsPage from './components/pages/QuotesDetailsPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/quotes' element={<QuotesPage/>}/>
        <Route path='/new-quote' element={<NewQuotePage/>}/>
        <Route path='/quotes/:id' element={<QuotesDetailsPage/>}/>
        <Route path='/' element={<Navigate to={'/quotes'}/>}/>
      </Routes>
    </Layout>
  )
}
