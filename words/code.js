// es5 语法建议如下

// ========== people.js ==========
function People() {

};

/**
 * 睡觉
 * @param int hours 多少小时
 */
People.prototype.sleep = function(hours) {
    console.log(this.name + '睡了' + hours + '小时');
};

/**
 * 讲话
 * @param name 谁讲话
 * @param word 讲了什么
 * @return string []
 */
function say(name, word) {
    var result = name + ' ' + word;
    return result;
};

exports.init = init;
exports.say = say;

// ========== index.js ==========
var People = require('./people');
