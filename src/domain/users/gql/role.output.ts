import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field()
  public id!: string;

  @Field()
  public name!: string;
}
