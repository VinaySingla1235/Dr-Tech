import axios from "axios";

// import fetch  from 'node-fetch';
async function moodGuesser(message) {
	const config = {
		method: "post",
		url: `http://127.0.0.1:8000/mood?input_mood=${message}`,
		headers: {},
	};

	const response = axios("http://127.0.0.1:8000/mood")
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			// console.log(JSON.stringify(response.data.reply));
			return response.data.reply;
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
