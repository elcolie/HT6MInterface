function LocalStorageMock(){
  this.store = {};
  
  this.getItem = function(key){
    return this.store[key] || null
  };
  this.setItem = function(key, value) {
    this.store[key] = value
  };
  
  this.removeItem = function(key) {
    delete this.store[key]
  };
  
}

const localStorageMock = new LocalStorageMock();
export default localStorageMock;
