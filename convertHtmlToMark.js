import TurndownService from "turndown";
import fs from "fs";
import path from "path";

async function convertHtmlToMarkdown(filePath) {
    try {
        // Read the JSON file
        const data = await fs.promises.readFile(filePath, "utf8");
        const jsonData = JSON.parse(data);

        // Create a new Turndown service instance
        const turndownService = new TurndownService();

        // Iterate over each object in the JSON data
        for (const obj of jsonData) {
            // Convert the HTML to Markdown
            const markdownWithBackSlash = turndownService.turndown(obj.html);
            const markdown = markdownWithBackSlash.replace(/\\/g, "");
            // Replace the HTML with the Markdown
            obj.html = markdown;
        }

        // Write the updated JSON data back to the file
        await fs.promises.writeFile(
            filePath,
            JSON.stringify(jsonData, null, 2)
        );
    } catch (error) {
        console.error("Error converting HTML to Markdown:", error);
    }
}

const directoryPath = "./prompt_templates/GPTs/knowledge_base";
const files = fs.readdirSync(directoryPath).filter((file) => file.endsWith(".json"));
for (const file of files) {
    const filePath = path.join(directoryPath, file);
    convertHtmlToMarkdown(filePath);
}