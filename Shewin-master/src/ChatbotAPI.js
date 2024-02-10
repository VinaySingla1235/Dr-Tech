import axios from "axios";

// import fetch  from 'node-fetch';
async function moodGuesser(message) {
    const response = await axios.get(`http://127.0.0.1:8000/mood?input_mood=${message}`)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data.Analytics_of_Prediction;
        })
        .catch(function (error) {
            console.log(error);
        });
    return response;
}

const API = {

	GetChatbotResponse: async (message) => {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if (message === "hi" || message === "hello" || message === "hey")
					resolve(
						"Here I am  your Moody bot ! I can analyse ur mood as you write "
					);
				else {
					const data = moodGuesser(message);
					resolve(
						data
					);
					console.log();
					// resolve();
					// console.log(moodGuesser(message));
				}
			}, 1000);
		});
	},
};

export default API;
