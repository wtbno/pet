import React from "react";
import { Box } from "@chakra-ui/core";

export default function Home() {
  return (
    <Box
      backgroundColor={"#1593"}
      display={"flex"}
      alignItems="center"
      justifyContent={"space-around"}
      width={"100%"}
      h={"100vh"}
    >
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        border={"1px solid"}
      >
        <img
          style={{
            width: "400px",
            height: "500px",
            left: "5rem",
            borderRadius: "10px",
          }}
          src="./Shen.jpeg"
        />
      </Box>

      <Box border={"1px solid"}>
        <img
          style={{
            width: "400px",
            height: "500px",
            left: "5rem",
            borderRadius: "10px",
          }}
          src="./tit.jpeg"
        />
      </Box>
      <Box border={"1px solid"}>
        {" "}
        <img
          style={{
            width: "400px",
            height: "500px",
            left: "5rem",
            borderRadius: "10px",
          }}
          src="./eti.jpeg"
        />
      </Box>
    </Box>
  );
}
