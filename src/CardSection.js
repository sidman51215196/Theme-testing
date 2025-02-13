import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";

export default function CardSection() {
  const cardData = [
        {
        title: "Web Development",
        subtitle: "by Code Academy",
        description: "Master HTML, CSS, JavaScript, and frameworks like React.",
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        },
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
        }
  ];

  return (
    <Container sx={{ marginTop: 4 , marginBottom: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, padding: 2 }}>
              <CardMedia sx={{ height: 180, borderRadius: 2 }} image={card.image} title={card.title} />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.subtitle}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
