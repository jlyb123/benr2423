const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Azure injects PORT

app.get('/', (req, res) => {
    res.send('Hello World - Fixed!'); // Explicit response
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`); // Verify in Azure logs
});