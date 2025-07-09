const badWords = ["dog","donkey","pig"];
const sanitizeInput = (req, res, next)=>{
    const {title, content} = req.body;
    const hasBadWord = badWords.some(word=>title.includes(word) || content.includes(word));
    if(hasBadWord){
        return res.status(400).json({error:"inappropriate language"});
    }
    next();
};

module.exports = sanitizeInput;