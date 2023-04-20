import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Hero from '@/components/Hero/Hero'
import Article from '@/components/article/Article'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Article></Article>
      <Footer></Footer>
    </div>
  )
}
