
const Web = {
  teks: 'hello',
  render: function () {
    setTimeout(() => {
      console.log('menampilkan :' + this.teks)
    }, 1000)
  }
}
const Web1 = {
  teks: 'hello1',
  render: function () {
    setTimeout(function () {
      console.log('menampilkan:' + this.teks)
    }.bind(this), 1000)
  }
}
const Web2 = {
  teks: 'hello2',
  render: function () {
    const that = this
    setTimeout(function () {
      console.log('menampilkan:' + that.teks)
    }, 1000)
  }
}
console.log(Web.teks)
Web.render()
console.log(Web1.teks)
Web1.render()
console.log(Web2.teks)
Web2.render()

const Web3 = {
  teks: 'hello',
  render: () => { // kita ubah jadi format arrow function
    setTimeout(() => {
      console.log('menampilkan:' + this)
    }, 1000)
  }
}
console.log(Web3.teks)
Web3.render()

const x = 10
if (x >= 5) {
  console.log('lulus')
} else {
  console.log('tidak lulus')
}
const nilai = 90
console.log((nilai >= 75) ? 'Lulus' : ' Tidak Lulus')

const auth = true
console.log(auth && 'Selamat Datang')

const user = {
  nama: 'budi',
  umur: 25,
  pekerjaan: 'akuntan'
}
console.log(user.pekerjaan || 'pengangguran')
const user1 = {
  name: 'Burhan',
  street: 'Jl. Jenderal Soedirman 50',
  city: 'Jakarta'
}
console.log(user1.name) // Burhan
console.log(user1.street) // Jl. Jenderal Soedirman 50
console.log(user1.city) // Jakarta
