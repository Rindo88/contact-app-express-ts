import prisma from "../src/application/database";
import bcrypt from 'bcrypt';
import ResponseError from "../src/errors/response-error";

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
        password: await bcrypt.hash('test', 10),
        token: 'test'
      }
    });
  }

  static async get () {
    const user = await prisma.user.findUnique({
      where: {
        username: 'test'
      }
    });
    // if(!user){
    //   throw new ResponseError(404, 'data tidak ditemukan');
    // }
    return user
  }
}

export default UserTest;