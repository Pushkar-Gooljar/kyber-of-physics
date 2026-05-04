<%*
// Import the Node.js File System module to read local files
const fs = require('fs');

// 1. Prompt the user for the input
const userInput = await tp.system.prompt('Enter ID (e.g., "w25 12 13" OR "9702_w25_qp_12_q13")');

if (userInput) {
    const cleanInput = userInput.trim();
    
    let seriesYear, paper, question;
    let isValid = false;
    
    // 2. Check for the long format: 9702_w25_qp_14_q5
    // This regex looks for "9702_", then letters/numbers, "_qp_", numbers, "_q", numbers
    const longFormatRegex = /^9702_([a-zA-Z]\d{2})_qp_(\d{1,2})_[qQ](\d+)$/;
    const match = cleanInput.match(longFormatRegex);
    
    if (match) {
        // Extracted from long format
        seriesYear = match[1].toLowerCase(); // e.g., w25
        paper = match[2];                    // e.g., 14
        question = match[3];                 // e.g., 5
        isValid = true;
    } else {
        // 3. Check for the short space-separated format: w25 14 5
        const parts = cleanInput.split(/\s+/);
        if (parts.length === 3) {
            seriesYear = parts[0].toLowerCase(); // e.g., w25
            paper = parts[1];                    // e.g., 14
            question = parts[2];                 // e.g., 5
            isValid = true;
        }
    }
    
    // 4. If either format was successfully parsed, proceed
    if (isValid) {
        // Parse series and year for the alt text
        const syMatch = seriesYear.match(/^([msw])(\d{2})$/);
        let monthName = seriesYear;
        let fullYear = "";
        
        if (syMatch) {
            const s = syMatch[1];
            const y = syMatch[2];
            const monthMap = { 'm': 'March', 's': 'May', 'w': 'Nov' };
            
            monthName = monthMap[s];
            fullYear = "20" + y; // converts "25" to "2025"
        }
        
        // Read the JSON file to get the answer
        const jsonPath = "C:\\data\\9702\\9702-P1_answers.json";
        let answer = "?";
        
        try {
            if (fs.existsSync(jsonPath)) {
                // Read and parse the JSON file
                const rawData = fs.readFileSync(jsonPath, 'utf8');
                const jsonData = JSON.parse(rawData);
                
                // Construct the JSON key (e.g., "9702_w25_qp_12")
                const paperKey = `9702_${seriesYear}_ms_${paper}`;
                
                // Check if the paper and question exist in the JSON
                if (jsonData[paperKey] && jsonData[paperKey][question]) {
                    answer = jsonData[paperKey][question];
                } else {
                    answer = "Not Found";
                }
            } else {
                answer = "JSON File Missing";
            }
        } catch (error) {
            new Notice("Error reading answers JSON!");
            console.error(error);
            answer = "Error";
        }
        
        // 5. Construct the Alt Text, File ID, and URL
        const altText = `${monthName} ${fullYear} Paper ${paper} Q${question} | Ans: ${answer}`;
        const fileId = `9702_${seriesYear}_qp_${paper}-Q${question}`;
        const url = `https://fra.cloud.appwrite.io/v1/storage/buckets/9702-p1-parts-jpg/files/${fileId}/view?project=daddy-cambridge`;
        
        // 6. Output the markdown image link
        tR += `![${altText}](${url})`;
        
    } else {
        // Error handling if format isn't matched
        new Notice("Invalid format! Use 'w25 14 5' or '9702_w25_qp_14_q5'");
        tR += "⚠️ **Error:** Invalid format. Use either `w25 14 5` or `9702_w25_qp_14_q5`.";
    }
}
%>