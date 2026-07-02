import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

const activeUsers = [
  { name: "Martin", imagePath: "/img/martin.webp" }, 
  { name: "Justin", imagePath: "/img/justin.webp" },
  { name: "Aven", imagePath: "/img/aven.webp" },
  { name: "Nusret", imagePath: "/img/nusret.webp" }
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((user, index) => (
                  <Card key={index} variant="outlined" className={"card"}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={user.imagePath} alt={user.name} />
                      </AspectRatio>
                    </CardOverflow>
                    <CardOverflow variant="soft" className={"user-detail"}>
                      <Typography className={"name"}>{user.name}</Typography>
                    </CardOverflow>
                  </Card>
                ))
              ) : (
                <Box className="no-data">Active users not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}