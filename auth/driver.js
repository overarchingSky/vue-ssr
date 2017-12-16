module.exports = {
	request: function (req, token) {
		this.options.http._setHeaders.call(this, req, {ACCESS_TOKEN: token})
	},
	response: function (res) {
		let status = res.status
		if (status == 200) {
			// Get Token from response header
			return res.headers['access_token']
		}
		else {
			return null
		}
	}
}