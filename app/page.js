'use client'
import getStripe from '@/utils/get-stripe';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, Card, CardContent } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Head from 'next/head';

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }

  return (
    <Container maxWidth='lg'>
      <Head>
        <title>Flashcard Saas</title>
        <meta name='description' content="Create flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{mt: 2}}>
          Learn More
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#00796b', textAlign: 'center' }}>Features</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Easy Text Input</Typography>
                <Typography>
                  Simply input your text and let our software do the rest. Creating 
                  flashcards has never been easier.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Smart Flashcards</Typography>
                <Typography>
                  Our AI intelligently breaks down your text into concise 
                  flashcards, perfect for studying.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Accessible Anywhere</Typography>
                <Typography>
                  Access your flashcards from any device, at any time. Study on the 
                  go with ease.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#00796b' }}>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>
                Basic
              </Typography>
              <Typography variant='h6' gutterBottom>
                $5 / month
              </Typography>
              <Typography>
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>
                Pro
              </Typography>
              <Typography variant='h6' gutterBottom>
                $10 / month
              </Typography>
              <Typography>
                Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                Choose Pro
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>


)
}
