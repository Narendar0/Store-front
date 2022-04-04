import { Typography,Button ,Box} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
   <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
          <Button
           LinkComponent={Link}
            to="/books" 
          sx={{ marginTop : 10 }}
           variant="contained">
              <Typography variant='h3'>View All Products</Typography>
          </Button>
      </Box>
<h2 align="center">Welcome To Book Store App</h2>
      
    <p align="center">Books play a quintessential role in every student’s 
      life by introducing them to a world of imagination,
       providing knowledge of the outside world, improving
        their reading, writing and speaking skills as well 
        as boosting memory and intelligence. The importance 
        of books in our life cannot be undermined for they 
        not only help in broadening our horizons but also act as doorways
         of connecting us with the world around us. 
         They function as survival kits, they influence us
          and leave an impact on us. Want to know the benefits
           of books and the importance of reading? Curious about
            how books impact our lives? Read this blog to know 
            all about the importance of books in a student’s life,
             essays on importance of reading books, quotes and more!</p>
           <p  align="center">Books are our best friends.
Books illuminate your imagination.
Books help you form your own unique perspective of the world around you.
Books build confidence.
Books help you grow mentally and emotionally.
Books enhance your vocabulary.
Books help you learn new languages.
Books inculcate analytical skills in you.
Books are therapeutic and offer wonderful recluse.
Books impart you with crucial life lessons.
Books sharpen your ingenuity.
Books make students intelligent.
Books improve memory.
Books relieve the stress of students.
Books improve your writing skills.
Books introduce us to things and perspectives.
Books help in self-improvement.
Reading books improve your communication skills.
Books record history and spread awareness.
Reading is an excellent hobby.</p>
           
           
  </div>
  )
}

export default Home
