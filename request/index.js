const baseUrl = "https://capi.ructrip.com"

export function myRequestPost(url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			header:{
				'Content-Type':'application/json'
			},
			method:"POST",
			data:data,
			success:function(res) {
				console.log('POST成功了',res),
				resolve(res.data)
			},
			fail:function(err){
				reject(err)
			}
		})
	})
	}