// src/advertisement/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsEmail } from 'class-validator'

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  title: string

  @IsString()
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  picture: string

  @Column('integer')
  price: number

  @IsEmail()
  @Column('text')
  email: string

  @Column('integer')
  phoneNumber: number
}

