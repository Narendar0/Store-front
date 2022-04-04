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
           
           </br>
           <h1>Advantages of books &  the importance of books in our life:</h1> 
           </br>

<p  align="center">Books are our best friends.</p>
<p  align="center">Books illuminate your imagination.</p>
<p  align="center">Books help you form your own unique perspective of the world around you.</p>
<p  align="center">Books build confidence.</p>
<p  align="center">Books help you grow mentally and emotionally.</p>
<p  align="center">Books enhance your vocabulary.</p>
<p  align="center">Books help you learn new languages.</p>
<p  align="center">Books inculcate analytical skills in you.</p>
<p  align="center">Books are therapeutic and offer wonderful recluse.</p>
<p  align="center">Books impart you with crucial life lessons.</p>
<p  align="center">Books sharpen your ingenuity.</p>
<p  align="center">Books make students intelligent.</p>
<p  align="center">Books improve memory.</p>
<p  align="center">Books relieve the stress of students.</p>
<p  align="center">Books improve your writing skills.</p>
<p  align="center">Books introduce us to things and perspectives.</p>
<p  align="center">Books help in self-improvement.</p>
<p  align="center">Reading books improve your communication skills.</p>
<p  align="center">Books record history and spread awareness.</p>
<p  align="center">Reading is an excellent hobby.</p>
           
  </div>
  )
}

export default Home
