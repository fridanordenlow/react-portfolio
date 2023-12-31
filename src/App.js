import Contact from 'components/Contact'
import FeaturedProjectsList from 'components/FeaturedProjectsList'
import Introduction from 'components/Introduction'
import Skills from 'components/Skills'
// import Tech from 'components/Tech'
import React from 'react'

export const App = () => {
  return (
    <div>
      <Introduction />
      <Skills />
      <FeaturedProjectsList />
      <Contact />
    </div>
  )
}
