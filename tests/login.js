module.exports = {
'Login test' : function (browser)	{
	browser
	.url('http://ankit.rtcamp.net/wp-admin/')
	.waitForElementVisible('body', 1000)
	.waitForElementVisible('#user_login', 500)
	.setValue('#user_login', 'admin')
	.waitForElementVisible('#user_pass', 500)
	.setValue('#user_pass' , 'rtcamp.com')
	.click('#rememberme')
	.waitForElementVisible('#wp-submit', 1000)
	.click('#wp-submit')
	.end();
	}
};
