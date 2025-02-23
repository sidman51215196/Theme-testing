import { Box, Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";

export default function Card2Section({ isDarkMode }) {
  const cardData = [
    
    {
      title: "Cyber Security",
      subtitle: "by SecureTech",
      description: "Learn about ethical hacking, network security, and encryption.",
      image: "https://images.pexels.com/photos/593579/pexels-photo-593579.jpeg",
    },
    {
      title: "Cloud Computing",
      subtitle: "by Cloud Masters",
      description: "Explore AWS, Azure, and Google Cloud fundamentals.",
      image: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg",
    },
    {
        title: "Programming Blogs",
        subtitle: "by Semaphore",
        description: "Checkout the latest blogs on Semaphore. Semaphore provides the best CI/CD solutions.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      },
      {
        title: "Frontend Development",
        subtitle: "by Dev Community",
        description: "Explore the latest trends in frontend development and enhance your web skills.",
        image: "https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg",
      },
      {
        title: "Machine Learning",
        subtitle: "by AI Hub",
        description: "Learn about AI, neural networks, and machine learning applications.",
        image: "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg",
      },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: isDarkMode
          ? "url(https://images.pexels.com/photos/4041736/pexels-photo-4041736.jpeg)"
          : "url(https://images.pexels.com/photos/4041736/pexels-photo-4041736.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  padding: 2,
                  backdropFilter: "blur(10px)",
                  backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                <CardMedia sx={{ height: 180, borderRadius: 2 }} image={card.image} title={card.title} />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5, opacity: 0.8 }}>{card.subtitle}</Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
