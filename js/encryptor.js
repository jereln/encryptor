var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value
  },
  getPassword: function() {
    this.password = prompt("Enter your passphrase")
  },
  setUrl: function() {
    this.url = document.URL + '?' + this.encrypt()
  },
  replaceMessageWithUrl: function () {
    document.getElementById('message').value = this.url
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
};

var decoder = {
  getPassword: function() {
    this.password = prompt("Enter your passphrase");
  },
  getCypherText: function() {
    this.cypherText = document.URL.split('?')[1];
  },
  decrypt: function() {
    this.getPassword();
    this.getCypherText();
    return CryptoJS.AES.decrypt(this.cypherText, this.password).toString(CryptoJS.enc.Utf8);
  }
};

module.exports = encoder;
