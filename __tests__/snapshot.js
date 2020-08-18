import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'
import About from '../pages/about'
import Lapidaire from '../pages/lapidaire'
import Therapeute from '../pages/therapeute'
import Developpeur from '../pages/portfolio'
import BlogPage from '../pages/blogsPage'
import BlogList from '../pages/blogs'

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders about page unchanged', () => {
  const treePort = renderer.create(<About />).toJSON()
  expect(treePort).toMatchSnapshot()
})

it('renders lapidairy page unchanged', () => {
  const treeLap = renderer.create(<Lapidaire />).toJSON()
  expect(treeLap).toMatchSnapshot()
})

it('renders therapeute page unchanged', () => {
  const treether = renderer.create(<Therapeute />).toJSON()
  expect(treether).toMatchSnapshot()
})

it('renders developpeur page unchanged', () => {
  const treedev = renderer.create(<Developpeur />).toJSON()
  expect(treedev).toMatchSnapshot()
})

it('renders BlogPage page unchanged', () => {
  const treeBlogPage = renderer.create(<BlogPage />).toJSON()
  expect(treeBlogPage).toMatchSnapshot()
})

it('renders BlogList page unchanged', () => {
  const treeBlogList = renderer.create(<BlogList />).toJSON()
  expect(treeBlogList).toMatchSnapshot()
})


