import http from "http";

const users = [
  { id: 1, name: "Fahad", salary: "4M" },
  { id: 2, name: "Fahad", salary: "4M" },
  { id: 3, name: "Fahad", salary: "4M" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log("request Initiated");

  if (url === "/users" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(users));
  }

  res.statusCode = 200;
  res.end("Fity Mun");
});

server.listen(3002, () => {
  console.log("server is running");
});

// import os from "os";
// import fs from "fs"
// console.log( `cpu cores : ${os.cpus().length}`);

// console.log("Stat")
// // const data = fs.readFileSync("C:/Users/S.M/Desktop/Lec_25-Node/sample.tsx","utf-8")
// fs.appendFileSync("new_file.txt", `created new file`)
// // console.log(data)
// console.log("Read Successfully")
