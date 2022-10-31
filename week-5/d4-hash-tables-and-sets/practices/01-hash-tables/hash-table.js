const sha256 = require("js-sha256");

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

class HashTable {
	constructor(numBuckets = 4) {
		this.count = 0;
		this.capacity = numBuckets;
		this.data = new Array(this.capacity).fill(null);
	}

	hash(key) {
		// Your code here
		const hash = sha256(key);
		const first8 = hash.slice(0, 8);
		const decimal = parseInt(first8, 16);
		return decimal;

		//return parseInt(sha256(key).slice(0,8), 16);
	}

	hashMod(key) {
		// Your code here
		return this.hash(key) % this.capacity;
	}

	insertNoCollisions(key, value) {
		const newPair = new KeyValuePair(key, value);
		const idx = this.hashMod(key);

		if (this.data[idx])
			throw new Error("hash collision or same key/value pair already exists!");
		this.data[idx] = newPair;
		this.count++;
	}

	insertWithHashCollisions(key, value) {
		// Your code here
		const newPair = new KeyValuePair(key, value);
		const idx = this.hashMod(key);
		if (!this.data[idx]) {
			this.data[idx] = newPair;
		} else {
			newPair.next = this.data[idx];
			this.data[idx] = newPair;
		}
		this.count++;
	}

	insert(key, value) {
		// Your code here
		const idx = this.hashMod(key);
		let currentPair = this.data[idx]; // -> kvp
		while (currentPair && currentPair.key !== key) {
			currentPair = currentPair.next;
		}

		if (currentPair) {
			currentPair.value = value;
			return this;
		}

    const newPair = new KeyValuePair(key, value);
    if (this.data[idx]) newPair.next = this.data[idx];
    this.data[idx] = newPair;
    this.count++
	}
}

module.exports = HashTable;
