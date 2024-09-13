import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messages = [
         "Elon Kweku Musk", 
          "Albert Kojo Einstein",
         "Marie Adwoa Curie",
          "Charles Papa Darwin",
    ]
function getMessages(req, res) {
    console.log(__filename, __dirname);
    
    res.render("messages", {
        messages
    })

}

export {
    getMessages
}