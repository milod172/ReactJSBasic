## 🧠 Một số kiến thức khác:

**const [a, b] = array** → Destructuring mảng

 ```jsx 
 const [user, setUser] = useState({fullName: '', email: ''})
 ```

 **Trả về**: một mảng gồm **2 phần tử**:
     - đối tượng user
     - hàm để cập nhật lại đối tượng user đó


**const {a, b} = object** → Destructuring đối tượng

```jsx 
const person = {
  name: 'An',
  age: 25,
  city: 'HCM'
};

// Destructuring object
const { name, age } = person;
```

