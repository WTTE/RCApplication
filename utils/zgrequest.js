const baseurl= "https://capi.ructrip.com"
export function myRequestPost(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseurl + url,
			header: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}
