/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for (const email of emails) {
        set.add(getValidEmail(email));
    }
    return set.size;
};

var getValidEmail = function (email) {
    let [local, domain] = email.split('@');
    [local, ...rest] = local.split('+');
    local = local.replace(/\./g, '');
    return `${local}@${domain}`
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));