import prisma from "../src/application/database";
import bcrypt from 'bcrypt';

class UserTest {
  static async deleteUser () {
    await prisma.user.deleteMany({
      where: {
        username: 'test'
      }
    });
  }
  
  static async addUser () {
    await prisma.user.create({
      data: {
        name: 'test',
        username: 'test',
        password: await bcrypt.hash('test', 10)
      }
    })
  }
}

export default UserTest;