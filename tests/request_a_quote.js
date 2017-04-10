module.exports = {
  tags: ['Sidekick'],
  'Demo test Sidekick' : function (client) {
    client
      .url('http://sidekickc.com/')
      .waitForElementVisible('body', 10000)
	  .assert.visible('#menu-item-243','dropdown item prices')
	  .click('#menu-item-243')
	  .waitForElementVisible('.round', 10000)
	  .assert.visible('.round')
	  .click('.round')
	  .waitForElementVisible('#gform_submit_button_1', 10000)
	  .assert.visible('#gform_submit_button_1')
	  .click('#gform_submit_button_1')
	  .waitForElementVisible('.validation_error', 10000)
	  .assert.visible('.validation_error')
	  .end();
  }
};