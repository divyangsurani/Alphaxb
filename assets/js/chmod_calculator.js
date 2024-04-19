const App = {
  data: function () {
    return {
      numeric: 777,
      symbolic: '-rwxrwxrwx',
      owner: {
        read: true,
        write: true,
        execute: true
      },
      group: {
        read: true,
        write: true,
        execute: true
      },
      other: {
        read: true,
        write: true,
        execute: true
      }
    }
  },
  methods: {
    toSymbolicMode: function () {
      this.symbolic   = '----------'
      const array     = this.symbolic.split('')
      const n         = this.numeric.toString().padStart(3, 0)
      const [u, g, o] = n.split('').map(x => parseInt(x))
      if (this.canRead(u))    array[1] = 'r'
      if (this.canWrite(u))   array[2] = 'w'
      if (this.canExecute(u)) array[3] = 'x'
      if (this.canRead(g))    array[4] = 'r'
      if (this.canWrite(g))   array[5] = 'w'
      if (this.canExecute(g)) array[6] = 'x'
      if (this.canRead(o))    array[7] = 'r'
      if (this.canWrite(o))   array[8] = 'w'
      if (this.canExecute(o)) array[9] = 'x'
      this.symbolic = array.join('')
    },
    canRead: function (n) {
      return n >= 4
    },
    canWrite: function (n) {
      return [2, 3, 6, 7].indexOf(n) > -1
    },
    canExecute: function (n) {
      return n % 2 > 0 && n > 0
    },
    updateCheckboxes: function () {
      this.toSymbolicMode()
      const array = this.symbolic.split('')
      this.owner.read     = array[1] == 'r'
      this.owner.write    = array[2] == 'w'
      this.owner.execute  = array[3] == 'x'
      this.group.read     = array[4] == 'r'
      this.group.write    = array[5] == 'w'
      this.group.execute  = array[6] == 'x'
      this.other.read     = array[7] == 'r'
      this.other.write    = array[8] == 'w'
      this.other.execute  = array[9] == 'x'
    },
    updateCheckboxesFromSymbolic: function () {
      const array = this.symbolic.padStart(10, '-').split('')
      this.owner.read     = array[1] == 'r'
      this.owner.write    = array[2] == 'w'
      this.owner.execute  = array[3] == 'x'
      this.group.read     = array[4] == 'r'
      this.group.write    = array[5] == 'w'
      this.group.execute  = array[6] == 'x'
      this.other.read     = array[7] == 'r'
      this.other.write    = array[8] == 'w'
      this.other.execute  = array[9] == 'x'
      this.checkedChange()
    },
    checkedChange: function () {
      this.numeric = 0
      if (this.owner.read)    this.numeric += 400
      if (this.owner.write)   this.numeric += 200
      if (this.owner.execute) this.numeric += 100
      if (this.group.read)    this.numeric +=  40
      if (this.group.write)   this.numeric +=  20
      if (this.group.execute) this.numeric +=  10
      if (this.other.read)    this.numeric +=   4
      if (this.other.write)   this.numeric +=   2
      if (this.other.execute) this.numeric +=   1
      this.toSymbolicMode()
    },
    isSymbol: function (evt) {
      const charcodes = '-rwx'.split('').map(x => x.charCodeAt(0))
      evt = (evt) ? evt : window.event;
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && charcodes.indexOf(charCode) == -1) && charCode !== 46) {
        evt.preventDefault();;
      } 
      else {
        return true;
      }
    },
    isNumber: function (evt) {
      evt = (evt) ? evt : window.event;
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 55)) && charCode !== 46) {
        evt.preventDefault();;
      } 
      else {
        return true;
      }
    }
  }
}


Vue.createApp(App).mount('#app')