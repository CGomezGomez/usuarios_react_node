const controller = {};
const path = require('path');
const usersFile = path.resolve(__dirname, '../../data/users.json');
const fs = require('fs/promises');
const {v4} = require('uuid');


controller.getUsers = async(req , res) => {

    try{
        const data = await  fs.readFile(usersFile)
        const jsonData = await JSON.parse(data)

        res.send(jsonData)
    }catch(err){
        res.send('Error al leer archivo');
    }
};

controller.createUser = async (req, res) => {
  try {
    const { title, name, age, username, email } = req.body;

    const randomNumber = Math.floor(Math.random() * 99) + 1; 

    const newUser = {
      userId: v4(),
      title,
      name,
      age: parseInt(age), 
      username,
      email,
      profileImage: `https://randomuser.me/api/portraits/${randomNumber < 50 ? 'men' : 'women'}/${randomNumber}.jpg`,
      active: true,
    };

  
    const data = await fs.readFile(usersFile);
    const jsonData = await JSON.parse(data);

    jsonData.push(newUser);

    
    await fs.writeFile(usersFile, JSON.stringify(jsonData));

    res.send({message: 'Todo ok'})
    res.end();

   
  } catch (err) {
    res.send({ error: 'Error al guardar usuario'});
  }
};

module.exports = controller