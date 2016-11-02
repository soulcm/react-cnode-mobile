var single = (function(){
	function Storage() {
		this.storage = {}

	}

    Storage.prototype.setItem = function(name, value) {
        this.storage[name] = value;
    }

    Storage.prototype.getItem = function(name) {
        return this.storage[name]
    }

    Storage.prototype.removeItem = function(name) {
        delete this.storage[name];
    }

	let instance;

	return {
        getInstance: function () {
            return instance || (instance = new Storage());
        },
	}
})();

export default single.getInstance();
