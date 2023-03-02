import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from './components/comon/Error'
function generatePage(name: string) {
  const components = () => require(`./pages/${name.toLowerCase()}`).default
  try {
    return React.createElement(components())
  } catch (error: any) {
    return <ErrorPage/>
  }
}
const PageRender = () => {
  const { page, slug } = useParams()
  let name: string = ''
  if (page) name = slug ? `${page}/[slug]` : `${page}`

  return generatePage(name)
}

export default PageRender