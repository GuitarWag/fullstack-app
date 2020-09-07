import {
  Entity,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import { Length, IsNotEmpty, IsEmail } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(4, 100)
  password: string;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
