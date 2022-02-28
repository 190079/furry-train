import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {Banner,Marginer} from '../../components/index';
import { Dots } from 'loading-animations-react';
import BannerImg from '../../assets/banner.svg';
const HomePageMainContainer = styled.nav`
    
`
const PageContainer = styled.nav`
    display: flex;
    width: 100%;
    justify-content: center;
`
const PageInsideContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 75%;
    @media (max-width:1000px){
        width: 98%;
        padding-left: 1rem;
    }

`
const BlogContainer = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    justify-content: center;

    &>img {
        margin-left: 1rem;
        width: 100px;
        border-radius: 8px;
    }

`
const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async () =>  await axios.get("http://127.0.0.1:1414/services").then((response) => {
        const resposeData = response.data
        setBlogs(resposeData)
    })
    useEffect(() => {
        setTimeout(fetchBlogs,7000)
    },[])
    console.log("blogs: ",blogs)

    return(
        <>
            <h3>Blogs</h3>
            <BlogContainer >
            {blogs.length === 0 ? <nav className="loader" /> : blogs.map(blog => <img className="boxshadow" src={blog.imageURL} alt={blog.Title}/>)}
            </BlogContainer>
        </>
    )
       
}

function HomePage() {
    const Items = {
        title: 'Dev Learner',
        image: BannerImg,
        desc: 'Hi! I’m Dev Learner, a website to learn Dev Ops tools. Each tool is described in detail, with the purpose and potential uses explained. Anyone working in a technical field might find this site useful — from developers to system administrators and beyond!',
        btnTitle: 'Learn More',
        btnLink: '#'
    }
    return (
        <HomePageMainContainer>
            <Banner item={Items} />
            <Marginer direction="vertical" margin="1rem" />
            <PageContainer>
                <PageInsideContainer>
                    <Blogs />
                </PageInsideContainer>
            </PageContainer>
            <Marginer direction="vertical" margin="1rem" />
        </HomePageMainContainer>
    )
}

export default HomePage
