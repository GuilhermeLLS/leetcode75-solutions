// ! I DID NOT UNDERSTAND THE QUESTION


var RecentCounter = function() {
  this.queue = []    
}

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    // [t - 3000, t]
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */