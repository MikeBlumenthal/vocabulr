const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function () {
  return fetch(this.url)
  .then((response) => response.json())
};

Request.prototype.getOne = function (id) {
  return fetch(`${this.url}/${id}`)
  .then((response) => response.json())
};

Request.prototype.post = function (object) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => response.json());
};



module.exports = Request;
