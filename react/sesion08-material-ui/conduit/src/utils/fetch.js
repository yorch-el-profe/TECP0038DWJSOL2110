const $fetch = {
	get: function (url) {
		return fetch(url).then((response) =>
			response
				.json()
				.then((data) =>
					response.ok ? Promise.resolve(data) : Promise.reject(data)
				)
		);
	},

	post: function (url, body) {
		return fetch(url, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) =>
			response
				.json()
				.then((data) =>
					response.ok ? Promise.resolve(data) : Promise.reject(data)
				)
		);
	},
};

export default $fetch;
