module.exports = {
'Login test' : function (browser)	{
	browser
	.url('http://ankit.rtcamp.net/wp-admin/')
	.waitForElementVisible('body', 1000)
	.setValue('#user_login', 'admin')
	.setValue('#user_pass' , 'rtcamp.com')
	.click('#rememberme')
	.click('#wp-submit')
	.waitForElementVisible('wp-submit', 1000)
	.click('#wp-menu-name')
	.waitForElementVisible('wp-submit', 1000)
	.click('.add-new-h2')
	.end();
	}
};
