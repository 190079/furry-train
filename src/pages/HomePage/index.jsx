import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {Banner,Marginer,ServiceCard} from '../../components/index';
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
    
    @media (max-width:1200px){
        width: 98%;
    }

`
const ChidComponentContainer = styled.nav`
    display: flex;
    flex-direction: column;
    color: var(--link);
    ${'' /* padding: 2rem 0 2rem 0; */}
    &>h3{
        align-self: flex-start;
        font-weight: bold;
    }
    @media (max-width:992px) {
        display: flex;
        &>h3{
            align-self: center;
            font-weight: bold;
            color: var(--link);
        }
    }

`
const BlogContainer = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem 0 1rem 0;
    align-items: center;
    justify-content: center;
    &>img {
        border: 1px solid var(--light-text);
        margin-left: 1rem;
        width: 120px;
        height: 120px;
        border-radius: 8px;

    }
    
    &>img:hover {
        transition: all 0.3s;
        transform: scale(1.1, 1.1);
        box-shadow: 2px 2px 2px 2px var(--light-text);
    }
    .darkmode  &>img {
        border: 1px solid var(--link);

    }
    .darkmode &>img:hover {
        box-shadow: 2px 2px 2px 2px var(--link);

    }
    @media (max-width: 992px) {
        &>img {
            margin-bottom: 1rem;
        }
    }
    
`
const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async () =>  await axios.get("http://127.0.0.1:1414/services").then((response) => {
        const resposeData = response.data
        setBlogs(resposeData)
    })
    useEffect(() => {
        setTimeout(fetchBlogs,5000)
    },[])
    console.log("blogs: ",blogs)

    return(
        <ChidComponentContainer>
            <h3>Blogs</h3>
            <Marginer direction="vertical" margin="5px" />
            <BlogContainer >
            {blogs.length === 0 ? <nav className="loader" /> : blogs.map(blog => <img src={blog.imageURL} alt={blog.Title}/>)}
            </BlogContainer>
        </ChidComponentContainer>
    )
       
}

const Projects = () => {
  const [projects,setProjects] = useState([]);
  const fetchProjects = async () => await axios.get('http://127.0.0.1:1414/projects').then((response) =>{
      const responseData = response.data
      setProjects(responseData)
  })
  useEffect(() => {
    setTimeout(fetchProjects,5000)
  },[])
  console.log("Projects: ",projects)
  return(
  <ChidComponentContainer>
    <h3>Projects</h3>
    <Marginer direction="vertical" margin="5px" />
    <BlogContainer className="">
    {projects.length === 0 ? <nav className="loader" /> : projects.map(project => <ServiceCard Title={project.Title} imageURL={project.imageURL} desc={project.desc} link={project.link} />)}
    </BlogContainer>
</ChidComponentContainer>)
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
                    <Projects />
                </PageInsideContainer>
            </PageContainer>
            <Marginer direction="vertical" margin="1rem" />
        </HomePageMainContainer>
    )
}

export default HomePage
