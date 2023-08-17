import { Box, Link,  Button, Heading, Img ,Text} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowDown} from "react-icons/ai"
import { useColorMode } from '@chakra-ui/react'
import webDesigner from "../../assets/Images/19362653-removebg-preview.bc8cd4a747216ce123ce.png"
import ContainerBox from '../Container'
import CourseCard from '../CourseCard'


const movies = [
  {
    title: 'The Matrix', 
    year: '1999',
    rating: 'R',
    runtime: '2h 16min',
    gen: ['Action', 'Sci-Fi'],
    description: 'A computer hacker learns that what most people perceive as reality is actually a simulation created by machines.',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    cast: [
      {
        name: 'Keanu Reeves',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTcwNDk4MTAyMQ@@._V1_FMjpg_UX1000_.jpg'
      },
      {
        name: 'Laurence Fishburne',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzI1NjYwOF5BMl5BanBnXkFtZTYwMjY1MzY1._V1_FMjpg_UX1000_.jpg'
      },
      {
       name: 'Carrie-Anne Moss',
       image: 'https://m.media-amazon.com/images/M/MV5BMjE3MzA4NDEyNV5BMl5BanBnXkFtZTcwNzAxMTczMw@@._V1_FMjpg_UX1000_.jpg'
      }
    ]
  },
  
  {
    title: 'Inception',
    year: '2010', 
    rating: 'PG-13',
    runtime: '2h 28min',
    gen: ['Action', 'Adventure', 'Sci-Fi'],
    description: "A thief who steals secrets from people's subconscious through their dreams enlists the help of others for a dangerous heist.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    cast: [
      {
       name: 'Leonardo DiCaprio',
       image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg'
      },
      {
       name: 'Joseph Gordon-Levitt',
       image: 'https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_FMjpg_UX1000_.jpg'
      },
      {
        name: 'Ellen Page',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzIxMF5BMl5BanBnXkFtZTcwNDA4OTMwMw@@._V1_FMjpg_UX1000_.jpg'  
      }
    ]
  }
]
function Home() {
  const {colorMode} =  useColorMode()
    const flexBundle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }
  return (
    <>
    
   <Box minH={"100vh"} style={flexBundle} flexDirection={["column" , "row"]} padding={"2rem"} justifyContent={"start"} alignItems={["center", "start"]} >
    <Box display={"flex"} flexDir={"column"} alignItems={["center", "start"]} height={"33vh"} >
       <Heading textAlign={["center" , "start"]} w={"100%"} textTransform={"uppercase"}>Wellcome to <Text color={`${colorMode === "dark" ? "purple.200" : "purple.500"}`} display={"inline-block"}>My Service</Text></Heading>
       <Text textAlign={["center" , "start"]}   colorScheme={"purple"} marginTop={"4"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
       
       <Link href='/#latestCourse' >
      <Button colorScheme={"purple"} marginTop={"5"}>Get Now <AiOutlineArrowDown style={{margin : "0 0.5rem"}}/> </Button>
      </Link> 
    </Box > 
    
    <Box >
   <Img   src={webDesigner}></Img>
        </Box>
   </Box>
   <ContainerBox>
   {
    movies.map((item , index) =>(
      <CourseCard key={index} movie={item} />
    ))
   }
   </ContainerBox>
   </>
  )
}

export default Home