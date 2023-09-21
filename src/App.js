import FeaturedProjectsList from 'components/FeaturedProjectsList'
import Introduction from 'components/Introduction'
import Tech from 'components/Tech'
import React from 'react'

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <FeaturedProjectsList />
    </div>
  )
}
