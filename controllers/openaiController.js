
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const genImage = async (req, res) => {

    const{prompt, size}= req.body; // this req.body comes from frontend FORM 
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize
        });

        const imageUrl = response.data.data[0].url;

        //  sending response to client 

        res.status(200).json({
            success: true,
            data: imageUrl
        })

    } catch (error) {

        if (error.response) {
            console.log(erro.response.status);
            console.log(error.message)
        }

        res.status(400).json({
            success: false,
            error: "Image could not be generated"
        })

    }
}

module.exports = { genImage }