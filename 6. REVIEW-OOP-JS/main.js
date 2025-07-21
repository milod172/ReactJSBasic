class User {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    xinChao() {
        console.log("Xin chao: ", this.name)
    }
}

var user1 = new User("Dũng", 21)
user1.xinChao()

