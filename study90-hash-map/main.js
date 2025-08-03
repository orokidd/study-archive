class HashMap {
  constructor(initialCapacity = 8) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.size = 0;
    this.loadFactor = 0.75;
  }

  _hash(key) {
    let hash = 5381;
    const str = key.toString();
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return Math.abs(hash) % this.buckets.length;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value; // Update value if key exists
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.buckets.length > this.loadFactor) {
      this._resize();
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (let bucket of this.buckets) {
      for (let [key] of bucket) {
        keys.push(key);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let bucket of this.buckets) {
      for (let [, value] of bucket) {
        values.push(value);
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        entries.push([...pair]);
      }
    }
    return entries;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.buckets.length * 2).fill(null).map(() => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        this.set(key, value); // Rehash
      }
    }
  }
}


const map = new HashMap();

map.set("Carlos", "I am the old value.");
map.set("Carlos", "I am the new value.");

map.set("Rama", "first");
map.set("Sita", "second");

console.log(map.get("Carlos")); // "I am the new value."
console.log(map.has("Rama")); // true
console.log(map.remove("Rama")); // true
console.log(map.length()); // 2
console.log(map.keys()); // ["Carlos", "Sita"]
console.log(map.values()); // ["I am the new value.", "second"]
console.log(map.entries()); // [["Carlos", "..."], ["Sita", "..."]]

map.clear();
console.log(map.length()); // 0
