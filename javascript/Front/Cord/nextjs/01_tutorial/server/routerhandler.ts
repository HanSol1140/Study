const routerexpress = require('express');
const router = routerexpress.Router();
const axios = require('axios');

router.get('/test1', async (req:any, res:any) => {
    console.log("test1");
    try{
        const response = await axios.get("http://http://localhost:8001/test");
        if(response.status === 2000){
            console.log("ㅁㅁㅁㅁ");
        }
    } catch (error) {
        console.error('Error with API call:', error);
        console.log("error : ", error);
    }
});


router.get('/test2', (req:any, res:any) => {
    console.log("test2");
});

module.exports = router;
