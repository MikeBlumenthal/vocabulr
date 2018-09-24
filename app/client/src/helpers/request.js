const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json())
};

Request.prototype.getOne =function (answer) {
  const id = answer.id;
  return fetch(`${this.url}/${id}`)
  .then((response) => response.json())
}

module.exports = Request;
