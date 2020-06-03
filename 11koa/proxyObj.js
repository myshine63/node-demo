// 使用setter和getter给对象添加辅助属性,相当于给person添加了一个虚拟属性
let person = {
    info: {
        name: 'tom',
        age: 14
    },
    get name() {
        return this.info.name
    },
    set name(val) {
        this.info.name = val;
    }
};

console.log(person.name);
console.log(person.info.name);
person.name = 'jerry';
console.log(person.name);
console.log(person.info.name);