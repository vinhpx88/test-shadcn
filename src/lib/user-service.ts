import { hash, compare } from 'bcrypt';
import prisma from './prisma';

export async function createUser(username: string, password: string, email?: string, name?: string) {
  const hashedPassword = await hash(password, 10);
  
  return prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
      name,
    },
  });
}

export async function getUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: { username },
  });
}

export async function validateUser(username: string, password: string) {
  const user = await getUserByUsername(username);
  
  if (!user) {
    return null;
  }
  
  const isValid = await compare(password, user.password);
  
  if (!isValid) {
    return null;
  }
  
  return { id: user.id, username: user.username };
}
